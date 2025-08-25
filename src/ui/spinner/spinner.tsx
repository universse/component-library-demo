import { clsx } from 'clsx/lite'
import * as themeTypes from 'vs:theme/types'

import { mapProps } from '#src/ui/core/utils'

export interface SpinnerProps extends themeTypes.SpinnerVariants {
  className?: string
  style?: React.CSSProperties
  isLoading?: boolean
}

export function Spinner(props: SpinnerProps) {
  const [{ isLoading = true, className, ...otherProps }] = mapProps(
    props,
    themeTypes.spinnerVariantMap
  )

  return (
    <svg
      className={clsx('vsc-spinner', className)}
      {...otherProps}
      data-loading={isLoading || undefined}
    >
      <circle className='vsc-spinner-track' />

      <circle className='vsc-spinner-track-border-inner' />

      <circle className='vsc-spinner-track-border-outer' />

      <circle className='vsc-spinner-fill' pathLength='100' />
    </svg>
  )
}
