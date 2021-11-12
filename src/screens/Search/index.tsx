import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {colors} from '../../global/styles';

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.searchContainer}>
          <Icon type="Feather" name="search" size={25} color={colors.grey1} />
          <Text
            style={{
              fontWeight: '500',
              fontSize: 17,
              marginLeft: 10,
              color: colors.grey1,
            }}>
            What are you looking for ?
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="fade" transparent={false}>
        <View>
          <Text>Modal</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.grey4,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.grey5,
  },
});

export default Search;
