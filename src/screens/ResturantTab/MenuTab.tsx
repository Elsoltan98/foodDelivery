import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {menuData, specialData} from '../../global/Data';
import {colors} from '../../global/styles';

const MenuTab = ({onPress}: any) => {
  return (
    <View>
      <View>
        {specialData.map(item => (
          <TouchableOpacity
            onPress={onPress}
            key={item.key}
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
            <Text style={{fontSize: 17, color: colors.grey2}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{marginLeft: 30}}>
        {menuData.map(item => (
          <TouchableOpacity
            onPress={onPress}
            key={item.key}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 5,
            }}>
            <Text style={{fontSize: 17, color: colors.grey2}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MenuTab;
