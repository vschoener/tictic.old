
const StartServerPlugin = require('start-server-webpack-plugin')
const webpackConfig = require('./webpack.config');

webpackConfig.plugins.push(new StartServerPlugin({
  name: 'server.js',
  //nodeArgs: ['--inspect'],
  args: [],
  signal: false,
}));

webpackConfig.watch = true;

module.exports = webpackConfig;
