import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import history from '../routes/history';

export interface ApplicationState {}

interface ReduxPersist {
  key: string;
  whitelist: any;
  storage: any;
}

const persistConfig: ReduxPersist = {
  key: 'root',
  whitelist: ['login'],
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(...[sagaMiddleware, routerMiddleware(history)]),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default persistor;
