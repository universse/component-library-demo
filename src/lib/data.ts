import type { ThemeConfig, ThemeStore } from 'palettez'

import githubMainCssUrl from '#src/themes/github/main.css?url'
import { palettezConfig as githubPalettezConfig } from '#src/themes/github/palettez'
import githubTypefacesCssUrl from '#src/themes/github/typefaces.css?url'
import * as githubTypes from '#src/themes/github/types'
import materialMainCssUrl from '#src/themes/material/main.css?url'
import { palettezConfig as materialPalettezConfig } from '#src/themes/material/palettez'
import materialTypefacesCssUrl from '#src/themes/material/typefaces.css?url'
import * as materialTypes from '#src/themes/material/types'
import shadcnMainCssUrl from '#src/themes/shadcn/main.css?url'
import { palettezConfig as shadcnPalettezConfig } from '#src/themes/shadcn/palettez'
import shadcnTypefacesCssUrl from '#src/themes/shadcn/typefaces.css?url'
import * as shadcnTypes from '#src/themes/shadcn/types'
import wireframeMainCssUrl from '#src/themes/wireframe/main.css?url'
import wireframeP3ColorsCssUrl from '#src/themes/wireframe/p3-colors.css?url'
import { palettezConfig as wireframePalettezConfig } from '#src/themes/wireframe/palettez'
import wireframeTypefacesCssUrl from '#src/themes/wireframe/typefaces.css?url'
import * as wireframeTypes from '#src/themes/wireframe/types'

declare module 'palettez' {
  interface ThemeStoreRegistry {
    shadcn: ThemeStore<typeof shadcnPalettezConfig>
    github: ThemeStore<typeof githubPalettezConfig>
    material: ThemeStore<typeof materialPalettezConfig>
    wireframe: ThemeStore<typeof wireframePalettezConfig>
  }
}

export type DemoTheme = 'github' | 'material' | 'shadcn' | 'wireframe'

async function defaultThemeScript({
  key,
  config,
}: {
  key: string
  config: ThemeConfig
}) {
  const themeStore = window.palettez.createThemeStore({
    key,
    config,
  })

  const handleResolvedThemes = (resolvedThemes: Record<string, string>) => {
    Object.entries(resolvedThemes).forEach(([theme, option]) => {
      if (theme === 'direction') {
        document.documentElement.dir = option
      } else {
        document.documentElement.dataset[theme] = option
      }
    })
  }

  handleResolvedThemes(themeStore.getResolvedThemes())

  themeStore.subscribe((_, resolvedThemes) => {
    handleResolvedThemes(resolvedThemes)
  })

  await themeStore.restore()

  themeStore.sync()

  const playgroundThemeStore = window.palettez.createThemeStore({
    key: `${key}-playground`,
    config,
    storage: window.palettez.memoryStorageAdapter(),
  })

  playgroundThemeStore.sync()
}

export const THEMES: Record<
  DemoTheme,
  {
    title: string
    resourceLinks: Array<React.LinkHTMLAttributes<HTMLLinkElement>>
    palettezConfig: ThemeConfig
    themeScript: typeof defaultThemeScript
  }
> = {
  github: {
    title: 'GitHub Primer',

    resourceLinks: [
      {
        href: githubTypes.spriteSheetUrl,
        rel: 'preload',
        as: 'image',
        type: 'image/svg+xml',
      },
      { href: githubTypefacesCssUrl, rel: 'stylesheet' },
      { href: githubMainCssUrl, rel: 'stylesheet' },
    ],

    palettezConfig: githubPalettezConfig,

    themeScript: async ({ key, config }) => {
      const themeStore = window.palettez.createThemeStore({
        key,
        config,
      })

      const handleResolvedThemes = (resolvedThemes: Record<string, string>) => {
        Object.entries(resolvedThemes).forEach(([theme, option]) => {
          document.documentElement.dataset[theme] = option

          if (theme === 'colorTheme') {
            switch (option) {
              case 'light-default':
              case 'light-colorblind':
              case 'light-tritanopia': {
                document.documentElement.dataset.colorMode = 'light'
                break
              }
              case 'dark-default':
              case 'dark-colorblind':
              case 'dark-tritanopia':
              case 'soft-dark': {
                document.documentElement.dataset.colorMode = 'dark'
                break
              }
            }
          }

          if (theme === 'direction') {
            document.documentElement.dir = option
          } else {
            document.documentElement.dataset[theme] = option
          }
        })
      }

      handleResolvedThemes(themeStore.getResolvedThemes())

      themeStore.subscribe((_, resolvedThemes) => {
        handleResolvedThemes(resolvedThemes)
      })

      await themeStore.restore()

      themeStore.sync()

      const playgroundThemeStore = window.palettez.createThemeStore({
        key: `${key}-playground`,
        config,
        storage: window.palettez.memoryStorageAdapter(),
      })

      playgroundThemeStore.sync()
    },
  },

  material: {
    title: 'Material Design 3',

    resourceLinks: [
      {
        href: materialTypes.spriteSheetUrl,
        rel: 'preload',
        as: 'image',
        type: 'image/svg+xml',
      },
      { href: materialTypefacesCssUrl, rel: 'stylesheet' },
      { href: materialMainCssUrl, rel: 'stylesheet' },
    ],

    palettezConfig: materialPalettezConfig,

    themeScript: defaultThemeScript,
  },

  shadcn: {
    title: 'shadcn/ui',

    resourceLinks: [
      {
        href: shadcnTypes.spriteSheetUrl,
        rel: 'preload',
        as: 'image',
        type: 'image/svg+xml',
      },
      { href: shadcnTypefacesCssUrl, rel: 'stylesheet' },
      { href: shadcnMainCssUrl, rel: 'stylesheet' },
    ],

    palettezConfig: shadcnPalettezConfig,

    themeScript: defaultThemeScript,
  },

  wireframe: {
    title: 'Wireframe',

    resourceLinks: [
      {
        href: wireframeTypes.spriteSheetUrl,
        rel: 'preload',
        as: 'image',
        type: 'image/svg+xml',
      },
      { href: wireframeTypefacesCssUrl, rel: 'stylesheet' },
      { href: wireframeMainCssUrl, rel: 'stylesheet' },
      {
        href: wireframeP3ColorsCssUrl,
        rel: 'stylesheet',
        media: '(color-gamut: p3)',
      },
    ],

    palettezConfig: wireframePalettezConfig,

    themeScript: defaultThemeScript,
  },
} as const
