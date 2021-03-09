module.exports = {
  ident: 'postcss',
  plugins: [
    ['postcss-import'],
    [
      'postcss-preset-env',
      {
        browsers: 'last 2 versions',
        stage: 0,
      },
    ],
    ['autoprefixer'],
  ],
  syntax: 'postcss-scss',
};
