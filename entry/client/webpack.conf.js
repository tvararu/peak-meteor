var ExtractTextPlugin = require('extract-text-webpack-plugin')

var babelSettings = { presets: ['react', 'es2015', 'stage-0'] }
babelSettings.plugins = ['transform-decorators-legacy', 'babel-plugin-lodash']

var cssLoader
var plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(new ExtractTextPlugin('style.css'))
  cssLoader = ExtractTextPlugin.extract('style', 'css?module&localIdentName=[hash:base64:5]')
} else {
  cssLoader = 'style!css?module&localIdentName=[name]__[local]__[hash:base64:5]'
  babelSettings.plugins.push(['react-transform', {
    transforms: [{
      transform: 'react-transform-hmr',
      imports: ['react'],
      locals: ['module']
    }, {
      transform: 'react-transform-catch-errors',
      imports: ['react', 'redbox-react']
    }]
    // redbox-react is breaking the line numbers :-(
    // you might want to disable it
  }])
}

module.exports = {
  entry: './entry',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /node_modules/ },
      { test: /\.css$/, loader: cssLoader },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  },
  plugins: plugins
}
