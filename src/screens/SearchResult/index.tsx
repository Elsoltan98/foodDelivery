import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import FoodCard from '../../components/FoodCard';
import {resturantsData} from '../../global/Data';
import {colors} from '../../global/styles';

const SearchResult = ({route}: any) => {
  const {name} = route.params;

  return (
    <View style={{flex: 1}}>
      <Text style={styles.mainText}>
        {resturantsData.length} results for {name}
      </Text>
      <View style={{flex: 1}}>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={resturantsData}
          keyExtractor={(item): any => item.id}
          renderItem={({item}) => (
            <View>
              <FoodCard fullWidth item={item} />
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={item.productData}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                  <View style={styles.primaryContainer}>
                    <View>
                      <Text
                        style={{
                          fontSize: 17,
                          marginBottom: 40,
                          color: colors.grey1,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          color: colors.grey1,
                        }}>
                        {item.price}$
                      </Text>
                    </View>
                    <Image
                      source={{uri: item.image}}
                      width={150}
                      style={{width: 95, height: 95, borderRadius: 15}}
                    />
                  </View>
                )}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  primaryContainer: {
    width: Dimensions.get('window').width / 1.5,
    borderWidth: 1,
    borderColor: colors.grey4,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.cardBackground,
  },
});

export default SearchResult;
