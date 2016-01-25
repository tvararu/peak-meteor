import React from 'react'
import ReactRouterSSR from 'meteor/ReactRouterSSR'
import { Route } from 'react-router'
import routes from 'client/routes'

ReactRouterSSR.Run(
  <Route>
    { routes }
  </Route>
)
