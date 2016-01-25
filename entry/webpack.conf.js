var path = require('path')

module.exports = {
  externals: {
    'gravatar': 'Gravatar',
    'react': 'React',
    'react-router': 'ReactRouter',
    'react-dom': 'ReactDOM',
    'material-ui': 'MUI'
  },
  devServer: {
    // You can change this to your server IP address to access it remotely.
    host: 'localhost'
  },
  hotMiddleware: {
    reload: true
  },
  resolve: {
    root: path.join(__dirname, '..', 'modules'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
  }
}
