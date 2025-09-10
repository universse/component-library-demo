import type { ThemeConfig } from 'palettez'

export const palettezConfig = {
  direction: {
    options: ['ltr', 'rtl'],
  },
} as const satisfies ThemeConfig
