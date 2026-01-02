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
      if (vars[a] !== undefined) return vars[a];
      const parsed = parseFloat(a);
      if (!isNaN(parsed)) return parsed;
      return 0;
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
   // Track current point for arc calculations
   let curX = 0;
   let curY = 0;

   return shapePath.commands.map(cmd => {
      const d = cmd.data.map(val => {
         // data can be variable name or string number or mix
         if (typeof val === 'number') return val;
         // Try variable lookup first - critical for variables like "3cd4" which parseFloat
         // would incorrectly parse as 3 (parseFloat parses leading numeric portion)
         if (vars[val] !== undefined) return vars[val];
         // Fall back to parsing as number for literal numeric strings like "100000"
         const parsed = parseFloat(val);
         if (!isNaN(parsed)) return parsed;
         return 0;
      });

      let result = '';
      switch (cmd.type) {
         case 'M':
            curX = d[0];
            curY = d[1];
            result = `M ${d[0]} ${d[1]}`;
            break;
         case 'L':
            curX = d[0];
            curY = d[1];
            result = `L ${d[0]} ${d[1]}`;
            break;
         case 'C':
            curX = d[4];
            curY = d[5];
            result = `C ${d[0]} ${d[1]}, ${d[2]} ${d[3]}, ${d[4]} ${d[5]}`;
            break;
         case 'Q':
            curX = d[2];
            curY = d[3];
            result = `Q ${d[0]} ${d[1]}, ${d[2]} ${d[3]}`;
            break;
         case 'A':
            // OOXML arcTo: wR, hR, stAng, swAng
            // wR, hR = radii of the ellipse
            // stAng = start angle (60000 units = 1 degree)
            // swAng = sweep angle
            const arcResult = convertArcToSvg(d[0], d[1], d[2], d[3], curX, curY);
            curX = arcResult.endX;
            curY = arcResult.endY;
            result = arcResult.path;
            break;
         case 'Z':
            result = 'Z';
            break;
      }
      return result;
   }).join(' ');
}

interface ArcResult {
   path: string;
   endX: number;
   endY: number;
}

function convertArcToSvg(wR: number, hR: number, stAng: number, swAng: number, curX: number, curY: number): ArcResult {
    // OOXML uses Y-DOWN coordinates with positive angles = clockwise
    const stAngDeg = stAng / 60000;
    const swAngDeg = swAng / 60000;
    const stRad = stAngDeg * Math.PI / 180;
    const endRad = stRad + (swAngDeg * Math.PI / 180);

    // For clockwise-positive Y-down coordinates:
    // Point on ellipse: x = cx + rx * cos(θ), y = cy + ry * sin(θ)
    // Given current point at stAng:
    // curX = cx + rx * cos(stAng)  →  cx = curX - rx * cos(stAng)
    // curY = cy + ry * sin(stAng)  →  cy = curY - ry * sin(stAng)

    // Calculate ellipse center based on current point being at stAng
    const cx = curX - wR * Math.cos(stRad);
    const cy = curY - hR * Math.sin(stRad);

    // Calculate end point (using same sign convention as cy)
    const endX = cx + wR * Math.cos(endRad);
    const endY = cy + hR * Math.sin(endRad);

    // SVG arc parameters:
    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    const largeArc = Math.abs(swAngDeg) > 180 ? 1 : 0;
    // sweep-flag=1 means clockwise in SVG's Y-down system
    const sweepFlag = swAng >= 0 ? 1 : 0;

    const path = `A ${wR} ${hR} 0 ${largeArc} ${sweepFlag} ${endX} ${endY}`;

    return { path, endX, endY };
}
