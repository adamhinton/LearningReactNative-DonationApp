import React from 'react';
import MainNavigation from './Navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
