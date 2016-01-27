import { createStore, compose } from 'redux'
import rootReducer from 'reducers'
import DevTools from 'handlers/DevTools'

const finalCreateStore = compose(
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
