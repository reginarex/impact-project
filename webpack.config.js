const ChromeExtensionReloader  = require('webpack-chrome-extension-reloader');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    content: "./inject.js",
    background: "./background.js"
  },
  output: {
    path: path.join(__dirname, 'ext'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new ChromeExtensionReloader({
      reloadPage: true,
      entries: {
        contentScript: "content",
        background: "background"
      }
    })
  ]
};
