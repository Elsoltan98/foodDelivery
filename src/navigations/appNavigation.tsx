import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DRAWERNAVIGATOR, RESTURANTMAP} from '../global/RoutesName';
import ResturantMap from '../screens/ResturantMap';

import DrawerNavigator from './DrawerNavigator';

const App = createNativeStackNavigator();

const AppNavigation = ({}) => {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name={DRAWERNAVIGATOR} component={DrawerNavigator} />
      <App.Screen name={RESTURANTMAP} component={ResturantMap} />
    </App.Navigator>
  );
};

export default AppNavigation;
