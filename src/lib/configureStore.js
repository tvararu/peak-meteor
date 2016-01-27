import { applyMiddleware, createStore, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'
import DevTools from 'handlers/DevTools'

const finalCreateStore = compose(
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

const configureStore = initialState => {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('reducers', () =>
      store.replaceReducer(require('reducers'))
    )
  }

  return store
}

export default configureStore
