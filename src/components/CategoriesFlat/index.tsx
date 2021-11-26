import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {filterData} from '../../global/Data';
import {colors} from '../../global/styles';

const CategoriesFlat = () => {
  const [selected, setSelected] = useState(1);
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={filterData}
      keyExtractor={(item): any => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => setSelected(item.id)}
          style={[
            styles.imageContainer,
            {
              backgroundColor:
                selected === item.id ? colors.buttons : colors.grey5,
            },
          ]}>
          <View style={styles.imageBack}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text
            style={[
              styles.nameText,
              {color: selected === item.id ? '#fff' : colors.grey1},
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  imageBack: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  nameText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default CategoriesFlat;
