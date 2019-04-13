const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin('dist', {}),
  new CopyWebpackPlugin([{ from: './app/assets', to: 'assets' }]),
  new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css'
  }),
  new HtmlWebPackPlugin({
    inject: false,
    hash: true,
    template: './app/index.ejs',
    filename: 'index.html'
  }),
  new WebpackMd5Hash()
];

module.exports = plugins;
