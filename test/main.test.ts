import { test, expect } from 'vitest'
import cssggJson from 'css.gg/icons/all.json'
import { generateIconComponent, buildCssggIcon } from '../src/lib'

test('icon components styles', () => {
  const collections = buildCssggIcon()
  expect(collections['add-r']).toMatchSnapshot()
})

test('generate icon component', () => {
  const raw = generateIconComponent('zeit', cssggJson.zeit[0][0].css)
  expect(raw).toMatchSnapshot()
})
