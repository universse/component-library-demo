export interface ButtonVariants {
  variant?: 'default' | 'primary' | 'invisible' | 'danger' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
}

export const buttonVariantMap = {
  variant: ['variant', 'default'], size: ['size', 'medium']
} as const satisfies { [key in keyof ButtonVariants]: [string, ButtonVariants[key]] | [string] }

export interface IconVariants {
  
}

export const iconVariantMap = {
  
} as const satisfies { [key in keyof IconVariants]: [string, IconVariants[key]] | [string] }

export interface LinkVariants {
  
}

export const linkVariantMap = {
  
} as const satisfies { [key in keyof LinkVariants]: [string, LinkVariants[key]] | [string] }

export interface ProgressCircleVariants {
  
}



export interface SpinnerVariants {
  size?: 'small' | 'medium' | 'large' | undefined
}

export const spinnerVariantMap = {
  size: ['size', 'medium']
} as const satisfies { [key in keyof SpinnerVariants]: [string, SpinnerVariants[key]] | [string] }
