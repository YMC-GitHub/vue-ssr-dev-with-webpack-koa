const path = require('path')
const resolve = file => path.resolve(__dirname, file)
module.exports = {
  build: {
    //where the host is?
    host: '0.0.0.0',
    //which port is?
    port: 3000,
    //where the html file to serve?
    www: resolve('../dist'),
    //what is the name of html files
    index: resolve('../dist/index.html'),
    //where the static file to serve?
    static: resolve('../public'),
  },
  dev: {
    //where the host is?
    host: 'localhost',
    //which port is?
    port: 8080,
    //where the html file to serve?
    www: resolve('../dist'),
    //what is the name of html files
    index: resolve('../src/ssr-index.template.html'),
    //where the static file to serve?
    static: resolve('../public'),
  }
}
