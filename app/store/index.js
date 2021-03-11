import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducers from './rootReducer';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [composeEnhancers(applyMiddleware(...middleware))];
const persistConfig = {enhancers};
const store = createStore(rootReducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {});
const configureStore = () => {
  return {persistor, store};
};

sagaMiddleware.run(rootSaga);

export default configureStore;
