const { resolveApp } = require('./resolveApp')

module.exports = {
  '@src': resolveApp('src'),
  '@app': resolveApp('src/app'),
  '@pages': resolveApp('pages')
}