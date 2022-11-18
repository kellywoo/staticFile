module.exports = ({ htmlWebpackPlugin }) => {
  const types = {
    meta: [],
    link: [],
    script: [],
    base: [],
    rest: []
  }
  htmlWebpackPlugin.tags.headTags.forEach(v => {
    const { tagName } = v
    const group = types[tagName] ||types.rest
    group.push(v.toString())
  })

	return `<!DOCTYPE html>
<html>
  <head>
    ${types.base[0] || ''}
    ${types.meta.join('')}
    <title>${htmlWebpackPlugin.options.title}</title>
    ${types.rest.join('')}
    ${types.link.join('')}
    ${htmlWebpackPlugin.options.head || ''}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    ${types.script.join('')}
    ${htmlWebpackPlugin.tags.bodyTags}
    ${htmlWebpackPlugin.options.body || ''}
  </body>
</html>

  `
}
