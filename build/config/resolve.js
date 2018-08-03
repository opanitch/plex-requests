const path = require('path');

module.exports = {
  modules: [path.resolve(__dirname, '../../app'), 'node_modules'],
  extensions: ['.js', '.jsx', '.json'],
  alias: {
    express: 'express',
    'lodash-es': 'lodash',
    mysql: 'mysql'
  }
};
