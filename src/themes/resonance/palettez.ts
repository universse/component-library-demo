import type { ThemeConfig } from 'palettez'

export const palettezConfig = {
  colorScheme: {
    options: [
      {
        value: 'system',
        media: ['(prefers-color-scheme: light)', 'light', 'dark'],
      },
      'light',
      'dark',
    ],
  },
  contrast: {
    options: ['standard', 'high'],
  },
  direction: {
    options: ['ltr', 'rtl'],
  },
} as const satisfies ThemeConfig
