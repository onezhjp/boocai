
const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')(['cnlorem']);

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})


module.exports = (_phase, { defaultConfig }) => {
  // Workaround
  delete defaultConfig.webpackDevMiddleware;
  delete defaultConfig.configOrigin;
  delete defaultConfig.target;
  delete defaultConfig.webpack5;
  delete defaultConfig.amp.canonicalBase;
  delete defaultConfig.experimental.outputFileTracingRoot;
  delete defaultConfig.i18n;

  const plugins = [withTM, withNextra]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig })
}
