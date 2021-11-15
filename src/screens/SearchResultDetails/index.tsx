import React from 'react';
import {View, Text} from 'react-native';
import SearchDetailsHeader from '../../components/SearchDetailsHeader';

const SearchResultDetails = ({route}) => {
  const {item, id} = route.params;
  console.log(route.params);
  return (
    <View>
      <SearchDetailsHeader id={id} image={item.images} />
    </View>
  );
};

export default SearchResultDetails;
