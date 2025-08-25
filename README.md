## Demo link

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/universse/component-library-demo?title=Theme%20Demo&file=src%2Fpages%2Findex.astro,src%2Flib%2Fcomponents.tsx)

## Project structure

```
├── src/
│   ├── themes/
│   │   ├── github/
│   │   │   ├── tokens/        # theme files generated from design tokens
│   │   │   ├── main.css       # CSS entry point
│   │   │   ├── palettez.ts    # UI appearance settings config
│   │   │   ├── typefaces.css  # custom fonts
│   │   │   ├── types.ts       # component variants, icon names, sprite sheet URL...
│   │   │   └── ...
│   │   ├── material/
│   │   └── ...
│   └── ui/
│       ├── button/
│       ├── icon/
│       └── ...
```

## Switching theme

Available themes:

- github
- material
- resonance
- shadcn

To switch theme, update path aliases in `tsconfig.json` and `CURRENT_THEME` variable in `src/pages/index.astro`.

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "vs:theme/*": ["src/themes/github/*"]
    }
  }
}
```

```ts
// src/pages/index.astro
const CURRENT_THEME: DemoTheme = 'github'
```

Then, update `Button` variant in `src/lib/components.tsx`.
