export interface ButtonVariants {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | undefined
  size?: 'sm' | 'default' | 'lg' | undefined
}

export const buttonVariantMap = {
  variant: ['variant', 'default'], size: ['size', 'default']
} as const satisfies { [key in keyof ButtonVariants]: [string, ButtonVariants[key]] | [string] }

export interface IconVariants {
  size?: 'sm' | 'md' | 'lg' | undefined
}

export const iconVariantMap = {
  size: ['size']
} as const satisfies { [key in keyof IconVariants]: [string, IconVariants[key]] | [string] }

export interface LinkVariants {
  
}

export const linkVariantMap = {
  
} as const satisfies { [key in keyof LinkVariants]: [string, LinkVariants[key]] | [string] }

export interface ProgressCircleVariants {
  
}



export interface SpinnerVariants {
  size?: 'sm' | 'md' | 'lg' | undefined
}

export const spinnerVariantMap = {
  size: ['size', 'md']
} as const satisfies { [key in keyof SpinnerVariants]: [string, SpinnerVariants[key]] | [string] }
