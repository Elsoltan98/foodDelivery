import React from 'react';
import {View, Text} from 'react-native';

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
}

const FoodCard = ({item}) => {
  return (
    <View>
      <Text>Food FoodCard</Text>
    </View>
  );
};

export default FoodCard;
