const fs = require('fs')
const { resolveApp } = require('../resolveApp')
const pageDir = resolveApp('pages')
const app = {}
fs.readdirSync(pageDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const fileName = file.replace(/\.tsx$/, '')
    app[fileName] = {
      import: resolveApp(`./pages/${file}`),
      filename: `static/js/${fileName}.js`,
      dependOn: 'shared',
      chunkLoading: false
    }
  }
});
module.exports = app