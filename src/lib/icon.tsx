import { Icon as BaseIcon, type IconProps } from '#src/ui/icon'

export function Octicon(props: IconProps) {
  const size = props.name.endsWith('16') ? 16 : 24

  return (
    <BaseIcon
      {...props}
      height={size}
      style={{ ['--ovr-icon-size' as string]: `${size / 16}rem` }}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    />
  )
}
