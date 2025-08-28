export interface AlertBannerVariants {
  tone?: 'informative' | 'success' | 'caution' | 'critical' | undefined
  inline?: boolean | undefined
}

export const alertBannerVariantMap = {
  tone: ['tone', 'informative'], inline: ['inline']
} as const satisfies { [key in keyof AlertBannerVariants]: [string, AlertBannerVariants[key]] | [string] }

export interface BadgeVariants {
  tone?: 'accent' | 'informative' | 'success' | 'caution' | 'critical' | 'neutral' | undefined
  visual?: 'bold' | 'soft' | undefined
  size?: 'sm' | 'md' | undefined
  radius?: 'sm' | 'full' | undefined
  isometric?: boolean | undefined
}

export const badgeVariantMap = {
  tone: ['tone', 'accent'], visual: ['visual', 'bold'], size: ['size', 'sm'], radius: ['radius', 'sm'], isometric: ['isometric']
} as const satisfies { [key in keyof BadgeVariants]: [string, BadgeVariants[key]] | [string] }

export interface ButtonVariants {
  tone?: 'accent' | 'critical' | 'neutral' | 'static-black' | 'static-white' | undefined
  visual?: 'bold' | 'outline' | 'plain' | undefined
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  radius?: 'sm' | 'full' | undefined
  labelAlign?: 'start' | 'center' | 'end' | 'true-center' | undefined
  contentWidth?: 'fit' | 'full' | undefined
}

export const buttonVariantMap = {
  tone: ['tone', 'accent'], visual: ['visual', 'bold'], size: ['size', 'md'], radius: ['radius', 'sm'], labelAlign: ['label-align', 'center'], contentWidth: ['content-width', 'fit']
} as const satisfies { [key in keyof ButtonVariants]: [string, ButtonVariants[key]] | [string] }

export interface ButtonGroupVariants {
  
}

export const buttonGroupVariantMap = {
  
} as const satisfies { [key in keyof ButtonGroupVariants]: [string, ButtonGroupVariants[key]] | [string] }

export interface DialogVariants {
  size?: 'sm' | 'md' | 'lg' | 'full' | 'fill' | undefined
}

export const dialogVariantMap = {
  size: ['size', 'md']
} as const satisfies { [key in keyof DialogVariants]: [string, DialogVariants[key]] | [string] }

export interface DialogHeaderVariants {
  
}

export const dialogHeaderVariantMap = {
  
} as const satisfies { [key in keyof DialogHeaderVariants]: [string, DialogHeaderVariants[key]] | [string] }

export interface DialogTitleVariants {
  
}

export const dialogTitleVariantMap = {
  
} as const satisfies { [key in keyof DialogTitleVariants]: [string, DialogTitleVariants[key]] | [string] }

export interface DialogDismissButtonVariants {
  
}

export const dialogDismissButtonVariantMap = {
  
} as const satisfies { [key in keyof DialogDismissButtonVariants]: [string, DialogDismissButtonVariants[key]] | [string] }

export interface DialogBodyVariants {
  
}

export const dialogBodyVariantMap = {
  
} as const satisfies { [key in keyof DialogBodyVariants]: [string, DialogBodyVariants[key]] | [string] }

export interface DialogFooterVariants {
  
}

export const dialogFooterVariantMap = {
  
} as const satisfies { [key in keyof DialogFooterVariants]: [string, DialogFooterVariants[key]] | [string] }

export interface DrawerVariants {
  size?: 'sm' | 'md' | 'lg' | 'full' | 'fit' | undefined
}

export const drawerVariantMap = {
  size: ['size', 'fit']
} as const satisfies { [key in keyof DrawerVariants]: [string, DrawerVariants[key]] | [string] }

export interface FieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const fieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof FieldVariants]: [string, FieldVariants[key]] | [string] }

export interface FieldsetVariants {
  
}

export const fieldsetVariantMap = {
  
} as const satisfies { [key in keyof FieldsetVariants]: [string, FieldsetVariants[key]] | [string] }

export interface FieldsetErrorVariants {
  
}

export const fieldsetErrorVariantMap = {
  
} as const satisfies { [key in keyof FieldsetErrorVariants]: [string, FieldsetErrorVariants[key]] | [string] }

export interface LegendVariants {
  
}

export const legendVariantMap = {
  
} as const satisfies { [key in keyof LegendVariants]: [string, LegendVariants[key]] | [string] }

export interface FormVariants {
  
}

export const formVariantMap = {
  
} as const satisfies { [key in keyof FormVariants]: [string, FormVariants[key]] | [string] }

export interface FormErrorVariants {
  
}

export const formErrorVariantMap = {
  
} as const satisfies { [key in keyof FormErrorVariants]: [string, FormErrorVariants[key]] | [string] }

