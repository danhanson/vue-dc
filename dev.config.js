const path = require('path')
const merge = require('webpack-merge')
const base = require('./base.config.js').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.default = merge.smart(base, {
  entry: path.resolve(__dirname, 'src', 'examples.ts'),
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue-DC Components'
    })
  ]
})
