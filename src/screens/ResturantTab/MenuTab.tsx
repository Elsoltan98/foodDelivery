import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {menuData, specialData} from '../../global/Data';
import {colors} from '../../global/styles';

const MenuTab = () => {
  return (
    <View>
      <View>
        {specialData.map(item => (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 5,
            }}>
            <Icon
              style={{marginRight: 5}}
              color="#FFD700"
              type="FontAwesome"
              name="star"
            />
            <Text style={{fontSize: 17, color: colors.grey2}} key={item.key}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
      <View style={{marginLeft: 30}}>
        {menuData.map(item => (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 5,
            }}>
            <Text style={{fontSize: 17, color: colors.grey2}} key={item.key}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MenuTab;
