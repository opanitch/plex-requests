const { getUserAgentRegExp } = require('browserslist-useragent-regexp');

module.exports = function generateBrowserRegexp(env) {
  console.log(`** Generating Browser Support Regexp for ${env}`);
  const contents = `module.exports = ${getUserAgentRegExp({
    allowHigherVersions: true,
    env,
  })};`;

  return contents;
};
