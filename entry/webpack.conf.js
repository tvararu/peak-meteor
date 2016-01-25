var path = require('path')

module.exports = {
  externals: {
    'gravatar': 'Gravatar',
    'material-ui': 'MUI',
    'meteor/Accounts': 'Accounts',
    'meteor/BlazeToReact': 'BlazeToReact',
    'meteor/check': 'check',
    'meteor/ReactRouterSSR': 'ReactRouterSSR',
    'meteor/WebpackStats': 'WebpackStats',
    'meteor': 'Meteor',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'react-tap-event-plugin': 'injectTapEventPlugin',
    'react': 'React'
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
