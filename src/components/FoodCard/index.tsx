import React from 'react';
import {FC} from 'react';
import {Dimensions} from 'react-native';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../../global/styles';

interface Props {
  item: {
    resturantName: string;
    farAway: string;
    businessAddress: string;
    images: string;
    averageReview: number;
    numberOfReview: number;
    coordinates: {lat: number; lng: number};
    discount: number;
    deliveryTime: number;
    collectTime: number;
    foodType: string;
    productData: [
      {
        name: string;
        price: number;
        image: string;
      },
      {
        name: string;
        price: number;
        image: string;
      },
      {
        name: string;
        price: number;
        image: string;
      },
    ];
    id: number;
  };
  fullWidth?: boolean;
}

const ScreenWidth = Dimensions.get('screen').width;

const FoodCard: FC<Props> = ({item, fullWidth}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{uri: item.images}}
        width={150}
        height={150}
        style={[styles.images, {width: fullWidth ? '100%' : ScreenWidth * 0.8}]}
      />
      <Text style={{margin: 10, fontSize: 18, color: colors.grey1}}>
        {item.resturantName}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <Icon
          name="location-on"
          type="MaterialIcons"
          size={18}
          color={colors.grey2}
        />
        <Text>{item.farAway}M</Text>
        <Text>|</Text>
        <Text>{item.businessAddress}</Text>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: '900'}}>
          {item.averageReview}
        </Text>
        <Text style={{fontSize: 17, color: 'white'}}>
          {item.numberOfReview} reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderColor: colors.grey4,
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
  },
  images: {
    height: 200,
    borderRadius: 15,
  },
  reviewContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    right: 5,
    top: 5,
    borderRadius: 15,
    padding: 10,
    width: 150,
    alignItems: 'center',
  },
});

export default FoodCard;
