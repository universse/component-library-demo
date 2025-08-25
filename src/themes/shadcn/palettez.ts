import type { ThemeConfig } from 'palettez'

export const palettezConfig = {
  mode: {
    options: [
      {
        value: 'system',
        media: ['(prefers-color-scheme: light)', 'light', 'dark'],
      },
      'light',
      'dark',
    ],
  },
  theme: {
    options: [
      'neutral',
      'mono',
      'blue',
      'green',
      'amber',
      'rose',
      'purple',
      'orange',
      'teal',
      'red',
      'yellow',
      'violet',
    ],
  },
  direction: {
    options: ['ltr', 'rtl'],
  },
} as const satisfies ThemeConfig
