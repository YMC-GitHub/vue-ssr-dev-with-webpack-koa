# project diretory construtor

```
|--build # build the source files config for webpack
|--config #some config for build the project
|--src #save the source code (for dev)
|--test #save the test source code (for test)
|--dist #save the build ouput code by webpack (for pro)
|--static #static resource file that will be copyed by webpack
|--public #static resource file that will be serve by server (for pro)
|--app #save the server source code(for pro)
|--package.json #use npm ,and it's description
|--readme.md #readme before
|--license #project license file
|--note #save my some note for the project
|--husky.config.js
|--lint-staged.config.js
```

## webpack config  diretory construtor

```
|--build
| |--check-versions.js # use to check node,npm and some lib version
| |--utils.js # some useful tool for this dir
| |--vue-loader.config.js #vue-loader config file
| |--webpack.ssr-base.config.js #a webpack config file for base
| |--webpack.ssr-client.config.js #a webpack config file for ssr client bundle
| |--webpack.ssr-server.config.js #a webpack config file for ssr server bundle
| |--nodemon.json # config for nodemon when dev
| |--setup-dev-server.js #
```

## project config diretory construtor

```
|--config #some config for build the project
| |--dir.construtor.js #the project dir construtor map
| |--server.config.js #the server config for build and dev
| |--index.js #config index file for webpack
```


## source code dir construtor

```
|--src
| |--ssr-client.entry.js #the webpack client entry for ssr or csr
| |--ssr-server.entry.js #the webpack server entry for ssr
| |--csr-index.template.html #the html file index for csr when dev env
| |--ssr-index.template.html #the html file index for ssr when dev env
```


## production code dir construtor

```
|--dist
| |--static #js/css/img file for web
| | |--js #js file for webpack output or copy from xx path
| | |--css #css file for webpack output or copy from xx path
| | |--img #img file for webpack output or copy from xx path
| | |--service-worker.js #(optional)
| |--index.html #csr html index file
| |--vue-ssr-client-manifest.json #ssr client bundle
| |--vue-ssr-server-bundle.json #ssr server bundle
```
