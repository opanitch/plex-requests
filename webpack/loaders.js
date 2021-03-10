const postCSSPlugins = require('./postcss.config');

module.exports = [
  {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      {
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
    ],
  },
  {
    test: /\.(s?css)$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: postCSSPlugins,
        },
      },
    ],
  },
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    exclude: /node_modules/,
    type: 'asset/resource',
  },
];
