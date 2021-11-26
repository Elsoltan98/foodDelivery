import React from 'react';
import {View, FlatList} from 'react-native';
import {resturantsData} from '../../global/Data';
import FoodCard from '../FoodCard';

const ResAreaFlat = () => {
  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      data={resturantsData}
      keyExtractor={(item): any => item.id}
      renderItem={({item}) => (
        <View>
          <FoodCard fullWidth item={item} />
        </View>
      )}
    />
  );
};

export default ResAreaFlat;
