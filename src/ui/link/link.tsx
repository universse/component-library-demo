import { clsx } from 'clsx/lite'
import * as RAC from 'react-aria-components'
import * as themeTypes from 'vs:theme/types'

import { mapProps } from '#src/ui/core/utils'

export interface LinkProps extends RAC.LinkProps, themeTypes.LinkVariants {
  children: React.ReactNode
  underline?: 'none' | 'solid' | 'dotted'
  unstyled?: boolean
}

export function Link(props: LinkProps) {
  const [{ className, underline = 'solid', unstyled, ...otherProps }] =
    mapProps(props, themeTypes.linkVariantMap)

  return (
    <RAC.Link
      className={clsx('vsc-link', className)}
      {...otherProps}
      data-underline={underline}
      data-unstyled={unstyled || undefined}
    />
  )
}
