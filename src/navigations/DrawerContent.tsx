import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {Icon} from 'react-native-elements';

import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {colors} from '../global/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const DrawerContent = (props: any) => {
  const [dark, setDark] = useState(false);
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
        <DrawerItem
          label="Driver Console"
          icon={({color, size}) => (
            <Icon
              name="delivery-dining"
              type="MaterialIcons"
              size={size}
              color={color}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <AntDesign name="tags" size={size} color={color} />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Feather name="help-circle" size={size} color={color} />
          )}
        />
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 17, color: colors.grey1, fontWeight: '600'}}>
            Preference
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{fontSize: 16, fontWeight: '600', color: colors.grey2}}>
              Dark Theme
            </Text>
            <Switch
              trackColor={{false: '#767577', true: colors.buttons}}
              thumbColor="white"
              value={dark}
              onValueChange={() => setDark(!dark)}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        style={{marginBottom: Platform.OS === 'ios' ? 30 : 15, marginLeft: 20}}
        label="Sign out"
        icon={({color, size}) => (
          <Feather name="log-out" size={size} color={color} />
        )}
      />
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
