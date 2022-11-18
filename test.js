const { parse } = require('@babel/parser')
const fs = require('fs')
const path = require('path')
const doc = fs.readFileSync(path.resolve(process.cwd(), 'pages/app1.tsx'), 'utf-8')
console.log(doc)
const ast = parse(doc, {
	errorRecovery: true,
	sourceType: 'module',
	plugins: [
		// enable jsx and flow syntax
		'jsx',
		'typescript',
	],
})
const m =	(ast.program.body
		.filter((v) => v.type === 'VariableDeclaration')
		.map(({ declarations }) => declarations[0]).filter((v)=>{
			return v.id.name === 'Head'
	}) || {})[0]

console.log(m)
console.log(doc.slice(m.init.start, m.init.end))

