const path = require('path');

module.exports = {
  // API
  API: path.resolve(__dirname, '../api'),
  CONFIG: path.resolve(__dirname, '../api/config'),
  CONSTANTS: path.resolve(__dirname, '../api/constants'),
  DATA: path.resolve(__dirname, '../api/data'),
  HELPERS: path.resolve(__dirname, '../api/helpers'),
  HOOKS: path.resolve(__dirname, '../api/hooks'),

  // Application
  Atoms: path.resolve(__dirname, '../app/atoms'),
  Components: path.resolve(__dirname, '../app/components'),
  Containers: path.resolve(__dirname, '../app/containers'),
  Forms: path.resolve(__dirname, '../app/forms'),
  Pages: path.resolve(__dirname, '../app/pages'),

  // Assets
  ASSETS: path.resolve(__dirname, '../assets'),
};
