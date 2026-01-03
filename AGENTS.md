# User inputs
1. For quick testing use npx tsx --noEmit, no need to build and e2e for only few lines of code changes

# AGENTS.md - Agentic Coding Guidelines for docxjs

> DOCX rendering library that converts Word documents to HTML while preserving semantic structure.
> Repository: https://github.com/VolodymyrBaydalka/docxjs

## Quick Reference
op
```bash
# Install dependencies
npm install

# Build (development)
npm run build

# Build (production - generates all dist formats)
npm run build-prod

# Watch mode
npm run watch

# Run e2e tests (requires build first)
npm run build && npm run e2e

# Run tests in watch mode
npm run e2e-watch
```

## Build System

- **Bundler**: Rollup with TypeScript plugin
- **Entry point**: `src/docx-preview.ts`
- **Outputs**:
  - `dist/docx-preview.js` - UMD format (development)
  - `dist/docx-preview.min.js` - UMD minified (production)
  - `dist/docx-preview.mjs` - ES module (production)
  - `dist/docx-preview.min.mjs` - ES module minified (production)
- **External dependency**: JSZip (not bundled, expected as global or peer dep)

## Testing

- **Framework**: Karma + Jasmine
- **Browser**: Chrome (headless available)
- **Test location**: `tests/**/*spec.js`
- **Test files**: `.docx` documents with expected `.html` output

### Running Single Tests

Tests are organized by feature in `tests/render-test/`. Each test has:
- `document.docx` - Input document
- `result.html` - Expected HTML output

To run a specific test subset, modify `tests/render-test/test.spec.js`:
```javascript
const tests = ['text'];  // Run only 'text' test instead of all
```

Or use Jasmine's `fit()` for focused tests:
```javascript
fit(`from ${path} should be correct`, async () => { ... });
```

### Test Pattern

```javascript
describe("Feature name", function () {
  it("should do something", async () => {
    const docBlob = await fetch('/base/tests/.../document.docx').then(r => r.blob());
    const div = document.createElement("div");
    document.body.appendChild(div);
    
    await docx.renderAsync(docBlob, div);
    
    expect(actual).toBe(expected);
    div.remove();
  });
});
```

## Code Style

### Formatting

- **Indentation**: Tabs (4 spaces width) - enforced by `.editorconfig`
- **Semicolons**: Required
- **Quotes**: Double quotes for strings
- **Line length**: No strict limit, but keep readable (~120 chars)
- **Trailing commas**: No trailing commas in arrays/objects

### TypeScript Configuration

```json
{
  "target": "ES2020",
  "module": "ES2022",
  "moduleResolution": "bundler",
  "noImplicitAny": false,     // Implicit any allowed
  "esModuleInterop": true
}
```

### Imports

```typescript
// External dependencies first
import { OutputType } from "jszip";

// Internal imports - use relative paths with extensions omitted
import { DocumentParser } from './document-parser';
import { Relationship, RelationshipTypes } from './common/relationship';
import { Part } from './common/part';
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Classes | PascalCase | `DocumentParser`, `HtmlRenderer` |
| Interfaces | PascalCase, I-prefix for DOM types | `IDomStyle`, `IDomNumbering` |
| Type aliases | PascalCase, Wml prefix for Word elements | `WmlParagraph`, `WmlTable` |
| Enums | PascalCase | `DomType`, `LengthUsage` |
| Functions | camelCase | `parseAsync`, `renderDocument` |
| Variables | camelCase | `documentPart`, `styleMap` |
| Constants | camelCase (not UPPER_CASE) | `defaultOptions`, `topLevelRels` |
| Private fields | Underscore prefix | `_package`, `_parser` |

### Type Patterns

```typescript
// Interface for DOM elements
export interface OpenXmlElement {
    type: DomType;
    children?: OpenXmlElement[];
    cssStyle?: Record<string, string>;
    parent?: OpenXmlElement;
}

// Extended interface for specific elements
export interface WmlParagraph extends OpenXmlElement {
    styleName?: string;
    numbering?: ParagraphNumbering;
}

