// Pull in webpack config partials
const devServer = require('./webpack/devServer');
const entry = require('./webpack/entry');
const loaders = require('./webpack/loaders');
const output = require('./webpack/output');
const optimizations = require('./webpack/optimizations');
const plugins = require('./webpack/plugins');
const resolve = require('./webpack/resolve');

const { BROWSER_TYPES, ENVIRONMENTS } = require('./build/globals/environments');

const ENV = process.env.NODE_ENV;
const isProduction = ENV === ENVIRONMENTS.PRODUCTION;

console.log('**********************************************');
console.log('********** WEBPACK NODE ENVIRONMENT **********');
console.log(ENV);
if (!isProduction) {
  console.log('********** WEBPACK CONFIG DEV SERVER *********');
  console.log(devServer);
  console.log('************ WEBPACK CONFIG ENTRY ************');
  console.log(entry);
  console.log('*********** WEBPACK CONFIG LOADERS ***********');
  console.log(loaders);
  console.log('********* WEBPACK CONFIG OPTIMIZATIONS *******');
  console.log(optimizations);
  console.log('*********** WEBPACK CONFIG OUTPUT ************');
  console.log(output);
  console.log('*********** WEBPACK CONFIG PLUGINS ***********');
  console.log(plugins);
  console.log('*********** WEBPACK CONFIG RESOLVE ***********');
  console.log(resolve);
  console.log('************* WEBPACK CONFIG END *************');
}
console.log('**********************************************');

module.exports = {
  devServer: devServer,
  devtool: !isProduction ? 'eval-cheap-module-source-map' : false,
  entry,
  mode: ENV,
  module: {
    rules: loaders,
  },
  optimization: optimizations(ENV),
  output,
  plugins: plugins(ENV),
  resolve,
  target: BROWSER_TYPES.WEB,
};
