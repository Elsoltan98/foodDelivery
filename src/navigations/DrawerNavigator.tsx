import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootNavigator from './RootNavigator';
import {CLIENTNAV, HOME, ROOTNAVIGATOR} from '../global/RoutesName';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import Home from '../screens/Home';
import clientNavigation from './clientNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false, drawerType: 'front'}}>
      <Drawer.Screen
        options={{
          title: 'Client',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="Entypo"
              size={size}
              color={focused ? '#7cc' : colors.grey1}
            />
          ),
        }}
        name={CLIENTNAV}
        component={clientNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
