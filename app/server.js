const chalk = require('chalk')
const app = require('./app-koa')

const config = require('../config/server.config')

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}
const isProd = process.env.NODE_ENV === 'production'

const host = process.env.HOST || (isProd ? config.build.host : config.dev.host) || 'localhost'
const port = process.env.PORT || (isProd ? config.build.port : config.dev.port) || 3000
app.listen(port, host, () => {
  console.log('\n--------- Started ---------')
  console.log(chalk.bold('NODE_ENV:'), chalk.keyword('orange').bold(process.env.NODE_ENV || 'development'))
  const url = host === '0.0.0.0' ? `http://127.0.0.1:${port}` : `http://${host}:${port}`
  console.log(chalk.bold('SERVER:'), chalk.blue.bold(url))
  console.log('---------------------------\n')
})
