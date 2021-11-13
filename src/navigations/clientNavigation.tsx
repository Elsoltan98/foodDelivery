import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ACCOUNT, HOME, MYORDERS, SEARCHNAV} from '../global/RoutesName';
import Home from '../screens/Home';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import MyOrders from '../screens/MyOrders';
import Account from '../screens/Account';
import SearchNavigation from './searchNavigation';

const Tab = createBottomTabNavigator();

const clientNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.buttons,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="Entypo" size={size} color={color} />
          ),
        }}
        name={HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.buttons,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="Fontisto" size={size} color={color} />
          ),
          title: 'Search',
        }}
        name={SEARCHNAV}
        component={SearchNavigation}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.buttons,
          tabBarIcon: ({color, size}) => (
            <Icon name="reorder" type="Ionicons" size={size} color={color} />
          ),
        }}
        name={MYORDERS}
        component={MyOrders}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: colors.buttons,
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="Ionicons" size={size} color={color} />
          ),
        }}
        name={ACCOUNT}
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default clientNavigation;
