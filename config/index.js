// see http://vuejs-templates.github.io/webpack for documentation.
const serverConfig = require('./server.config')
module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    host: serverConfig.build.host,
    port: serverConfig.build.port,
    index: serverConfig.build.index,
    assetsRoot: serverConfig.build.www,
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: {
      NODE_ENV: '"development"',
      VUE_ENV: '"client"'
    },
    host: serverConfig.dev.host,
    port: serverConfig.dev.port,
    index: serverConfig.dev.index,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/dist/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false
  }
}