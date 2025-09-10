import * as RA from 'react-aria'

import * as intlMessages from './intl'

export function mapProps<
  Props extends object,
  VariantMap extends Record<string, [string] | [string, unknown]>,
>(props: Props, variantMap: VariantMap) {
  type VariantKey = keyof VariantMap

  const newProps = { ...props } as any
  const variantProps = {} as any

  Object.entries(variantMap).forEach(([key, [dataAttribute, defaultValue]]) => {
    const value = props[key] || defaultValue || undefined
    newProps[`data-v-${dataAttribute}`] = value
    variantProps[key] = value
    newProps[key] = undefined
  })

  return [newProps, variantProps] as [
    Omit<Props, VariantKey> & {
      [K in VariantKey as `data-v-${VariantMap[K][0]}`]: Props[K]
    },
    { [K in VariantKey]: Props[K] },
  ]
}

export function useLocalizedStringFormatter() {
  return RA.useLocalizedStringFormatter(intlMessages, 'vs')
}
