module.exports = {
  plugins: [
    ['postcss-import'],
    ['tailwindcss'],
    [
      'postcss-preset-env',
      {
        browsers: 'last 2 versions',
        stage: 0,
      },
    ],
  ],
};
