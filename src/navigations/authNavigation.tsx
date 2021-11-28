import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import {SIGNIN, SIGNUP, WELCOME} from '../global/RoutesName';
import Welcome from '../screens/Welcome';

import SignUp from '../screens/SignUp';

const Auth = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name={WELCOME} component={Welcome} />
      <Auth.Screen name={SIGNIN} component={SignIn} />
      <Auth.Screen name={SIGNUP} component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthNav;
