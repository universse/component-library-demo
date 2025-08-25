import type { ThemeConfig } from 'palettez'

export const palettezConfig = {
  colorTheme: {
    options: [
      'light-default',
      'light-colorblind',
      'light-tritanopia',
      'dark-default',
      'dark-colorblind',
      'dark-tritanopia',
      'soft-dark',
    ],
  },
  increaseContrast: {
    options: ['off', 'on'],
  },
  direction: {
    options: ['ltr', 'rtl'],
  },
} as const satisfies ThemeConfig
