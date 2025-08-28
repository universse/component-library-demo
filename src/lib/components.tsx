import { getThemesAndOptions } from 'palettez'
import { usePalettez } from 'palettez/react'

import { THEMES, type DemoTheme } from '#src/lib/data'
import { Button, Icon } from '#src/ui'
import { Octicon } from './icon'

export function Demo({ theme }: { theme: DemoTheme }) {
  const { title } = THEMES[theme]

  const renderDemo = () => {
    switch (theme) {
      case 'github': {
        return (
          <div className='vs:flex vs:flex-col vs:gap-[1.5rem] vs:p-[2rem]'>
            <div>
              <h1 className='vs:typography-display'>{title}</h1>
              {/* <p className='vs:mt-[0.25rem]'>
                To switch theme, please refer to the README.
              </p> */}
            </div>
            <div>
              <AppearanceControls theme={theme} />
            </div>
            <div className='vs:flex vs:gap-[1rem] vs:flex-wrap vs:border-[1px] vs:p-[2rem] vs:rounded-[8px]'>
              <Button
                iconAfter={<Octicon name='arrow-right-16' rtl />}
                size='medium' // 'small' | 'medium' | 'large'
                variant='default'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Octicon name='arrow-right-16' rtl />}
                size='medium' // 'small' | 'medium' | 'large'
                variant='primary'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Octicon name='arrow-right-16' rtl />}
                size='medium' // 'small' | 'medium' | 'large'
                variant='invisible'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Octicon name='arrow-right-16' rtl />}
                size='medium' // 'small' | 'medium' | 'large'
                variant='danger'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Octicon name='arrow-right-16' rtl />}
                size='medium' // 'small' | 'medium' | 'large'
                isSoftDisabled
              >
                Click me
              </Button>
            </div>
          </div>
        )
      }

      case 'material': {
        return (
          <div className='vs:flex vs:flex-col vs:gap-[1.5rem] vs:p-[2rem]'>
            <div>
              <h1 className='vs:typography-display-medium'>{title}</h1>
              {/* <p className='vs:mt-[0.25rem]'>
                To switch theme, please refer to the README.
              </p> */}
            </div>
            <div>
              <AppearanceControls theme={theme} />
            </div>
            <div className='vs:flex vs:gap-[1rem] vs:flex-wrap vs:border-[1px] vs:p-[2rem] vs:rounded-[8px]'>
              <Button
                color='elevated'
                iconAfter={<Icon name='arrow-right' rtl />}
                shape='round' // 'round' | 'square'
                size='small' // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
              >
                Click me
              </Button>
              <Button
                color='filled'
                iconAfter={<Icon name='arrow-right' rtl />}
                shape='round' // 'round' | 'square'
                size='small' // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
              >
                Click me
              </Button>
              <Button
                color='tonal'
                iconAfter={<Icon name='arrow-right' rtl />}
                shape='round' // 'round' | 'square'
                size='small' // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
              >
                Click me
              </Button>
              <Button
                color='outlined'
                iconAfter={<Icon name='arrow-right' rtl />}
                shape='round' // 'round' | 'square'
                size='small' // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
              >
                Click me
              </Button>
              <Button
                color='text'
                iconAfter={<Icon name='arrow-right' rtl />}
                shape='round' // 'round' | 'square'
                size='small' // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
              >
                Click me
              </Button>
            </div>
          </div>
        )
      }

      case 'resonance': {
        return (
          <div className='vs:flex vs:flex-col vs:gap-[1.5rem] vs:p-[2rem]'>
            <div>
              <h1 className='vs:typography-heading-lg'>{title}</h1>
              {/* <p className='vs:mt-[0.25rem]'>
                To switch theme, please refer to the README.
              </p> */}
            </div>
            <div>
              <AppearanceControls theme={theme} />
            </div>
            <div className='vs:flex vs:gap-[1rem] vs:flex-wrap vs:border-[1px] vs:p-[2rem] vs:rounded-[8px]'>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='accent'
                visual='bold'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='accent'
                visual='outline'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='accent'
                visual='plain'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='critical'
                visual='bold'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='critical'
                visual='outline'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='critical'
                visual='plain'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='neutral'
                visual='bold'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='neutral'
                visual='outline'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                radius='sm' // 'sm' | 'full'
                size='small' // '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
                tone='neutral'
                visual='plain'
              >
                Click me
              </Button>
            </div>
          </div>
        )
      }

      case 'shadcn': {
        return (
          <div className='vs:flex vs:flex-col vs:gap-[1.5rem] vs:p-[2rem]'>
            <div>
              <h1 className='vs:typography-5xl'>{title}</h1>
              {/* <p className='vs:mt-[0.25rem]'>
                To switch theme, please refer to the README.
              </p> */}
            </div>
            <div>
              <AppearanceControls theme={theme} />
            </div>
            <div className='vs:flex vs:gap-[1rem] vs:flex-wrap vs:border-[1px] vs:p-[2rem] vs:rounded-[8px]'>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                size='default' // 'sm' | 'default' | 'lg'
                variant='default'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                size='default' // 'sm' | 'default' | 'lg'
                variant='destructive'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                size='default' // 'sm' | 'default' | 'lg'
                variant='outline'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                size='default' // 'sm' | 'default' | 'lg'
                variant='secondary'
              >
                Click me
              </Button>
              <Button
                iconAfter={<Icon name='arrow-right' rtl />}
                size='default' // 'sm' | 'default' | 'lg'
                variant='ghost'
              >
                Click me
              </Button>
            </div>
          </div>
        )
      }
    }
  }

  return renderDemo()
}

function AppearanceControls({ theme }: { theme: DemoTheme }) {
  const { palettezConfig } = THEMES[theme]
  const { themes, setThemes } = usePalettez(
    () => window.palettez.getThemeStore(theme) as any
  )

  const renderControls = ([key, options]: [string, Array<string>]) => {
    switch (key) {
      case 'direction': {
        return (
          <div key={key} className='vs:flex vs:gap-[0.5rem] vs:items-center'>
            <label className='vs:capitalize' htmlFor='direction'>
              right to left
            </label>
            <input
              checked={themes[key] === 'rtl'}
              id='direction'
              name='direction'
              onChange={(e) => {
                setThemes({ [key]: e.target.checked ? 'rtl' : 'ltr' })
              }}
              type='checkbox'
            />
          </div>
        )
      }

      default: {
        return (
          <div key={key} className='vs:flex vs:gap-[0.5rem] vs:items-center'>
            <label className='vs:capitalize' htmlFor={key}>
              {key.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}
            </label>
            <select
              className='vs:h-[2rem] vs:w-[9rem] vs:rounded-[4px] vs:px-[8px] vs:border-[1px]'
              name={key}
              onChange={(e) => {
                setThemes({ [key]: e.target.value })
              }}
              value={themes[key]}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option.split('-').join(' ')}
                </option>
              ))}
            </select>
          </div>
        )
      }
    }
  }

  return (
    <div className='vs:flex vs:gap-x-[2rem] vs:gap-y-[1rem] vs:flex-wrap'>
      {getThemesAndOptions(palettezConfig).map(renderControls)}
    </div>
  )
}