export interface FormLayoutVariants {
  
}

export const formLayoutVariantMap = {
  
} as const satisfies { [key in keyof FormLayoutVariants]: [string, FormLayoutVariants[key]] | [string] }

export interface FieldLabelVariants {
  
}

export const fieldLabelVariantMap = {
  
} as const satisfies { [key in keyof FieldLabelVariants]: [string, FieldLabelVariants[key]] | [string] }

export interface FieldDescriptionVariants {
  
}

export const fieldDescriptionVariantMap = {
  
} as const satisfies { [key in keyof FieldDescriptionVariants]: [string, FieldDescriptionVariants[key]] | [string] }

export interface FieldErrorVariants {
  
}

export const fieldErrorVariantMap = {
  
} as const satisfies { [key in keyof FieldErrorVariants]: [string, FieldErrorVariants[key]] | [string] }

export interface CheckboxVariants {
  
}

export const checkboxVariantMap = {
  
} as const satisfies { [key in keyof CheckboxVariants]: [string, CheckboxVariants[key]] | [string] }

export interface CheckboxFieldVariants {
  layout?: 'horizontal' | 'vertical' | 'inline' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const checkboxFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof CheckboxFieldVariants]: [string, CheckboxFieldVariants[key]] | [string] }

export interface CheckboxItemVariants {
  
}

export const checkboxItemVariantMap = {
  
} as const satisfies { [key in keyof CheckboxItemVariants]: [string, CheckboxItemVariants[key]] | [string] }

export interface CheckboxGroupFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const checkboxGroupFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof CheckboxGroupFieldVariants]: [string, CheckboxGroupFieldVariants[key]] | [string] }

export interface ComboBoxFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const comboBoxFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof ComboBoxFieldVariants]: [string, ComboBoxFieldVariants[key]] | [string] }

export interface NativeSelectVariants {
  
}

export const nativeSelectVariantMap = {
  
} as const satisfies { [key in keyof NativeSelectVariants]: [string, NativeSelectVariants[key]] | [string] }

export interface NativeSelectFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const nativeSelectFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof NativeSelectFieldVariants]: [string, NativeSelectFieldVariants[key]] | [string] }

export interface NumberFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const numberFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof NumberFieldVariants]: [string, NumberFieldVariants[key]] | [string] }

export interface NumberStepperFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const numberStepperFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof NumberStepperFieldVariants]: [string, NumberStepperFieldVariants[key]] | [string] }

export interface RadioItemVariants {
  
}

export const radioItemVariantMap = {
  
} as const satisfies { [key in keyof RadioItemVariants]: [string, RadioItemVariants[key]] | [string] }

export interface RadioGroupFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const radioGroupFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof RadioGroupFieldVariants]: [string, RadioGroupFieldVariants[key]] | [string] }

export interface SearchFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const searchFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof SearchFieldVariants]: [string, SearchFieldVariants[key]] | [string] }

export interface SelectFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const selectFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof SelectFieldVariants]: [string, SelectFieldVariants[key]] | [string] }

export interface SliderFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
  tone?: 'accent' | 'neutral' | undefined
}

export const sliderFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start'], tone: ['tone', 'accent']
} as const satisfies { [key in keyof SliderFieldVariants]: [string, SliderFieldVariants[key]] | [string] }

export interface SwitchFieldVariants {
  layout?: 'horizontal' | 'vertical' | 'inline' | undefined
  labelAlign?: 'start' | 'end' | undefined
  tone?: 'accent' | 'neutral' | undefined
  size?: 'sm' | 'md' | 'lg' | undefined
}

export const switchFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start'], tone: ['tone', 'accent'], size: ['size', 'md']
} as const satisfies { [key in keyof SwitchFieldVariants]: [string, SwitchFieldVariants[key]] | [string] }

export interface TextAreaFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const textAreaFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof TextAreaFieldVariants]: [string, TextAreaFieldVariants[key]] | [string] }

export interface TextFieldVariants {
  layout?: 'horizontal' | 'vertical' | undefined
  labelAlign?: 'start' | 'end' | undefined
}

export const textFieldVariantMap = {
  layout: ['layout', 'vertical'], labelAlign: ['label-align', 'start']
} as const satisfies { [key in keyof TextFieldVariants]: [string, TextFieldVariants[key]] | [string] }

export interface IconVariants {
  tone?: 'accent' | 'informative' | 'success' | 'caution' | 'critical' | 'neutral' | 'static-black' | 'static-white' | undefined
  emphasis?: '50' | '80' | '90' | undefined
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
}

export const iconVariantMap = {
  tone: ['tone'], emphasis: ['emphasis'], size: ['size']
} as const satisfies { [key in keyof IconVariants]: [string, IconVariants[key]] | [string] }

