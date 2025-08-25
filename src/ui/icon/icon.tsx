import { clsx } from 'clsx/lite'
import * as React from 'react'
import * as RA from 'react-aria'
import * as themeTypes from 'vs:theme/types'

import { mapProps } from '#src/ui/core/utils'

export interface IconProps
  extends themeTypes.IconVariants,
    React.ComponentProps<'svg'> {
  name: themeTypes.IconName
  prefix?: string
  spriteSheetUrl?: string
  rtl?: boolean
  accessibilityLabel?: string
  slot?: string
  className?: string
  style?: React.CSSProperties
}

export function Icon(props: IconProps) {
  const [
    {
      name,
      prefix = '',
      spriteSheetUrl = themeTypes.spriteSheetUrl,
      rtl = false,
      accessibilityLabel,
      className,
      ...otherProps
    },
  ] = mapProps(props, themeTypes.iconVariantMap)

  const labelId = RA.useId()

  return (
    <>
      {accessibilityLabel && (
        <span className='vs:visually-hidden' id={labelId}>
          {accessibilityLabel}
        </span>
      )}

      <svg
        className={clsx('vsc-icon', className)}
        focusable='false'
        height='24'
        viewBox='0 0 24 24'
        width='24'
        {...otherProps}
        aria-hidden={accessibilityLabel ? undefined : true}
        aria-labelledby={accessibilityLabel ? labelId : undefined}
        data-rtl={rtl || undefined}
        role={accessibilityLabel ? 'img' : undefined}
      >
        <use href={`${spriteSheetUrl}#${name}`} />
      </svg>
    </>
  )
}
