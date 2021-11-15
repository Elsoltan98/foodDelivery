import React, {FC, useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import {colors} from '../../global/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import Animated from 'react-native-reanimated';

interface Props {
  id: number;
  image: string;
}

const SearchDetailsHeader: FC<Props> = ({id, image}) => {
  const {goBack}: any = useNavigation();
  const [like, setLike] = useState(false);

  return (
    <View>
      <ImageBackground source={{uri: image}} style={{height: 175}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 10,
              marginLeft: 10,
            }}>
            <AntDesign
              name="arrowleft"
              size={25}
              color={colors.grey1}
              onPress={() => goBack()}
            />
          </View>
          <Animated.View
            style={{
              backgroundColor: '#fff',
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 10,
              marginRight: 10,
            }}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              size={25}
              color={like ? 'red' : colors.grey1}
              onPress={() => {
                setLike(!like);
              }}
            />
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SearchDetailsHeader;
