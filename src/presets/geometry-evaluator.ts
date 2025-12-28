import { GuideFormula, PathCommand, PresetGeometry, ShapePath } from './preset-types';
import { presetGeometries } from './preset-geometries';

type Vars = Record<string, number>;

export interface EvaluatedPath {
   d: string;
   fill?: string;
   stroke?: boolean;
}

export function evaluateGeometry(
   presetName: string,
   width: number,
   height: number,
   customAdjustments?: Record<string, number>
): EvaluatedPath[] {
   const preset = presetGeometries[presetName];
   if (!preset) return [];

   // 1. Setup built-in variables
   const vars: Vars = {
      w: width,
      h: height,
      l: 0,
      r: width,
      t: 0,
      b: height,
      hc: width / 2,
      vc: height / 2,
      wd2: width / 2,
      hd2: height / 2,
      wd4: width / 4,
      hd4: height / 4,
      wd5: width / 5,
      hd5: height / 5,
      wd6: width / 6,
      hd6: height / 6,
      wd8: width / 8,
      hd8: height / 8,
      wd10: width / 10,
      hd10: height / 10,
      wd32: width / 32,
      hd32: height / 32,
      ss: Math.min(width, height),
      ls: Math.max(width, height),
      cd2: 180 * 60000,
      cd4: 90 * 60000,
      "3cd4": 270 * 60000
   };

   // 2. Apply adjustments
   for (const [name, val] of Object.entries(preset.adjustments)) {
      vars[name] = val;
   }
   if (customAdjustments) {
      for (const [name, val] of Object.entries(customAdjustments)) {
         vars[name] = val;
      }
   }

   // 3. Evaluate guides
   for (const guide of preset.guides) {
      vars[guide.name] = evaluateFormula(guide, vars);
   }

   // 4. Build SVG paths
   return preset.paths.map(path => ({
      d: buildSvgPath(path, vars),
      fill: path.fill,
      stroke: path.stroke
   }));
}

function evaluateFormula(guide: GuideFormula, vars: Vars): number {
   const args = guide.args.map(a => {
      // arg can be number or variable name
      if (!isNaN(parseFloat(a))) return parseFloat(a);
      return vars[a] || 0;
   });

   const [a, b, c] = args;

   switch (guide.op) {
      case '*/': return (a * b) / c;
      case '+-': return (a + b) - c;
      case '+/': return (a + b) / c;
      case '?:': return a > 0 ? b : c;
      case 'abs': return Math.abs(a);
      case 'at2': return Math.atan2(b, a) * (180 / Math.PI) * 60000;
      case 'cos': return a * Math.cos(b / 60000 * Math.PI / 180); // a = x, b = angle
      case 'sin': return a * Math.sin(b / 60000 * Math.PI / 180);
      case 'tan': return a * Math.tan(b / 60000 * Math.PI / 180);
      case 'cat2': return a * Math.cos(Math.atan2(c, b)); // Cosine ArcTangent 2 ?? Spec says "val1 * cos(atan(val3 / val2))"
      case 'sat2': return a * Math.sin(Math.atan2(c, b));
      case 'max': return Math.max(a, b);
      case 'min': return Math.min(a, b);
      case 'mod': return Math.sqrt(a * a + b * b + c * c); // Module aka Length? Spec says "sqrt(x^2 + y^2 + z^2)"
      case 'pin': return (b < a) ? a : ((b > c) ? c : b); // val < min ? min : val > max ? max : val
      case 'sqrt': return Math.sqrt(a);
      case 'val': return a;
      default: return 0;
   }
}

function buildSvgPath(shapePath: ShapePath, vars: Vars): string {
   return shapePath.commands.map(cmd => {
      const d = cmd.data.map(val => {
         // data can be variable name or string number or mix
         if (typeof val === 'number') return val;
         if (!isNaN(parseFloat(val))) return parseFloat(val);
         return vars[val] || 0;
      });

      switch (cmd.type) {
         case 'M': return `M ${d[0]} ${d[1]}`;
         case 'L': return `L ${d[0]} ${d[1]}`;
         case 'C': return `C ${d[0]} ${d[1]}, ${d[2]} ${d[3]}, ${d[4]} ${d[5]}`;
         case 'Q': return `Q ${d[0]} ${d[1]}, ${d[2]} ${d[3]}`;
         case 'A':
            // A wR hR stAng swAng -> svg A rx ry x-axis-rotation large-arc-flag sweep-flag x y
            // Wait, OOXML arcTo is: "arcTo wR hR stAng swAng"
            // It draws an arc from CURRENT point.
            // It's part of an ellipse defined by wR, hR.
            // This is extremely hard to map directly to SVG 'A' without start/end calculation.
            // For now, let's implement a simplified conversion or use a helper to compute endpoint.
            // Simplified: SVG Arc command requires destination.
            // OOXML arcTo doesn't provide destination, it calculates it based on start angle and sweep angle.
            return convertArcToSvg(d[0], d[1], d[2], d[3], vars); // Placeholder implementation
         case 'Z': return 'Z';
      }
      return '';
   }).join(' ');
}

function convertArcToSvg(wR: number, hR: number, stAng: number, swAng: number, vars: Vars) {
   // Current point (x0, y0) is needed... this is tricky without state.
   // BUT the path builder usually appends strings.
   // SVG Path `A rx ry x-rot large-arc sweep x y`
   // We need endpoint x,y.
   // Angle units: 60000 = 1 degree.

   // Convert to radians
   const stRad = stAng / 60000 * Math.PI / 180;
   const swRad = swAng / 60000 * Math.PI / 180;
   const endRad = stRad + swRad;

   // The arc is typically relative to the bounding box of the implied ellipse... 
   // Actually, OOXML "arcTo" implies the ellipse is centered at some point such that 
   // the current pen position corresponds to stAng?
   // "The parameters specify a bounding box... and start/sweep angles."

   // Given the complexity of implementing exact Arcs without current point state, 
   // we might skip Arcs or approximate.
   // However, for basic shapes (arrow, rect, etc) Arcs are rarely used (except roundRect corners?).
   // roundRect uses 'arcTo' or cubic? Usually arcTo for corners.

   // Let's defer exact Arc implementation or approximate as Line for now if complex.
   // Or assume arc is small corner.
   return ``;
}
