export interface ButtonVariants {
  color?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text' | undefined
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined
  shape?: 'round' | 'square' | undefined
}

export const buttonVariantMap = {
  color: ['color', 'filled'], size: ['size', 'small'], shape: ['shape', 'round']
} as const satisfies { [key in keyof ButtonVariants]: [string, ButtonVariants[key]] | [string] }

export interface IconVariants {
  
}

export const iconVariantMap = {
  
} as const satisfies { [key in keyof IconVariants]: [string, IconVariants[key]] | [string] }

export interface LinkVariants {
  color?: 'primary' | 'tertiary' | undefined
}

export const linkVariantMap = {
  color: ['color', 'primary']
} as const satisfies { [key in keyof LinkVariants]: [string, LinkVariants[key]] | [string] }

export interface ProgressCircleVariants {
  
}



export interface SpinnerVariants {
  
}

export const spinnerVariantMap = {
  
} as const satisfies { [key in keyof SpinnerVariants]: [string, SpinnerVariants[key]] | [string] }
