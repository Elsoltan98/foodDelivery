import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import {
  DRAWERNAVIGATOR,
  RESTURANTMAP,
  SIGNIN,
  SIGNUP,
  WELCOME,
} from '../global/RoutesName';
import Welcome from '../screens/Welcome';
//import Home from '../screens/Home';
import ResturantMap from '../screens/ResturantMap';
import DrawerNavigator from './DrawerNavigator';
import SignUp from '../screens/SignUp';

const Auth = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name={WELCOME} component={Welcome} />
      <Auth.Screen name={SIGNIN} component={SignIn} />
      <Auth.Screen name={SIGNUP} component={SignUp} />
      <Auth.Screen name={DRAWERNAVIGATOR} component={DrawerNavigator} />
      <Auth.Screen name={RESTURANTMAP} component={ResturantMap} />
    </Auth.Navigator>
  );
};

export default AuthNav;
