import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';


const initialState = {};

const middlewares = [
    thunk,
    createLogger()
];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default store;
