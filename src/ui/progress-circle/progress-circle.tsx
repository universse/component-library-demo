import { clsx } from 'clsx/lite'
import * as RAC from 'react-aria-components'
import * as themeTypes from 'vs:theme/types'

import { mapProps } from '#src/ui/core/utils'
import { Spinner } from '#src/ui/spinner'

export interface ProgressCircleProps
  extends Omit<RAC.ProgressBarProps, 'children'>,
    themeTypes.SpinnerVariants {
  accessibilityLabel: string
  isDelayed?: boolean
}

export function ProgressCircle(props: ProgressCircleProps) {
  const [
    { accessibilityLabel, className, isDelayed, ...otherProps },
    variantProps,
  ] = mapProps(props, themeTypes.spinnerVariantMap)

  return (
    <RAC.ProgressBar
      className={clsx('vsc-progress-circle', className)}
      {...otherProps}
    >
      {({ percentage }) => (
        <>
          <RAC.Label className='vs:visually-hidden'>
            {accessibilityLabel}
          </RAC.Label>

          <Spinner
            isDelayed={isDelayed!}
            isLoading={otherProps.isIndeterminate!}
            style={{ ['--data-percentage' as string]: percentage }}
            {...variantProps}
          />
        </>
      )}
    </RAC.ProgressBar>
  )
}
