import 'TodoApp/todo-methods'
import 'TodoApp/server/todo-subscriptions'

// Do server-rendering only in production mode
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR.
  ReactRouterSSR.LoadWebpackStats(WebpackStats)

  require('../client/routes')
}
