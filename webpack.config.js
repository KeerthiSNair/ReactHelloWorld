var path = require('path');
var webpack = require("webpack");
var sourcesPath = path.join(__dirname, 'sources');
var nodeModulesPath = path.join(__dirname, 'node_modules');
module.exports = {
  entry: {
    app: "./lib/app.jsx",
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'react-router',
      'whatwg-fetch']
  },

  output: {
    filename: 'app.js'
  },

  devtool: 'source-map',

  plugins: [
    // new webpack.optimize.UglifyJsPlugin(
    new webpack.optimize.CommonsChunkPlugin(
      "vendor", "vendor.js"),
    // Polyfill for old IE https://gist.github.com/Couto/b29676dd1ab8714a818f
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: nodeModulesPath }
    ],
    noParse: /node_modules\/quill\/dist/
  },
  resolve: {
    root: [sourcesPath, nodeModulesPath],
    extensions: ['', '.js','.jsx']
  }
};
