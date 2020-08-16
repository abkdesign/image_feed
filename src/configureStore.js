import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from  'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;
export function configureStore(deps = {}) {
  const Store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  );
  sagaMiddleware.run(rootSaga);
  return Store
}

