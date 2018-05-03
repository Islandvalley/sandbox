const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    index: [path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  performance: {
    maxEntrypointSize: 10485760,
    maxAssetSize: 10485760
  }
}
