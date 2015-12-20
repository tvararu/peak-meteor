import 'App/lib/methods'
import 'App/server/publications'

// Do server-rendering only in production mode
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR.
  ReactRouterSSR.LoadWebpackStats(WebpackStats)

  require('../client/routes')
} else {
  const context = require.context('../../modules', true, /\/server\/(.*)\/integration\/(.*)\-fixtures\.jsx?$/)
  context.keys().forEach(context)

  if (process.env.FRAMEWORK === 'jasmine-server-integration') {
    // Run integration tests on server
    const context = require.context('../../modules', true, /\/server\/(.*)\/integration\/(.*)\-test\.jsx?$/)
    context.keys().forEach(context)
  }
}
