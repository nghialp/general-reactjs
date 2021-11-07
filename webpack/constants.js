const path = require("path");

const rootPath = path.dirname(__dirname);

module.exports = {
  appPath: path.join(rootPath, "src"),
  outputPath: path.join(rootPath, "dist"),
};