const fs = require('fs')
const { resolveApp } = require('../resolveApp')
const pageDir = resolveApp('pages')
const regexp = /\.(tsx|ts|jsx|js|)$/
const readEntries = () => {
	const app = {}
	fs.readdirSync(pageDir).forEach((file) => {
		if (regexp.test(file)) {
			const fileName = file.replace(regexp, '')
			app[fileName] = {
				import: [resolveApp(`./pages/${file}`)],
				filename: `static/js/${fileName}.js`,
				dependOn: 'vendor',
				chunkLoading: false,
			}
		}
	})
	return app
}
module.exports = readEntries
