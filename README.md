# vue-ssr-dev-with-webpack-koa

## desc

vue app develop with webpack + koa (ssr mode)

note: you can also start your project with [Vue CLI](https://cli.vuejs.org/)

![screenshot](./public/static/img/screenshot.png)

## project diretory constructor

get detail [here](./note/dir-construtor.md)

## some important deps for ssr develop

- eslint (lint .js .vue file)
- babel (handle es6+)
- webpack (pack lib)
- postcss (handle css style with future feat)
- node-sass (handle sass/scss style (optional))
- less (handle less style (optional))

note: remember to take care of their version with each other.

## some config

01.what is the entry for ssr client? [config](./build/webpack.ssr-base.config.js#L24)

02.what is the entry for ssr server? [config](./build/webpack.ssr-server.config.js#L10)

06.use eslint to lint with project config [config](./build/config.js#L49-#L52)

todos ...

## some command

``` bash
# install dependencies
npm install # or yarn install

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## author

yemiancheng <ymc-github@gmail.com>

## contributor

eteplus <eterplus@gmail.com>

## License
MIT
