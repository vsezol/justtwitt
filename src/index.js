// react
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import reduxThunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'

// root reducer
import rootReducer from './store/reducers/rootReducer'

// saga
import saga from './store/sagas/saga'

import './index.sass'
import App from './App'

// devTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk, sagaMiddleware))
)
sagaMiddleware.run(saga)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
