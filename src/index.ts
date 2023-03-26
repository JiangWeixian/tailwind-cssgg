import plugin from 'tailwindcss/plugin'
import { buildCssggIcon } from './lib'

export const cssgg = plugin((props) => {
  const components = buildCssggIcon()
  props.matchComponents(
    {
      gg: (value, extra) => {
        if (typeof value === 'string') {
          console.warn(
            'Unable able to find vaild css.gg icon, pelase visit https://css.gg/ for more information about available icon names, e.g. `.gg-add-r`',
          )
          return {}
        }
        const ggs = extra?.modifier ?? 1
        const styles = value as Record<string, any>
        return {
          ...styles,
          '&': {
            '--ggs': ggs.toString(),
            ...styles['&'],
          },
        }
      },
    },
    { values: components, modifiers: 'any' },
  )
})
