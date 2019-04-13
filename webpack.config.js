// Pull in webpack config partials
const devServer = require('./build/config/devServer');
const entry = require('./build/config/entry');
const loaders = require('./build/config/loaders');
const output = require('./build/config/output');
const plugins = require('./build/config/plugins');

module.exports = {
  devServer: devServer,
  devtool: 'inline-source-map',
  entry: entry,
  module: loaders,
  output: output,
  plugins: plugins
};
