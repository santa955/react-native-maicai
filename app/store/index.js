import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux';
import Reducer from '../reducers';

const middleware = [thunk];
const store = createStore(
    Reducer,
    applyMiddleware(...middleware)
)

export default store;
