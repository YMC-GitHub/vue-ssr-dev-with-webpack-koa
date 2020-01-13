/* eslint-disable import/no-unresolved */
const path = require('path')
const Koa = require('koa')
const favicon = require('koa-favicon')
const compression = require('koa-compress')
const logger = require('koa-logger')
const bluebird = require('bluebird')
const chalk = require('chalk')

const config = require('../build/server.config.js')

global.Promise = bluebird

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}
const isProd = process.env.NODE_ENV === 'production'

const rootPath = path.resolve(__dirname, '../')

const resolve = file => path.resolve(rootPath, file)

// create koa instance
const app = new Koa()

const router = require('./router')(app)

// static serve
const serve = (filepath, cache) => require('koa-static')(resolve(filepath), {
  // set browser cache max-age in milliseconds.
  maxage: cache && isProd ? 60 * 60 * 24 * 30 : 0
})
// log serve
app.use(logger())
// zlib serve
app.use(compression({
  // checks the response content type to decide whether to compress
  // filter: function (content_type) {return /text/i.test(content_type)},
  // set minimum response size in bytes to compress
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))
app.use(favicon(isProd ? `${config.build.static}/favicon.ico` : `${config.dev.static}/favicon.ico`, {
  // set favicon cache max-age in milliseconds.
  maxAge: isProd ? 1 * 1000 * 60 * 60 * 60 * 24 : 1000
  // 1*1000*60*60*60*24
  // n*ms*s*m*h*d*
}))
// static serve for public dir
app.use(serve(isProd ? config.build.static : config.dev.static, true))
// static serve for dist dir
app.use(serve(isProd ? config.build.www : config.dev.www, true))

app.use(router.routes()).use(router.allowedMethods())

// page not found
app.use((ctx, next) => {
  ctx.type = 'html'
  ctx.body = '404 | Page Not Found'
})

const host = process.env.HOST || (isProd ? config.build.host : config.dev.host) || 'localhost'
const port = process.env.PORT || (isProd ? config.build.port : config.dev.port) || 3000
app.listen(port, host, () => {
  console.log('\n--------- Started ---------')
  console.log(chalk.bold('NODE_ENV:'), chalk.keyword('orange').bold(process.env.NODE_ENV || 'development'))
  const url = host === '0.0.0.0' ? `http://127.0.0.1:${port}` : `http://${host}:${port}`
  console.log(chalk.bold('SERVER:'), chalk.blue.bold(url))
  console.log('---------------------------\n')
})
