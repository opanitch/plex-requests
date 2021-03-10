const path = require('path');

const aliases = require('./aliases');
const fallback = require('./fallback');

module.exports = {
  alias: aliases,
  extensions: ['.html', '.js', '.jsx', '.ts', '.tsx'],
  fallback,
  modules: [path.resolve(__dirname, '../node_modules')],
  symlinks: false,
};
