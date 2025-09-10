# Introduction

A code demo of an endlessly themable component library built on top of [react-aria-components](https://react-spectrum.adobe.com/react-aria/components.html).

## Features

- Customize anything:
  - Design tokens
  - Assets (fonts and icons)
  - Multi-dimensional UI theming ([learn more]())
  - Component variants
- Tooling integration:
  - TailwindCSS theme
  - TypeScript definitions for component variants
  - PostCSS custom media and custom selectors

## Theming demo

This demo replicates the look and feel of the Button component from different UI libraries/design systems with varying level of theming complexity:

- GitHub Primer: GitHub's design system, with colorblind and high contrast modes
- Material Design 3: Google's design system, with high contrast mode and expressive motion scheme
- Shadcn: the massively popular component library, with accent color modes
- Wireframe: a minimalistic theme built upon Radix colors, with P3 color support

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/universse/component-library-demo?title=Theme%20Demo&file=src%2Fpages%2Findex.astro,src%2Flib%2Fcomponents.tsx,README.md)

To switch theme, update path alias and `CURRENT_THEME` variable as shown below.

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "vs:theme/*": ["src/themes/github/*"] // github | material | shadcn | wireframe
    }
  }
}
```

```ts
// src/pages/index.astro
const CURRENT_THEME: DemoTheme = 'github' // github | material | shadcn | wireframe
```

Then, update `Button` variant in `src/lib/components.tsx`.

### Project structure

```
├── src/
│   ├── themes/
│   │   ├── github/
│   │   │   ├── tokens/        # design tokens in CSS
│   │   │   ├── main.css       # CSS entry point
│   │   │   ├── palettez.ts    # appearance mode config
│   │   │   ├── typefaces.css  # custom fonts
│   │   │   ├── types.ts       # component variants, icon names, sprite sheet URL etc
│   │   │   └── ...
│   │   ├── material/
│   │   └── ...
│   └── ui/
│       ├── button/
│       ├── icon/
│       └── ...
```
