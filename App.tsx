import React from 'react';
import MainNavigation from './Navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

/**
 * EXTREMELY HACKY
 * I got tired of labeling nabigation as unknown and couldnt figure out how to type it
 * so I just made this type with two common functions
 * // May Matt Pocock have mercy upon my soul
 */
export type HackyNavigation = {
  goBack: () => void;
  navigate: (routeName: string) => void;
};

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
