const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Settings files
const entry = require('./entry');
const loaders = require('./loaders');
const output = require('./output');
// const plugins = require('./plugins');
// const resolve = require('./resolve');

module.exports = {
  devtool: 'inline-source-map',
  entry: entry,
  module: {
    rules: loaders
  },
  output: output,
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
