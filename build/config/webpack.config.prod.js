// var webpack = require('webpack');

// Settings files
// const entry = require('./entry');
// const loaders = require('./loaders');
const output = require('./output');
// const path = require('./paths');

module.exports = {
    mode: 'production',
  entry: './app/index.js',
  output: output
};
