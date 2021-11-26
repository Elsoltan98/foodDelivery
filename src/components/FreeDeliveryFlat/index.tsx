import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {resturantsData} from '../../global/Data';
import FoodCard from '../FoodCard';

const FreeDelivery = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={resturantsData}
      keyExtractor={(item): any => item.id}
      renderItem={({item}) => (
        <View>
          <FoodCard item={item} />
        </View>
      )}
    />
  );
};

export default FreeDelivery;
