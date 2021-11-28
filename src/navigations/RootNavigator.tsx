import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './authNavigation';
import {SignInContext} from '../Context/Context';
import AppNavigation from './appNavigation';

const RootNavigator = () => {
  const {SignedIn, dispatchSignedIn} = useContext(SignInContext);

  return (
    <NavigationContainer>
      {SignedIn.userToken === null ? <AuthNav /> : <AppNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigator;
