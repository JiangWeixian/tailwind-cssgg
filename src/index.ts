import plugin from 'tailwindcss/plugin'
import { buildCssggIcon } from './lib'

export const cssgg = plugin((props) => {
  const components = buildCssggIcon()
  props.matchComponents(
    {
      gg: (value) => {
        if (typeof value === 'string') {
          console.warn(
            'Unable able to find vaild css.gg icon, pelase visit https://css.gg/ for more information about available icon names, e.g. `.gg-add-r`',
          )
          return {}
        }
        return value
      },
    },
    { values: components },
  )
})
