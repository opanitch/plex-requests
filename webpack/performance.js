/**
 * This sets maximum asset sizes for all our bundles after they
 *  are created by webpack.
 *
 *  Try and update the comment when you tighten things down?
 *
 *  | -- When -- |  -- Size -- |  -- What Bundle? --  |
 *  | ---------- | ----------- | -------------------- |
 *  | 2021-2-22  | 400 KiB     | main.js     |
 *
 */
module.exports = {
  hints: 'error',
  maxAssetSize: 400000,
  maxEntrypointSize: 400000,
  assetFilter: (assetFilename) => /^bundles\/.*\.js$/i.test(assetFilename),
};
