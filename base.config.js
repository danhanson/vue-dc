const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.default = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          'eslint-loader'
        ],
        exclude: path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  node: false,
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ]
}
