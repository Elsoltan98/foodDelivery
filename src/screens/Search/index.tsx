import React from 'react';
import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import {FlatList, TextInput, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {filterData, filterData2} from '../../global/Data';
import {SEARCHRESULT} from '../../global/RoutesName';
import {useNavigation} from '@react-navigation/core';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

const Screen_width = Dimensions.get('window').width;

const Search = () => {
  const {navigate}: any = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchFocused, setSearchFocused] = useState(true);
  const textInput: any = useRef(0);

  const contains = ({name}: {name: any}, query: any) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (text: any) => {
    const dataSearch = filterData.filter((userSearch: {name: any}) => {
      return contains(userSearch, text);
    });

    setData([...dataSearch]);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
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
      <Modal
        style={{flex: 1}}
        visible={modalVisible}
        animationType="fade"
        transparent={false}>
        <View
          style={[
            styles.textInputContainer,
            {paddingHorizontal: searchFocused ? 20 : 10},
          ]}>
          <Animatable.View
            animation={searchFocused ? 'fadeInRight' : 'fadeInLeft'}
            duration={200}>
            <View>
              <Feather
                onPress={() => {
                  if (searchFocused) {
                    setModalVisible(false);
                    setSearchFocused(false);
                  }
                }}
                name={searchFocused ? 'arrow-left' : 'search'}
                size={21}
                color={colors.grey2}
              />
            </View>
          </Animatable.View>
          <TextInput
            style={{width: '90%', marginLeft: 10}}
            placeholder=""
            ref={textInput}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            autoFocus={false}
            onChangeText={handleSearch}
          />

          {searchFocused && (
            <Animatable.View>
              <Icon
                type="MaterialIcons"
                name="cancel"
                size={21}
                color={colors.grey1}
                onPress={() => {
                  textInput.current.clear();
                }}
              />
            </Animatable.View>
          )}
        </View>
        <FlatList
          keyExtractor={(item: any) => item.id}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss;
                navigate(SEARCHRESULT, {name: item.name});
                setModalVisible(false);
                setSearchFocused(false);
              }}>
              <Text
                style={{marginBottom: 15, fontSize: 18, color: colors.grey1}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          style={{marginLeft: 25, marginTop: 15}}
        />
      </Modal>

      {/* Categories */}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <FlatList
          data={filterData2}
          key={(item: any) => item.id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => navigate(SEARCHRESULT, {name: item.name})}>
              <View style={{margin: 5}}>
                <ImageBackground
                  style={{
                    width: ScreenWidth / 2.2,
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  width={150}
                  height={150}
                  source={{uri: item.image}}>
                  <View
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      width: '100%',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.cardBackground,
                        fontSize: 17,
                        fontWeight: '600',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          numColumns={2}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <Text
              style={{
                fontWeight: '700',
                fontSize: 17,
                color: colors.grey1,
                marginBottom: 5,
              }}>
              Top Categories
            </Text>
          }
          ListFooterComponent={
            <Text
              style={{
                fontWeight: '700',
                fontSize: 17,
                color: colors.grey1,
                marginVertical: 5,
              }}>
              More Categories
            </Text>
          }
        />
      </View>
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
  textInputContainer: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: colors.grey4,
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.grey5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
