import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { createReduxHistoryContext } from 'redux-first-history';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';

export const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
        history: createBrowserHistory()
        // other options if needed
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk.withExtraArgument(), routerMiddleware];

export const store = createStore(
    combineReducers({ router: routerReducer, ...rootReducer }),
    composeEnhancers(applyMiddleware(...middlewares))
);

export const history = createReduxHistory(store);
