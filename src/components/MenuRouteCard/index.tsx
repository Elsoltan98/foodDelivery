import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import {resturantsData} from '../../global/Data';

const MenuRouteCard = () => {
  return (
    <View>
      {resturantsData.map(resturant => (
        <View key={resturant.id}>
          {resturant.productData.map(prod => (
            <View style={styles.container} key={prod.id}>
              <View>
                <Text style={styles.name}>{prod.name}</Text>
                <Text style={styles.desc}>{prod.desc}</Text>
                <Text style={styles.price}>{prod.price} $</Text>
              </View>
              <View>
                <Image source={{uri: prod.image}} style={styles.image} />
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.grey5,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.grey1,
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    color: colors.grey3,
    marginBottom: 5,
    width: 275,
  },
  price: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.grey1,
    marginBottom: 5,
  },
  image: {width: 100, height: 100, borderRadius: 10},
});

export default MenuRouteCard;
