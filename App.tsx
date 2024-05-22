import React from 'react';
import MainNavigation from './Navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
