import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../global/styles';
import MenuRouteCard from '../MenuRouteCard';

export const FirstRoute = () => (
  <ScrollView style={{flex: 1, marginBottom: 10}}>
    <MenuRouteCard />
  </ScrollView>
);
export const SecRoute = () => (
  <ScrollView
    style={{flex: 1, marginBottom: 10, backgroundColor: colors.grey5}}>
    <MenuRouteCard />
  </ScrollView>
);
export const ThirdRoute = () => (
  <ScrollView
    style={{flex: 1, marginBottom: 10, backgroundColor: colors.grey4}}>
    <MenuRouteCard />
  </ScrollView>
);
export const FourRoute = () => (
  <ScrollView style={{flex: 1, marginBottom: 10}}>
    <MenuRouteCard />
  </ScrollView>
);
export const FiveRoute = () => (
  <ScrollView style={{flex: 1, marginBottom: 10}}>
    <MenuRouteCard />
  </ScrollView>
);
export const SixRoute = () => (
  <ScrollView style={{flex: 1, marginBottom: 10}}>
    <MenuRouteCard />
  </ScrollView>
);
export const SevenRoute = () => (
  <View style={{flex: 1}}>
    <Text>Seven Route</Text>
  </View>
);
export const EightRoute = () => (
  <View style={{flex: 1}}>
    <Text>Eight Route</Text>
  </View>
);
export const NineRoute = () => (
  <View style={{flex: 1}}>
    <Text>Nine Route</Text>
  </View>
);
export const TenRoute = () => (
  <View style={{flex: 1}}>
    <Text>Ten Route</Text>
  </View>
);
export const ElevenRoute = () => (
  <View style={{flex: 1}}>
    <Text>Eleven Route</Text>
  </View>
);
