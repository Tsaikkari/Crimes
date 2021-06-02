import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './saga'

export const initState = {
  crimes: [],
  teams: [],
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  let composeEnhancer = compose

  const localState = localStorage.getItem('initState')
  localState && (initialState = JSON.parse(localState))

  if (process.env.NODE_ENV === 'development') {
    if ((window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancer = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer(),
    // @ts-ignore
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  if ((module).hot) {
    ;(module).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}