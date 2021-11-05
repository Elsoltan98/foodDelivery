import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import {CLIENTNAV, RESTURANTMAP, SIGNIN, WELCOME} from '../global/RoutesName';
import Welcome from '../screens/Welcome';
//import Home from '../screens/Home';
import clientNavigation from './clientNavigation';
import ResturantMap from '../screens/ResturantMap';

const Auth = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name={WELCOME} component={Welcome} />
      <Auth.Screen name={SIGNIN} component={SignIn} />
      <Auth.Screen name={CLIENTNAV} component={clientNavigation} />
      <Auth.Screen name={RESTURANTMAP} component={ResturantMap} />
    </Auth.Navigator>
  );
};

export default AuthNav;
