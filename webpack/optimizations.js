const { Environments } = require('./constants');

// Documentation: https://webpack.js.org/configuration/optimization/
module.exports = (env) => ({
  chunkIds: env === Environments.PROD ? 'total-size' : 'named',
  emitOnErrors: env === Environments.DEV,
  mangleExports: env === Environments.PROD ? 'size' : false,
  minimize: env === Environments.PROD,
  minimizer: [],
  moduleIds: env === Environments.PROD ? 'size' : 'named',
  nodeEnv: env,
  splitChunks: {
    minChunks: 2,
    cacheGroups: {
      vendors: false,
    },
  },
});
