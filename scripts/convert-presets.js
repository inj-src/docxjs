const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');
const path = require('path');

const inputPath = process.argv[2] || 'presetShapeDefinitions.xml';
const outputPath = process.argv[3] || 'src/presets/preset-geometries.ts';

if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
}

console.log(`Reading ${inputPath}...`);
const xmlData = fs.readFileSync(inputPath, 'utf8');

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    removeNSPrefix: true,
    checkXmlCharForBody: false
});

console.log('Parsing XML...');
const parsed = parser.parse(xmlData);

// Root element can be presetShapeDefinitons (typo in standard) or definitions
const root = parsed.presetShapeDefinitons || parsed.presetShapeDefinitions;
if (!root) {
    console.error('Root element presetShapeDefinitons not found');
    process.exit(1);
}

const geometries = {};

function parseFormula(fmla) {
    if (!fmla) return { op: 'val', args: ['0'] };
    const parts = fmla.split(/\s+/);
    return {
        op: parts[0],
        args: parts.slice(1)
    };
}

function parsePoint(pt) {
    return [pt['@_x'], pt['@_y']];
}

Object.keys(root).forEach(shapeName => {
    // Skip random text nodes or unwanted keys
    if (shapeName === '#text') return;
    
    const shapeDef = root[shapeName];
    // console.log(`Processing ${shapeName}...`);

    const geometry = {
        adjustments: {},
        guides: [],
        paths: []
    };

    // 1. Adjustments (avLst)
    if (shapeDef.avLst && shapeDef.avLst.gd) {
        const guides = Array.isArray(shapeDef.avLst.gd) ? shapeDef.avLst.gd : [shapeDef.avLst.gd];
        guides.forEach(gd => {
            const name = gd['@_name'];
            const fmla = gd['@_fmla'];
            const parsedFmla = parseFormula(fmla);
            // In avLst, formulas are typically "val 12345"
            // We want the numeric default value
            if (parsedFmla.op === 'val' && parsedFmla.args.length > 0) {
                geometry.adjustments[name] = parseInt(parsedFmla.args[0], 10);
            }
        });
    }

    // 2. Guides (gdLst)
    if (shapeDef.gdLst && shapeDef.gdLst.gd) {
        const guides = Array.isArray(shapeDef.gdLst.gd) ? shapeDef.gdLst.gd : [shapeDef.gdLst.gd];
        guides.forEach(gd => {
            geometry.guides.push({
                name: gd['@_name'],
                ...parseFormula(gd['@_fmla'])
            });
        });
    }

    // 3. Text Rect (rect)
    if (shapeDef.rect) {
        geometry.textRect = {
            l: shapeDef.rect['@_l'],
            t: shapeDef.rect['@_t'],
            r: shapeDef.rect['@_r'],
            b: shapeDef.rect['@_b']
        };
    }

    // 4. Paths (pathLst)
    if (shapeDef.pathLst && shapeDef.pathLst.path) {
        const paths = Array.isArray(shapeDef.pathLst.path) ? shapeDef.pathLst.path : [shapeDef.pathLst.path];
        
        paths.forEach(p => {
            const pathData = {
                commands: [],
                fill: p['@_fill'] || undefined,
                stroke: p['@_stroke'] !== 'false' // default true
            };

            // Order matters, so we iterate keys or children... 
            // fast-xml-parser usually puts children in order if we access them, but structure is:
            // <moveTo>...</moveTo> <lnTo>...</lnTo>
            // Since fast-xml-parser groups by tag name, order is lost for mixed tags!!
            // This is a problem. We need 'preserveOrder: true' option for paths.
            // But we already parsed with global options.
            // Let's rely on the fact that path children are usually simple or we can just re-parse this section if needed? 
            // Actually, for shapes, the order of move/line definitely matters.
            // fast-xml-parser with default settings merges same-named tags into arrays.
            // e.g. { moveTo: [...], lnTo: [...] } <- Order lost!
            // WE MUST FIX THIS.
        });
    }
});

// Since we need order preserved for paths, let's use a second parser instance just for that, 
// OR just use preserveOrder: true globally.
// Let's rewrite using preserveOrder: true properly.

const orderedParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    removeNSPrefix: true,
    preserveOrder: true
});

console.log('Parsing XML with order preservation...');
const orderedParsed = orderedParser.parse(xmlData);

// Root is usually the first element in the array
const orderedRootContainer = orderedParsed.find(x => x.presetShapeDefinitons || x.presetShapeDefinitions);
if (!orderedRootContainer) {
    console.error('Root not found');
    process.exit(1);
}
const orderedRoot = orderedRootContainer.presetShapeDefinitons || orderedRootContainer.presetShapeDefinitions;

