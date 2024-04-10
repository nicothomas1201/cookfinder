/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // This is how you turn off semicolons, by the way
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}
