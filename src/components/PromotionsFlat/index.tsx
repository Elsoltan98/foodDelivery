import React from 'react';
import {View, FlatList} from 'react-native';
import {resturantsData} from '../../global/Data';
import FoodCard from '../FoodCard';

const PromotionsFlat = () => {
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

export default PromotionsFlat;
