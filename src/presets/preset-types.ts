
export interface GuideFormula {
    name: string;
    op: string;
    args: string[];
}

export interface PathCommand {
    type: 'M' | 'L' | 'Z' | 'A' | 'C' | 'Q';
    data: (string | number)[]; // [x, y] or [wR, hR, stAng, swAng] etc.
}

export interface ShapePath {
    fill?: string;   // 'none', 'darken', 'lighten', etc.
    stroke?: boolean; // default true
    commands: PathCommand[];
}

export interface TextRect {
    l: string;
    t: string;
    r: string;
    b: string;
}

export interface PresetGeometry {
    adjustments: Record<string, number>; // Default adjustment values
    guides: GuideFormula[];              // Calculated values
    textRect?: TextRect;                 // Text bounding box
    paths: ShapePath[];                  // Drawing paths
}

export type PresetGeometryMap = Record<string, PresetGeometry>;
