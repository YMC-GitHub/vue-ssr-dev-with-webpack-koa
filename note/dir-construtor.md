# project diretory construtor

```
|--build # build the source files config for webpack and other
|--license #project license file
|--lint-staged.config.js #(optional)
|--husky.config.js #(optional)
|--note #save my some note for the project
|--package.json #use npm ,and it's description
|--readme.md #readme before
|--src #save the source code (for dev)
|--public #some static resource file for public
```

## webpack config  diretory construtor

```
|--build
| |--check-versions.js # use to check node,npm and some lib version
| |--build.js # use webpack build for csr
| |--check-versions.js # check npm , node or other lib version
| |--utils.js # some useful tool for this dir
| |--vue-loader.config.js #vue-loader config file
| |--webpack.ssr-base.config.js #a webpack config file for base
| |--webpack.ssr-client.config.js #a webpack config file for ssr client bundle
| |--webpack.ssr-server.config.js #a webpack config file for ssr server bundle
| |--config.js # some config for the project
| |--nodemon.json # config for nodemon when dev
```

## source code dir construtor

```
|--src
| |--api #save some config for backend api or mock api
| |--assets #save some static file
| |--components #
| |--filter #save some filter for vue engine
| |--mixins #save some mixin
| |--locale #save multi languge file
| |--router #save route file
| |--ssr-client.entry.js
| |--ssr-server.entry.js
| |--store #save data file
| |--style #css style file ,may be .css,.less,.scss,.postcss ...
| |--utlis #save some tool for src
| |--views #save some view file
| |--App.vue #.vue index file
| |--app.js #.js index file
```

## production code dir construtor

```
|--dist
| |--static #js/css/img file for web
| |--index.html #csr html index file
| |--service-worker.js #(optional)
| |--vue-ssr-client-manifest.json #ssr client bundle
| |--vue-ssr-server-bundle.json #ssr server bundle
```
