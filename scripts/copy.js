const fs = require('fs-extra')
const { resolveApp } = require('../config/resolveApp')
const mainFolder = resolveApp('build/main')
const indexFile = resolveApp('build/index.html')
fs.copySync(resolveApp('build'), resolveApp('..'), {
	dereference: true,
	filter: (file) => {
		return file !== indexFile && !file.startsWith(mainFolder)
	},
})
