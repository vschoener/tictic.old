const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin')
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.ENV || 'development',

  // node project (avoid error with fs, net, ...)
  target: 'node',

  entry: [
    'webpack/hot/poll?1000',
    './src/main.ts'
  ],

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
  },

  devServer: {
    contentBase: './build',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  // Ignore all node module in 'node_modules'
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
