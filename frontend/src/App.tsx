import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store';

const App: React.FC = () => {
  return (
    <PersistGate loading={null} persistor={store}>
      <h1>Hello world</h1>
    </PersistGate>
  );
};

export default App;
