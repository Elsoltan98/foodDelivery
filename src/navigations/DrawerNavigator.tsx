import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BUSINESS, CLIENTNAV} from '../global/RoutesName';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import clientNavigation from './clientNavigation';
import DrawerContent from './DrawerContent';
import Business from '../screens/Business';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false, drawerType: 'front'}}>
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
      <Drawer.Screen
        options={{
          title: 'Business Console',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="business"
              type="MaterialIcons"
              size={size}
              color={focused ? '#7cc' : colors.grey1}
            />
          ),
        }}
        name={BUSINESS}
        component={Business}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
