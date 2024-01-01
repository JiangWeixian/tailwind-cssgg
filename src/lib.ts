import cssggJson from 'css.gg/icons/icons.json'

// Regular expression to match @keyframes rules
const keyframesRE = /@keyframes\s+([\w-]+)\s*\{([^.]*)\}/g
const keyframeStepRE = /((\d+%|from|to|,)+){([^}]*)}/g
const kvRE = /([^:]+):*([^;]+);*/gm

export const generateIconComponent = (key: string, css: string) => {
  const resolvedKey = new RegExp(`.gg-${key}`, 'g')
  const styleObject: Record<string, Record<string, string>> = {}

  // process keyframe later
  css
    .replace(keyframesRE, '')
    .split('}')
    .forEach((rule) => {
      if (rule.trim() === '') {
        return
      }

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

  Object.assign(styleObject, generateKeyframes(css))
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

export function generateKeyframe(keyframeString: string) {
  const keyframe: Record<string, Record<string, any>> = {}
  keyframeString.replace(keyframeStepRE, (_, step, _p2: string, value: string) => {
    keyframe[step] = {}
    console.log()
    value.replace(kvRE, (_, prop, value) => {
      keyframe[step] = {
        [prop]: value,
      }
      return ''
    })
    return ''
  })
  return keyframe
}

export function generateKeyframes(cssString: string) {
  // Array to store the keyframe strings
  const keyframes: Record<string, Record<string, Record<string, any>>> = {}

  // Use the regular expression to search for @keyframes rules
  let match = keyframesRE.exec(cssString)
  while (match) {
    // Extract the keyframe name and string
    const [, name, keyframeString] = match

    keyframes[`@keyframes ${name}`] = generateKeyframe(keyframeString)
    match = keyframesRE.exec(cssString)
  }

  // Return the array of keyframe strings
  return keyframes
}
