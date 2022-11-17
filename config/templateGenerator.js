module.exports = ({ htmlWebpackPlugin }) => {
	const publicPath = htmlWebpackPlugin.files.publicPath.replace(/\/$/, '')
	const name = htmlWebpackPlugin.options.name
	let styleLinkCss = `<link href="${publicPath}/static/${name}.css" rel="stylesheet"/>`
	if (!htmlWebpackPlugin.files.css.includes(`${publicPath}/static/${name}.css`)) {
		styleLinkCss = ''
	}
	return `<!DOCTYPE html>
<html>
  <head>
    <base href="${publicPath}"/>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    ${htmlWebpackPlugin.options.head || ''}
    ${styleLinkCss}
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="/static/js/shared.js"></script>
    <script defer src="/static/js/${name}.js"></script>
    ${htmlWebpackPlugin.options.body || ''}
  </body>
</html>

  `
}