export interface KeyboardVariants {
  
}

export const keyboardVariantMap = {
  
} as const satisfies { [key in keyof KeyboardVariants]: [string, KeyboardVariants[key]] | [string] }

export interface LinkVariants {
  variant?: 'primary' | 'secondary' | 'accent' | 'static-black' | 'static-white' | 'unstyled' | undefined
  visual?: 'plain' | 'underline' | 'dotted' | undefined
}

export const linkVariantMap = {
  variant: ['variant', 'primary'], visual: ['visual', 'underline']
} as const satisfies { [key in keyof LinkVariants]: [string, LinkVariants[key]] | [string] }

export interface ListBoxVariants {
  
}

export const listBoxVariantMap = {
  
} as const satisfies { [key in keyof ListBoxVariants]: [string, ListBoxVariants[key]] | [string] }

export interface ListBoxSectionVariants {
  
}

export const listBoxSectionVariantMap = {
  
} as const satisfies { [key in keyof ListBoxSectionVariants]: [string, ListBoxSectionVariants[key]] | [string] }

export interface ListBoxItemVariants {
  
}

export const listBoxItemVariantMap = {
  
} as const satisfies { [key in keyof ListBoxItemVariants]: [string, ListBoxItemVariants[key]] | [string] }

export interface MenuVariants {
  
}

export const menuVariantMap = {
  
} as const satisfies { [key in keyof MenuVariants]: [string, MenuVariants[key]] | [string] }

export interface MenuSectionVariants {
  
}

export const menuSectionVariantMap = {
  
} as const satisfies { [key in keyof MenuSectionVariants]: [string, MenuSectionVariants[key]] | [string] }

export interface MenuItemVariants {
  tone?: 'accent' | 'critical' | 'neutral' | undefined
}

export const menuItemVariantMap = {
  tone: ['tone', 'neutral']
} as const satisfies { [key in keyof MenuItemVariants]: [string, MenuItemVariants[key]] | [string] }

export interface MeterVariants {
  tone?: 'informative' | 'success' | 'caution' | 'critical' | undefined
  radius?: 'none' | 'sm' | 'full' | undefined
  size?: 'sm' | 'md' | 'lg' | undefined
}

export const meterVariantMap = {
  tone: ['tone', 'informative'], radius: ['radius', 'none'], size: ['size', 'md']
} as const satisfies { [key in keyof MeterVariants]: [string, MeterVariants[key]] | [string] }

export interface OverlayArrowVariants {
  
}

export const overlayArrowVariantMap = {
  
} as const satisfies { [key in keyof OverlayArrowVariants]: [string, OverlayArrowVariants[key]] | [string] }

export interface PopoverVariants {
  
}

export const popoverVariantMap = {
  
} as const satisfies { [key in keyof PopoverVariants]: [string, PopoverVariants[key]] | [string] }

export interface ProgressBarVariants {
  tone?: 'informative' | 'success' | 'caution' | 'critical' | undefined
  radius?: 'none' | 'sm' | 'full' | undefined
  size?: 'sm' | 'md' | 'lg' | undefined
}

export const progressBarVariantMap = {
  tone: ['tone', 'informative'], radius: ['radius', 'none'], size: ['size', 'md']
} as const satisfies { [key in keyof ProgressBarVariants]: [string, ProgressBarVariants[key]] | [string] }

export interface ProgressCircleVariants {
  
}

export const progressCircleVariantMap = {
  
} as const satisfies { [key in keyof ProgressCircleVariants]: [string, ProgressCircleVariants[key]] | [string] }

export interface ScrollerVariants {
  
}

export const scrollerVariantMap = {
  
} as const satisfies { [key in keyof ScrollerVariants]: [string, ScrollerVariants[key]] | [string] }

export interface SeparatorVariants {
  
}

export const separatorVariantMap = {
  
} as const satisfies { [key in keyof SeparatorVariants]: [string, SeparatorVariants[key]] | [string] }

export interface SpinnerVariants {
  tone?: 'accent' | 'informative' | 'success' | 'caution' | 'critical' | 'neutral' | 'static-black' | 'static-white' | undefined
  size?: 'sm' | 'md' | 'lg' | undefined
  isDelayed?: boolean | undefined
}

export const spinnerVariantMap = {
  tone: ['tone', 'accent'], size: ['size', 'md'], isDelayed: ['delayed']
} as const satisfies { [key in keyof SpinnerVariants]: [string, SpinnerVariants[key]] | [string] }

export interface SplitButtonVariants {
  tone?: 'accent' | 'critical' | 'neutral' | 'static-black' | 'static-white' | undefined
  visual?: 'bold' | 'outline' | undefined
  radius?: 'sm' | 'full' | undefined
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
}