// Helper to get attributes from an ordered element
// structure: [ { tagName: [ { ...children } ] }, { ":@": { ...attrs } } ]
// In preserveOrder, attributes are in a property `:@` (default) but let's check config.
// Default for preserveOrder + ignoreAttributes: false is:
// [ { tagName: [children], ":@": { attrs } } ]

orderedRoot.forEach(shapeObj => {
    const shapeName = Object.keys(shapeObj).find(k => k !== ':@');
    if (!shapeName) return;

    const shapeContent = shapeObj[shapeName]; // Array of children
    const shapeAttrs = shapeObj[':@'];

    const geometry = {
        adjustments: {},
        guides: [],
        paths: []
    };
    
    // Helper to find specific children
    const avLst = shapeContent.find(x => x.avLst)?.avLst;
    const gdLst = shapeContent.find(x => x.gdLst)?.gdLst;
    const rect = shapeContent.find(x => x.rect); // self-closing usually
    const pathLst = shapeContent.find(x => x.pathLst)?.pathLst;

    // 1. Adjustments
    if (avLst) {
        avLst.forEach(item => {
            if (item.gd) {
                const attrs = item[':@'];
                const fmla = parseFormula(attrs['@_fmla']);
                if (fmla.op === 'val') {
                    geometry.adjustments[attrs['@_name']] = parseInt(fmla.args[0], 10);
                }
            }
        });
    }

    // 2. Guides
    if (gdLst) {
        gdLst.forEach(item => {
            if (item.gd) {
                const attrs = item[':@'];
                geometry.guides.push({
                    name: attrs['@_name'],
                    ...parseFormula(attrs['@_fmla'])
                });
            }
        });
    }

    // 3. Rect
    if (rect) {
        const attrs = rect[':@']; // rect node in ordered parser might look like { rect: [], ':@': {...} }
        if (attrs) {
            geometry.textRect = {
                l: attrs['@_l'],
                t: attrs['@_t'],
                r: attrs['@_r'],
                b: attrs['@_b']
            };
        }
    }

    // 4. Paths
    if (pathLst) {
        pathLst.forEach(pathNodeContainer => {
            if (!pathNodeContainer.path) return;
            const pathNode = pathNodeContainer.path; // children array
            const attrs = pathNodeContainer[':@'] || {};
            
            const shapePath = {
                fill: attrs['@_fill'],
                stroke: attrs['@_stroke'] !== 'false',
                commands: []
            };

            pathNode.forEach(cmdContainer => {
                const cmdType = Object.keys(cmdContainer).find(k => k !== ':@');
                if (!cmdType) return;
                
                const cmdContent = cmdContainer[cmdType];
                const cmdAttrs = cmdContainer[':@'];

                // Helper to get pt from array
                const getPt = (content) => {
                    const ptNode = content.find(x => x.pt);
                    if (ptNode) return [ptNode[':@']['@_x'], ptNode[':@']['@_y']];
                    return ['0', '0']; // fallback
                };

                // Map commands
                switch (cmdType) {
                    case 'moveTo':
                        shapePath.commands.push({ type: 'M', data: getPt(cmdContent) });
                        break;
                    case 'lnTo':
                        shapePath.commands.push({ type: 'L', data: getPt(cmdContent) });
                        break;
                    case 'close':
                        shapePath.commands.push({ type: 'Z', data: [] });
                        break;
                    case 'arcTo':
                        // arcTo attributes: wR, hR, stAng, swAng
                        if (cmdAttrs) {
                            shapePath.commands.push({
                                type: 'A',
                                data: [cmdAttrs['@_wR'], cmdAttrs['@_hR'], cmdAttrs['@_stAng'], cmdAttrs['@_swAng']]
                            });
                        }
                        break;
                    case 'cubicBezTo':
                        // expect 3 pts
                        const pts = cmdContent.filter(x => x.pt).map(x => [x[':@']['@_x'], x[':@']['@_y']]);
                        if (pts.length === 3) {
                            shapePath.commands.push({
                                type: 'C',
                                data: [...pts[0], ...pts[1], ...pts[2]]
                            });
                        }
                        break;
                    case 'quadBezTo':
                        // expect 2 pts
                        const qpts = cmdContent.filter(x => x.pt).map(x => [x[':@']['@_x'], x[':@']['@_y']]);
                        if (qpts.length === 2) {
                            shapePath.commands.push({
                                type: 'Q',
                                data: [...qpts[0], ...qpts[1]]
                            });
                        }
                        break;
                }
            });

            geometry.paths.push(shapePath);
        });
    }

    geometries[shapeName] = geometry;
});


const outputContent = `import { PresetGeometryMap } from './preset-types';

export const presetGeometries: PresetGeometryMap = ${JSON.stringify(geometries, null, 2)};
`;

fs.writeFileSync(outputPath, outputContent);
console.log(`Generated ${Object.keys(geometries).length} presets to ${outputPath}`);
