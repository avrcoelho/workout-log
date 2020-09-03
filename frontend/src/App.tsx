import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <PersistGate loading={null} persistor={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  );
};

export default App;
