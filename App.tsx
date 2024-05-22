import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
