const pack = require('../package.json')
const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const multiConfig = require('../config/multi.conf')
const argvs = process.argv.slice(2)

function getParams (key) {
  let item = argvs.find(item => item.split('=')[0] === key)
  return item ? item.split('=') : []
}

let datetime = Date.now()
let plugins = []

let zipPros = getParams('zip')
if (zipPros.length) {
  plugins.push(new FileManagerPlugin({
    onEnd: {
      delete: [
        path.join(__dirname, `../${pack.name}_${multiConfig.process.name}_*.zip`)
      ],
      archive: [{
        source: path.join(__dirname, `../dist/${multiConfig.process.name}`),
        destination: path.join(__dirname, zipPros[1] ? `../${pack.name}_${zipPros[1]}.zip` : `../${pack.name}_${multiConfig.process.name}_v${pack.version}_${datetime}.zip`)
      }]
    }
  }))
}

module.exports = plugins
