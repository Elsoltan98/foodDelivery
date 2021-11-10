import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon} from 'react-native-elements';
import {withBadge} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
  title: string;
  name: string;
  type?: string;
  onPress?: () => void;
}

const HomeHeader: FC<Props> = ({title, name, onPress}) => {
  const BadgeIcon: any = withBadge(0)(Feather);
  return (
    <View style={styles.header}>
      <Icon name={name} size={25} onPress={onPress} color="white" />
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
