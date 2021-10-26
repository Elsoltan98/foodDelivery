import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../../global/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import {withBadge} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
  title: string;
  name: string;
  type: string;
}

const HomeHeader: FC<Props> = ({title, name, type}) => {
  const {navigate}: any = useNavigation();
  const BadgeIcon: any = withBadge(5)(Feather);
  return (
    <View style={styles.header}>
      <Icon
        name={name}
        size={25}
        onPress={() => navigate(type)}
        color="white"
      />
      <Text style={styles.title}>{title}</Text>
      <View>
        <BadgeIcon
          name="shopping-cart"
          size={25}
          color={colors.cardBackground}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default HomeHeader;
