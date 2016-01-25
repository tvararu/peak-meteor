import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Root from './handlers/Root'
import Home from './handlers/Home'
import Feed from './handlers/Feed'

export default
  <Route path='/' component={ Root }>
    <IndexRoute component={ Home } />
    <Route path='feed' component={ Feed } />
  </Route>
