import cssggJson from 'css.gg/icons/all.json'

export const generateIconComponent = (key: string, css: string) => {
  const resolvedKey = new RegExp(`.gg-${key}`, 'g')
  const styleObject: Record<string, Record<string, string>> = {}

  css.split('}').forEach((rule) => {
    if (rule.trim() === '') return

    const [selector, styles] = rule.split('{')
    const cleanSelector = selector.trim().replace('"', '')
    const cleanStyles = {}
    if (!styles) {
      return
    }
    styles?.replace(/([^:]+):*([^;]+);*/gm, (_, prop, value) => {
      cleanStyles[prop] = value
      return ''
    })

    styleObject[cleanSelector.replace(resolvedKey, '&')] = cleanStyles
  })
  return styleObject
}

export const buildCssggIcon = () => {
  const cssggIcons = {}
  Object.keys(cssggJson).forEach((key) => {
    const data = cssggJson[key][0][0]
    cssggIcons[key] = generateIconComponent(key, data.css)
  })
  return cssggIcons
}
