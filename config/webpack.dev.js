var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    quiet: false,
    compress: true,
  }
});
