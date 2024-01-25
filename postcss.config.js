/** @type {import('postcss-load-config').Config} */

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    'postcss-preset-env',
    'cssnano',
  ],
};
