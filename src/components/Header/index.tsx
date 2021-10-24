import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, parameters} from '../../global/styles';

const Header = () => {
  return <View style={styles.header} />;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    flexDirection: 'row',
  },
});

export default Header;
