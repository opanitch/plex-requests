const path = require('path');

module.exports = {
  compress: true,
  contentBase: path.resolve(__dirname, '../public'),
  historyApiFallback: true,
  host: '0.0.0.0',
  hot: true,
  index: 'index.html',
  overlay: true,
  port: 3000,
  publicPath: '/',
};
