const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const plugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([{ from: './app/assets', to: 'assets' }]),
  new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css'
  }),
  new HtmlWebPackPlugin({
    filename: 'index.html',
    hash: true,
    inject: false,
    template: './app/index.ejs',
    title: 'Plex Requests'
  }),
  new WebpackMd5Hash()
];

module.exports = plugins;
