import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { createRootReducer } from './rootReducer';
import rootSaga from '../sagas/rootSaga';

export const browserHistory = createBrowserHistory();

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: browserHistory,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: createRootReducer(routerReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(
      routerMiddleware,
      sagaMiddleware
    ),
});

sagaMiddleware.run(rootSaga);

export const reduxHistory = createReduxHistory(store);