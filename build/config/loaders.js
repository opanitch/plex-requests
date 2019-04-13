const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixerSettings = {
  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Safari 8'],
  flexbox: 'no-2009'
};

module.exports = {
  rules: [
    {
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'react'],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread'
            ]
          }
        },
        {
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer(autoprefixerSettings)],
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }
  ]
};
