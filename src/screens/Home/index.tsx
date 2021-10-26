import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import {SIGNIN} from '../../global/RoutesName';

const Home = () => {
  return (
    <View>
      <HomeHeader title="Xpress Food" name="arrowleft" type={SIGNIN} />
      <Text>Welcome to Home screen</Text>
    </View>
  );
};

export default Home;
