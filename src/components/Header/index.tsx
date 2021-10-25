import React from 'react';
import {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors, parameters} from '../../global/styles';

interface Props {
  title: string;
  name: string;
}

const Header: FC<Props> = ({title, name}) => {
  return (
    <View style={styles.header}>
      <Icon name={name} size={25} onPress={() => {}} color="white" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginLeft: 15,
    color: '#fff',
    fontWeight: '700',
  },
});

export default Header;
