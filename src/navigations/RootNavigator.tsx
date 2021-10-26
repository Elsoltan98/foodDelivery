import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './authNavigation';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};

export default RootNavigator;
