import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home/Home';
import {Routes} from './Routes';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
