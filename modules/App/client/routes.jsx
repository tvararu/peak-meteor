injectTapEventPlugin()
import { Route, IndexRoute } from 'react-router'

import Root from './handlers/Root'
import Home from './handlers/Home'

export default
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
  </Route>
