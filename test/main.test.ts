import { describe, expect, test } from 'vitest'
import cssggJson from 'css.gg/icons/all.json'
import { buildCssggIcon, generateIconComponent, generateKeyframes } from '../src/lib'

const collections = buildCssggIcon()

describe('utils', () => {
  test('extract spinner keyframes', () => {
    // eslint-disable-next-line dot-notation
    const result = generateKeyframes(cssggJson['spinner'][0][0].css)
    expect(result).toMatchSnapshot()
  })

  test('extract loadbar-alt keyframes', () => {
    // eslint-disable-next-line dot-notation
    const result = generateKeyframes(cssggJson['loadbar-alt'][0][0].css)
    expect(result).toMatchSnapshot()
  })
})

describe('generate icon', () => {
  test('generate icon component', () => {
    const raw = generateIconComponent('zeit', cssggJson.zeit[0][0].css)
    expect(raw).toMatchSnapshot()
  })

  test('generate icon component with keyframes', () => {
    const raw = generateIconComponent('spinner', cssggJson.spinner[0][0].css)
    expect(raw).toMatchSnapshot()
  })
})

test('icon components styles', () => {
  expect(collections['add-r']).toMatchSnapshot()
})
