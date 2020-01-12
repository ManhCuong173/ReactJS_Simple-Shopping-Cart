import { createStore, applyMiddleware, compose } from 'redux'
import * as action from './../actions/index'
import ThunkMiddleware from 'redux-thunk'
import products from './../reducers/index'

const ComposeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  products,
  ComposeEnhances(applyMiddleware(ThunkMiddleware))
);

store.dispatch(action.action_cart_initial_cart());
store.dispatch(action.action_message_Welcome_To_Shop())

export { store }