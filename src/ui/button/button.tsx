import { clsx } from 'clsx/lite'
import * as React from 'react'
import * as RA from 'react-aria'
import * as RAC from 'react-aria-components'
import * as themeTypes from 'vs:theme/types'

import { mapProps, useLocalizedStringFormatter } from '#src/ui/core/utils'
import type { IconProps } from '#src/ui/icon'
import { ProgressCircle } from '#src/ui/progress-circle'

export const ButtonVariantContext =
  React.createContext<themeTypes.ButtonVariants | null>(null)

export interface ButtonProps
  extends RAC.ButtonProps,
    themeTypes.ButtonVariants {
  children?: React.ReactNode
  touchFriendly?: boolean
  accessibilityLabel?: string
  contentBefore?: React.ReactNode
  iconBefore?: React.ReactElement<IconProps>
  iconAfter?: React.ReactElement<IconProps>
  contentAfter?: React.ReactNode
}

export function Button(props: ButtonProps) {
  const [
    {
      touchFriendly = false,
      accessibilityLabel,
      children,
      className,
      contentBefore,
      iconBefore,
      iconAfter,
      contentAfter,
      ...otherProps
    },
  ] = mapProps(
    { ...React.useContext(ButtonVariantContext), ...props },
    themeTypes.buttonVariantMap
  )

  const stringFormatter = useLocalizedStringFormatter()

  return (
    <RAC.Button className={clsx('vsc-button', className)} {...otherProps}>
      <span className='vsc-button-content'>
        {contentBefore && <div slot='content-before'>{contentBefore}</div>}

        {iconBefore && React.cloneElement(iconBefore, { slot: 'icon-before' })}

        {accessibilityLabel && (
          <span className='vs:visually-hidden'>{accessibilityLabel}</span>
        )}

        {children && (
          <span
            aria-hidden={accessibilityLabel ? true : undefined}
            slot='label'
          >
            {children}
          </span>
        )}

        {iconAfter && React.cloneElement(iconAfter, { slot: 'icon-after' })}

        {contentAfter && <div slot='content-after'>{contentAfter}</div>}
      </span>

      <ProgressCircle
        accessibilityLabel={stringFormatter.format('common.pending')}
        isDelayed
        isIndeterminate
      />
    </RAC.Button>
  )
}

export interface IconButtonProps
  extends Omit<
    ButtonProps,
    | 'labelAlign'
    | 'contentWidth'
    | 'iconBefore'
    | 'contentBefore'
    | 'iconAfter'
    | 'contentAfter'
  > {
  children: React.ReactElement<IconProps>
  accessibilityLabel: string
  isCompact?: boolean
}

export function IconButton({
  className,
  isCompact = false,
  children,
  ...props
}: IconButtonProps) {
  return (
    <Button
      className={clsx('vsc-icon-button', className)}
      {...props}
      data-compact={isCompact || undefined}
      iconBefore={children}
    />
  )
}

export interface ButtonGroupProps extends RAC.GroupProps {
  accessibilityLabel?: string
}

export function ButtonGroup({
  accessibilityLabel,
  className,
  children,
  ...props
}: ButtonGroupProps) {
  const labelId = RA.useId()

  return (
    <>
      {accessibilityLabel && (
        <span className='vs:visually-hidden' id={labelId}>
          {accessibilityLabel}
        </span>
      )}

      <RAC.Group className={clsx('vsc-button-group', className)} {...props}>
        {RAC.composeRenderProps(children, (children, { isDisabled }) => (
          <RAC.ButtonContext.Provider value={{ isDisabled }}>
            {children}
          </RAC.ButtonContext.Provider>
        ))}
      </RAC.Group>
    </>
  )
}

export interface ButtonLinkProps
  extends RAC.LinkProps,
    themeTypes.ButtonVariants {
  children?: React.ReactNode
  accessibilityLabel?: string
  touchFriendly?: boolean
  contentBefore?: React.ReactNode
  iconBefore?: React.ReactElement<IconProps>
  iconAfter?: React.ReactElement<IconProps>
  contentAfter?: React.ReactNode
}

export function ButtonLink(props: ButtonLinkProps) {
  const [
    {
      touchFriendly = false,
      accessibilityLabel,
      children,
      className,
      contentBefore,
      iconBefore,
      iconAfter,
      contentAfter,
      ...otherProps
    },
  ] = mapProps(
    { ...React.useContext(ButtonVariantContext), ...props },
    themeTypes.buttonVariantMap
  )

  return (
    <RAC.Link className={clsx('vsc-button', className)} {...otherProps}>
      <span className='vsc-button-content'>
        {contentBefore && <div slot='content-before'>{contentBefore}</div>}

        {iconBefore && React.cloneElement(iconBefore, { slot: 'icon-before' })}

        {accessibilityLabel && (
          <span className='vs:visually-hidden'>{accessibilityLabel}</span>
        )}

        {children && (
          <span
            aria-hidden={accessibilityLabel ? true : undefined}
            slot='label'
          >
            {children}
          </span>
        )}

        {iconAfter && React.cloneElement(iconAfter, { slot: 'icon-after' })}

        {contentAfter && <div slot='content-after'>{contentAfter}</div>}
      </span>
    </RAC.Link>
  )
}

export interface IconButtonLinkProps
  extends Omit<
    ButtonLinkProps,
    | 'labelAlign'
    | 'contentWidth'
    | 'iconBefore'
    | 'contentBefore'
    | 'iconAfter'
    | 'contentAfter'
  > {
  children: React.ReactElement<IconProps>
  accessibilityLabel: string
  isCompact?: boolean
}

export function IconButtonLink({
  className,
  isCompact = false,
  children,
  ...props
}: IconButtonLinkProps) {
  return (
    <ButtonLink
      className={clsx('vsc-icon-button', className)}
      {...props}
      data-compact={isCompact || undefined}
      iconBefore={children}
    />
  )
}
