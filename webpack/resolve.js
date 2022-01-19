const aliases = require('./aliases');
const fallback = require('./fallback');

module.exports = {
  alias: aliases,
  extensions: ['.css', '.html', '.js', '.jsx', 'scss', '.svg', '.ttf', '.ts', '.tsx'],
  fallback,
};
