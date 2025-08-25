import type { ThemeConfig } from 'palettez'

export const palettezConfig = {
  theme: {
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
    options: ['default', 'medium', 'high'],
  },
  motionScheme: {
    options: [
      'expressive',
      'standard',
    ],
  },
  direction: {
    options: ['ltr', 'rtl'],
  },
} as const satisfies ThemeConfig
