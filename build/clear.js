const fs = require('fs')
const path = require('path')

function deleteFolder (path) {
  let files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(file => {
      let curPath = path + '/' + file
      let stat = fs.statSync(curPath)
      if (stat.isDirectory()) {
        deleteFolder(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

function deleteTemp (path) {
  let files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(file => {
      let curPath = path + '/' + file
      let stat = fs.statSync(curPath)
      if (stat.isFile() && /.+\.(zip|log)$/.test(file)) {
        fs.unlinkSync(curPath)
      }
    })
  }
}

deleteFolder(path.join(__dirname, '..', 'dist'))
deleteTemp(path.join(__dirname, '..'))
deleteTemp(path.join(__dirname, '../deploy'))
