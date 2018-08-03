const webpack = require('webpack');

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['main'],
    minChunks: module => {
      return module.context && /node_modules/.test(module.context);
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor-react',
    chunks: ['vendor'],
    minChunks: module => {
      return module.context && /react|redux/.test(module.context);
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor-react-components',
    chunks: ['vendor-react'],
    minChunks: module => {
      return (
        module.context &&
        /react-dates|react-autosuggest|react-autowhatever/.test(module.context)
      );
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'components',
    chunks: ['main'],
    minChunks: module => {
      return module.context && /components/i.test(module.context);
    }
  })
];