export const splitButtonVariantMap = {
  tone: ['tone', 'accent'], visual: ['visual', 'bold'], radius: ['radius', 'sm'], size: ['size', 'md']
} as const satisfies { [key in keyof SplitButtonVariants]: [string, SplitButtonVariants[key]] | [string] }

export interface TabsVariants {
  tone?: 'accent' | 'neutral' | undefined
  visual?: 'line' | 'folder' | undefined
  size?: 'sm' | 'md' | undefined
  radius?: 'sm' | 'full' | undefined
  inverted?: boolean | undefined
}

export const tabsVariantMap = {
  tone: ['tone', 'accent'], visual: ['visual', 'line'], size: ['size', 'md'], radius: ['radius', 'sm'], inverted: ['inverted']
} as const satisfies { [key in keyof TabsVariants]: [string, TabsVariants[key]] | [string] }

export interface TabIndicatorVariants {
  type?: 'line' | 'block' | undefined
  position?: 'start' | 'end' | undefined
  transition?: 'none' | 'smooth' | undefined
}

export const tabIndicatorVariantMap = {
  type: ['type', 'line'], position: ['position', 'end'], transition: ['transition', 'smooth']
} as const satisfies { [key in keyof TabIndicatorVariants]: [string, TabIndicatorVariants[key]] | [string] }

export interface TabListVariants {
  
}

export const tabListVariantMap = {
  
} as const satisfies { [key in keyof TabListVariants]: [string, TabListVariants[key]] | [string] }

export interface TabVariants {
  labelAlign?: 'start' | 'center' | 'end' | undefined
  contentWidth?: 'fit' | 'full' | undefined
}

export const tabVariantMap = {
  labelAlign: ['label-align', 'center'], contentWidth: ['content-width', 'fit']
} as const satisfies { [key in keyof TabVariants]: [string, TabVariants[key]] | [string] }

export interface TabPanelListVariants {
  
}

export const tabPanelListVariantMap = {
  
} as const satisfies { [key in keyof TabPanelListVariants]: [string, TabPanelListVariants[key]] | [string] }

export interface TabPanelVariants {
  isInert?: boolean | undefined
}

export const tabPanelVariantMap = {
  isInert: ['inert']
} as const satisfies { [key in keyof TabPanelVariants]: [string, TabPanelVariants[key]] | [string] }

export interface TextVariants {
  
}

export const textVariantMap = {
  
} as const satisfies { [key in keyof TextVariants]: [string, TextVariants[key]] | [string] }

export interface TextInputVariants {
  
}

export const textInputVariantMap = {
  
} as const satisfies { [key in keyof TextInputVariants]: [string, TextInputVariants[key]] | [string] }

export interface ToastVariants {
  tone?: 'accent' | 'informative' | 'success' | 'caution' | 'critical' | 'neutral' | undefined
  inline?: boolean | undefined
}

export const toastVariantMap = {
  tone: ['tone', 'accent'], inline: ['inline']
} as const satisfies { [key in keyof ToastVariants]: [string, ToastVariants[key]] | [string] }

export interface ToggleButtonVariants {
  tone?: 'accent' | 'neutral' | undefined
  visual?: 'bold' | 'soft' | 'plain' | undefined
  withOutline?: boolean | undefined
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  radius?: 'sm' | 'full' | undefined
}

export const toggleButtonVariantMap = {
  tone: ['tone', 'accent'], visual: ['visual', 'bold'], withOutline: ['with-outline'], size: ['size', 'md'], radius: ['radius', 'sm']
} as const satisfies { [key in keyof ToggleButtonVariants]: [string, ToggleButtonVariants[key]] | [string] }

export interface ToggleButtonGroupVariants {
  tone?: 'accent' | 'neutral' | undefined
  visual?: 'bold' | 'soft' | 'plain' | undefined
  withOutline?: boolean | undefined
  radius?: 'sm' | 'full' | undefined
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  segmented?: boolean | undefined
}

export const toggleButtonGroupVariantMap = {
  tone: ['tone', 'accent'], visual: ['visual', 'bold'], withOutline: ['with-outline'], radius: ['radius', 'sm'], size: ['size', 'md'], segmented: ['segmented']
} as const satisfies { [key in keyof ToggleButtonGroupVariants]: [string, ToggleButtonGroupVariants[key]] | [string] }

export interface TooltipVariants {
  
}

export const tooltipVariantMap = {
  
} as const satisfies { [key in keyof TooltipVariants]: [string, TooltipVariants[key]] | [string] }

export interface TouchTargetVariants {
  
}

export const touchTargetVariantMap = {
  
} as const satisfies { [key in keyof TouchTargetVariants]: [string, TouchTargetVariants[key]] | [string] }
