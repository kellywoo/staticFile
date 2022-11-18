const { resolveApp } = require('./resolveApp')

module.exports = {
  '@src': resolveApp('src'),
  '@app': resolveApp('src/app'),
  '@assets': resolveApp('src/assets'),
  '@pages': resolveApp('pages')
}