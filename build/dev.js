/* eslint-disable no-console, no-sync */
const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const opener = require('opener');

// Local Vars
const dir = path.join(__dirname, '../app/');
const host = 'localhost';
const port = 3000;
const localUrl = `http://${host}:${port}/`;

// Config file
const config = require('./config/webpack.config.dev');

// Update Config properties for development
config.devServer = {
    contentBase: '../dist',
    hot: true
};

// Set the dev server options
const options = {
    // clientLogLevel: 'warning',
    // compress: true,
    contentBase: dir,
    // disableHostCheck: true,
    // historyApiFallback: true,
    host: host,
    hot: true,
    // noInfo: true,
    // overlay: {
    //     warnings: true,
    //     errors: true
    // },
    port: port,
    // publicPath: config.output.publicPath,
    // stats: {
    //     // Config for minimal console.log mess.
    //     assets: false,
    //     colors: true,
    //     version: false,
    //     hash: false,
    //     timings: false,
    //     chunks: false,
    //     chunkModules: false
    // }
};

// Create the Server
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(port, host, () => {
  console.log(`Starting server on ${localUrl}`);
  opener(localUrl);
});
