const buildType = {
  DEV: process.env.NODE_ENV !== 'production',
  PROD: process.env.NODE_ENV === 'production',
  GATE: process.env.BUILD_CONFIG === 'release' && !process.env.TEAMCITY_VERSION
};

module.exports = {
  TYPE: buildType,
  DEV: buildType.DEV,
  LINT: buildType.DEV || buildType.GATE,
  TEST: buildType.GATE,
  MINIFY: buildType.PROD
};
