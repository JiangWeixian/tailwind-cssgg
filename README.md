[![npm](https://img.shields.io/npm/v/tailwind-cssgg)](https://github.com/JiangWeixian/tailwind-cssgg) [![GitHub](https://img.shields.io/npm/l/tailwind-cssgg)](https://github.com/JiangWeixian/tailwind-cssgg)

Use [css.gg](https://css.gg) icons in tailwindcss

## usage

Add `tailwind-csgg` plugin in `tailwindcss.config.js` plugins fields

```js
const { cssgg } = require('tailwind-cssgg')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [cssgg],
}
```

Then you can use the icons in your HTML:

```html
<!-- pattern: gg-[iconname] -->
<i className="gg-zeit" />

<!-- pattern: gg-[iconname]/scale, will apply transform: scale(0.5) -->
<i className="gg-zeit/0.5" />
```

## install

```console
pnpm i tailwind-cssgg
```

## development

- **Setup** - `pnpm i`
- **Build** - `pnpm build`

# 
<div align='right'>

*built with ❤️ by 😼*

</div>

