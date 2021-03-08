module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    ['postcss-import'],
    [
      'postcss-preset-env',
      {
        browsers: 'last 2 versions',
        stage: 0,
      },
    ],
  ],
};
