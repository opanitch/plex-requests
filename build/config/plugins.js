const webpack = require('webpack');
const SassLintPlugin = require('sasslint-webpack-plugin');

const paths = require('./paths');
const chunks = require('./plugins-chunks');
const env = require('./environment');

const plugins = [
  new webpack.NamedModulesPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
  ...chunks
];

if (env.LINT) {
  plugins.push(
    new SassLintPlugin({
      context: paths.app,
      quiet: true
    })
  );
}

if (env.MINIFY) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = plugins;