// Record type for style mappings
styleMap: Record<string, IDomStyle> = {};
```

### Class Structure

```typescript
export class ClassName {
    // Public fields first
    className: string = "docx";
    document: WordDocument;

    // Private fields
    private _internal: any;

    // Constructor
    constructor(public htmlDocument: Document) {}

    // Public async methods
    async render(document: WordDocument): Promise<void> { }

    // Public methods
    renderElement(elem: OpenXmlElement): Node | Node[] { }

    // Private methods
    private processStyles(styles: IDomStyle[]): void { }
}
```

### Error Handling

- Use optional chaining (`?.`) and nullish coalescing (`??`) extensively
- Debug logging gated behind `options.debug` flag
- No throwing exceptions in parsing - gracefully handle missing/invalid data

```typescript
// Preferred pattern
const value = xml.attr(node, "val") ?? defaultValue;
const child = parent?.children?.find(x => x.type === type);

// Debug logging
if (this.options.debug) {
    console.warn(`DOCX: Unknown element: ${elem.localName}`);
}
```

### XML Parsing Pattern

The codebase uses a custom XML helper (`src/parser/xml-parser.ts`):

```typescript
import xml from './parser/xml-parser';

// Attribute access
const id = xml.attr(node, "id");
const width = xml.lengthAttr(node, "w", LengthUsage.Dxa);
const isDefault = xml.boolAttr(node, "default");

// Element traversal
for (const elem of xml.elements(node)) {
    switch (elem.localName) {
        case "p": this.parseParagraph(elem); break;
        case "tbl": this.parseTable(elem); break;
    }
}
```

## Architecture Overview

```
src/
├── docx-preview.ts      # Main entry point, public API
├── document-parser.ts   # XML to DOM parsing
├── html-renderer.ts     # DOM to HTML rendering
├── word-document.ts     # Document structure management
├── document/            # Document elements (paragraph, run, table, etc.)
├── common/              # Shared utilities (Part, Relationship)
├── numbering/           # List numbering
├── styles/              # Style definitions
├── theme/               # Theme colors/fonts
├── header-footer/       # Headers and footers
├── notes/               # Footnotes and endnotes
├── comments/            # Comment annotations
├── vml/                 # VML (legacy vector graphics)
└── presets/             # Shape geometry presets
```

### Core Flow

1. `parseAsync()` - Load DOCX zip, parse XML to internal DOM
2. `renderDocument()` - Convert DOM to HTML elements
3. `HtmlRenderer.render()` - Orchestrates rendering with styles, fonts, etc.

### Key Classes

- `WordDocument` - Main document container, loads parts
- `DocumentParser` - Parses Word XML to internal DOM types
- `HtmlRenderer` - Renders DOM to HTML, manages CSS generation
- `OpenXmlPackage` - Handles ZIP file operations via JSZip

## Common Tasks

### Adding New Element Support

1. Add type to `DomType` enum in `src/document/dom.ts`
2. Create interface extending `OpenXmlElement`
3. Add parsing in `DocumentParser.parseRun()` or appropriate method
4. Add rendering case in `HtmlRenderer.renderElement()`

### Modifying CSS Generation

CSS is generated in `HtmlRenderer`:
- `renderDefaultStyle()` - Base styles
- `renderStyles()` - Document styles
- `renderTheme()` - Theme variables
- `styleToString()` - CSS rule generator

### Working with Measurements

```typescript
import { LengthUsage, convertLength } from './document/common';

// Convert Word units to CSS
xml.lengthAttr(node, "w", LengthUsage.Dxa);     // 1/20 of a point
xml.lengthAttr(node, "cx", LengthUsage.Emu);    // EMUs (914400 per inch)
xml.lengthAttr(node, "sz", LengthUsage.FontSize); // Half-points
```

## Important Notes

- **Do NOT include `./dist` folder in PRs** - It's built from source
- **External dependency**: JSZip must be available globally or as peer dependency
- **Browser-only**: Library uses DOM APIs, no Node.js support
- **No strict typing**: `noImplicitAny: false` - be careful with untyped values
- **Tabs not spaces**: Enforced by `.editorconfig` for `.ts` files
