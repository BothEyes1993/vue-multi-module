const path = require('path')
const pack = require('../package.json')
const argvs = process.argv.slice(2)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getParams (key) {
  let item = argvs.find(item => item.split('=')[0] === key)
  return item ? item.split('=') : []
}

function getModuleAlias () {
  let alias = {}
  importModules.forEach(({ name }) => {
    alias[`@${name}`] = resolve(`src/${name}`)
  })
  return alias
}

class MultiModule {
  constructor (name, opts) {
    let datetime = Date.now()
    Object.assign(this, {
      name,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      port: 8080,
      host: '0.0.0.0',
      proxyTable: null,
      entry: {
        app: ['babel-polyfill', `./src/${name}/main.js`]
      },
      alias: resolve(`src/${name}`),
      index: path.resolve(__dirname, `../dist/${name}/index.html`),
      favicon: path.resolve(__dirname, `../src/${name}/assets/favicon.ico`),
      assetsRoot: path.resolve(__dirname, `../dist/${name}/`),
      pubdate: `${name}_v${pack.version}_${datetime}`,
      publics: [name].concat(opts.statics || []),
      deployConfig: null
    }, opts)
  }
}

function getModuleProcess (name) {
  let mItem = importModules.find(item => item.name === name)
  return mItem || importModules[0]
}

function proxyHandle (proxyReq, req, res, options) {
  let origin = `${options.target.protocol}//${options.target.hostname}`
  proxyReq.setHeader('origin', origin)
  proxyReq.setHeader('referer', origin)
}

function onProxyReq (proxyReq, req, res, options) {
  proxyHandle(proxyReq, req, res, options)
}

function onProxyReqWs (proxyReq, req, socket, options, head) {
  proxyHandle(proxyReq, req, socket, options)
}

function getProxyConfig (target, options) {
  return Object.assign({
    target,
    secure: false,
    changeOrigin: true,
    ws: false,
    cookieDomainRewrite: { '*': '' },
    cookiePathRewrite: { '*': '/' },
    onProxyReq,
    onProxyReqWs
  }, options)
}

const PROXY_DOMAIN_DEFAULT = 'http://www.baidu.com'

// 多模块独立配置
var importModules = [
  new MultiModule('project1', {
    port: 8091,
    statics: ['static1'],
    proxyTable: {
      '/servers1/': getProxyConfig(PROXY_DOMAIN_DEFAULT)
    }
  }),
  new MultiModule('project2', {
    port: 8092,
    statics: ['static2'],
    proxyTable: {
      '/servers2/': getProxyConfig(PROXY_DOMAIN_DEFAULT)
    }
  }),
  new MultiModule('project3', {
    port: 8093,
    statics: ['static3'],
    proxyTable: {
      '/servers3/': getProxyConfig(PROXY_DOMAIN_DEFAULT)
    }
  }),
  new MultiModule('project4', {
    port: 8094,
    statics: ['static4'],
    proxyTable: {
      '/servers4/': getProxyConfig(PROXY_DOMAIN_DEFAULT)
    }
  })
]
var lifecycleEvents = String(process.env.npm_lifecycle_event).split(':')
var moduleName = getParams('name')[1] || lifecycleEvents[1]

const multiConfig = {
  modules: importModules,
  moduleAlias: getModuleAlias(),
  process: getModuleProcess(moduleName)
}

module.exports = multiConfig
