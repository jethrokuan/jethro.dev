const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production'
    ? cssnano({ preset: 'default' })
    : null,
    process.env.NODE_ENV === 'production'
    ? purgecss({
      content: ['./public/index.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
    : null,
]
}
