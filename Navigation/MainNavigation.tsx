import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home/Home';
import {Routes} from './Routes';
import SingleDonationItem from './Screens/SingleDonationItem/SingleDonationItem';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
