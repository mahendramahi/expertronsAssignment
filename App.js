import React from 'react';
// import {store, persistor} from './src/redux/store';
import {Provider as ReduxProvider} from 'react-redux';
import ConfigureStore from "./src/redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import Counter from './src/Counter';

const { store, persistor } = ConfigureStore;

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Counter />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
