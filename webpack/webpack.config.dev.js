const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const path = require('path')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 5555,
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
})
