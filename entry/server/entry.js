import ReactRouterSSR from 'meteor/ReactRouterSSR'
import WebpackStats from 'meteor/WebpackStats'
import 'lib/methods'
import 'server/publications'

// Do server-rendering only in production mode
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR.
  ReactRouterSSR.LoadWebpackStats(WebpackStats)

  require('../client/routes')
}
