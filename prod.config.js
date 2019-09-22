const merge = require('webpack-merge')
const base = require('./base.config.js').default
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

exports.default = merge.smart(base, {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'production',
  plugins: [
    new OptimizeCSSPlugin()
  ]
})
