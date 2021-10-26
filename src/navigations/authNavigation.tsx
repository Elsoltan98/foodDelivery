import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import {HOME, SIGNIN, WELCOME} from '../global/RoutesName';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const Auth = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name={WELCOME} component={Welcome} />
      <Auth.Screen name={SIGNIN} component={SignIn} />
      <Auth.Screen name={HOME} component={Home} />
    </Auth.Navigator>
  );
};

export default AuthNav;
