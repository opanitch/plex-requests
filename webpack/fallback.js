module.exports = {
  assert: false,
  buffer: require.resolve('buffer'),
  crypto: false,
  fs: false,
  http: require.resolve('stream-http'),
  https: require.resolve('https-browserify'),
  net: false,
  os: require.resolve('os-browserify/browser'),
  path: false,
  process: require.resolve('process'),
  querystring: false,
  stream: require.resolve('stream-browserify'),
  timers: false,
  tls: false,
  url: false,
  util: false,
  zlib: false,
};
