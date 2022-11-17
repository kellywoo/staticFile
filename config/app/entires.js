const fs = require('fs')
const { resolveApp } = require('../resolveApp')
const pageDir = resolveApp('pages')
const app = {}
fs.readdirSync(pageDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    app[file.replace(/\.tsx$/, '')] = resolveApp(`pages/${file}`)
  }
});
module.exports = app