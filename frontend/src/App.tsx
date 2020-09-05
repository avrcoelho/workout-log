import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import GlobalStyles from './styles/Global';

const App: React.FC = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
