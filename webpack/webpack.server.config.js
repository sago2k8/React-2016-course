const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: './build/server'
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules')
      }
    ]
  },
  target: 'node',
  plugins: [
    new ExtractTextPlugin('../statics/styles.css')
  ]
}
