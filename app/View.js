const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')

const config = require('../build/config')

const isProd = process.env.NODE_ENV === 'production'

const rootPath = path.resolve(__dirname, '../')

/* eslint-disable import/no-dynamic-require */
const defaults = {
  template: isProd ? config.build.index : config.dev.index,
  bundle: path.resolve(rootPath, 'dist/vue-ssr-server-bundle.json'),
  clientManifest: path.resolve(rootPath, 'dist/vue-ssr-client-manifest.json')
}
class View {
  constructor(app, options = {}) {
    this.template = options.template ||
      fs.readFileSync(defaults.template, 'utf-8')

    if (isProd) {
      const bundle = options.bundle || require(defaults.bundle)
      const clientManifest = options.clientManifest || require(defaults.clientManifest)
      this.renderer = this.createRenderer(bundle, {
        clientManifest
      })
    } else {
      const devServer = path.resolve(rootPath, 'build/setup-dev-server')
      this.ready = require(devServer)(app, (bundle, opts) => {
        this.renderer = this.createRenderer(bundle, opts)
      })
    }
  }

  /**
   * create bundle renderer
   * @param {file} bundle
   * @param {object} options
   */
  createRenderer(bundle, options = {}) {
    return require('vue-server-renderer').createBundleRenderer(bundle, Object.assign({
      template: this.template,
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60,
      }),
      basedir: path.resolve(rootPath, './dist'),
      runInNewContext: false
    }, options))
  }

  /**
   * render html
   * @param {object} context
   */
  render(context) {
    return new Promise((resolve, reject) => {
      this.renderer.renderToString(context, (err, html) => {
        if (err) {
          reject(err)
        }
        resolve(html)
      })
    })
  }
}

module.exports = View
