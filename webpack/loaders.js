// const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const postCSSPlugins = require('./postcss.config');

module.exports = [
  {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/env', { modules: false }], '@babel/react']
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
          plugins: () => [autoprefixer()],
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
  },
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/fonts/[name].[ext]',
      esModule: false
    }
  }
];
