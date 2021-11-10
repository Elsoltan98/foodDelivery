import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {colors} from '../global/styles';

const DrawerContent = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png',
              }}
              size={75}
            />
            <View style={styles.infoTxt}>
              <Text style={{color: 'white', fontSize: 17, marginBottom: 5}}>
                Soltan Mohamed
              </Text>
              <Text style={{color: 'white', fontSize: 15}}>
                Ben10a2992@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 10,
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 5}}>
                1
              </Text>
              <Text style={{color: 'white', fontSize: 15}}>My Favorite</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 15, marginBottom: 5}}>
                0
              </Text>
              <Text style={{color: 'white', fontSize: 15}}>MyCart</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <View>
          <DrawerItem
            label="Payment"
            icon={({color, size}) => (
              <Icon
                name="payment"
                type="MaterialIcons"
                size={size}
                color={color}
              />
            )}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  infoTxt: {
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default DrawerContent;
