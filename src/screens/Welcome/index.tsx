import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, parameters} from '../../global/styles';
import styles from './styles';

const Welcome = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerConatiner}>
        <Text style={styles.headerText}>DISCOVER RESTURANTS</Text>
        <Text style={styles.headerText}>IN YOUR AREA</Text>
      </View>
      <View style={{flex: 5}}>
        <Swiper autoplay={true} showsPagination={false}>
          <View>
            <Image
              source={require('./../../../assets/images/swipe1.jpg')}
              width={150}
              height={150}
              style={styles.swiperImage}
            />
          </View>
          <View>
            <Image
              source={require('./../../../assets/images/swipe2.jpg')}
              width={150}
              height={150}
              style={styles.swiperImage}
            />
          </View>
          <View>
            <Image
              source={require('./../../../assets/images/swipe3.jpg')}
              width={150}
              height={150}
              style={styles.swiperImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 3, justifyContent: 'flex-end', marginVertical: 40}}>
        <TouchableOpacity style={parameters.signBtn}>
          <Text style={styles.signText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', flex: 1, marginHorizontal: 20}}>
          <Text style={styles.createText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
