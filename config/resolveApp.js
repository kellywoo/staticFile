
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
module.exports = { resolveApp: relativePath => path.resolve(appDirectory, relativePath)};
