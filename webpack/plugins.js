const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const VirtualModulesPlugin = require('webpack-virtual-modules');
const WebpackMd5Hash = require('webpack-md5-hash');

const getBrowserRegexp = require('./browser-regexp');
const { BROWSER_TYPES } = require('../build/globals/environments');

module.exports = (env) => [
  new webpack.ProgressPlugin(),
  /**
   * All files inside webpack's output.path directory will be removed once, but the
   * directory itself will not be. If using webpack 4+'s default configuration,
   * everything under <PROJECT_DIR>/dist/ will be removed.
   * Use cleanOnceBeforeBuildPatterns to override this behavior.
   *
   * During rebuilds, all webpack assets that are not used anymore
   * will be removed automatically.
   *
   * See `Options and Defaults` for information
   */
  new CleanWebpackPlugin(),
  // Establishes environment var for things like redux
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }),
  new webpack.ProvidePlugin({ process: ['process'] }),
  new CopyWebpackPlugin({ patterns: [{ from: './assets', to: 'assets' }] }),
  new HtmlWebPackPlugin({
    chunks: ['browser-check', 'main'],
    filename: 'index.html',
    inject: true,
    minify: {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    },
    template: path.resolve(__dirname, '../index.html'),
    title: 'Plex Requests',
  }),
  // Unsupported Browsers Page
  new HtmlWebPackPlugin({
    chunks: ['unsupported'],
    filename: 'unsupported-browser.html',
    inject: true,
    minify: {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    },
    template: path.resolve(__dirname, '../unsupported-browser.html'),
    title: 'Unsupported | Plex Requests',
  }),
  // Unsupported Browsers Page
  new VirtualModulesPlugin({
    SUPPORTED_MOBILE_BROWSERS: getBrowserRegexp(BROWSER_TYPES.MOBILE),
    SUPPORTED_WEB_BROWSERS: getBrowserRegexp(BROWSER_TYPES.WEB),
  }),
  // new WebpackMd5Hash(),
];
