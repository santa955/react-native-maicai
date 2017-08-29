import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { routerReducer } from 'react-router-redux';
import Reducer from '../reducers';

const middleware = [thunk];
if (__DEV__) {
    const { logger } = require(`redux-logger`);
    middleware.push(logger);
  }
const store = createStore(
    Reducer,
    applyMiddleware(...middleware)
)

export default store;
