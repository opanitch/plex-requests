// Documentation: https://webpack.js.org/configuration/optimization/
module.exports = (env) => ({
  chunkIds: env === 'production' ? 'total-size' : 'named',
  emitOnErrors: env === 'development',
  mangleExports: env === 'production' ? 'size' : false,
  minimize: env === 'production',
  minimizer: [],
  moduleIds: env === 'production' ? 'size' : 'named',
  nodeEnv: env,
  splitChunks: {
    minChunks: 2,
    cacheGroups: {
      vendors: false,
    },
  },
});
