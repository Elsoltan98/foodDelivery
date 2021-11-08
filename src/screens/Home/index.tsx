import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import {RESTURANTMAP, SIGNIN} from '../../global/RoutesName';
import {colors} from '../../global/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {filterData, resturantsData} from '../../global/Data';
import FoodCard from '../../components/FoodCard';
import CountDown from 'react-native-countdown-component';
import {Icon} from 'react-native-elements';

const Home = ({navigation}: any) => {
  const [delivery, setDelivery] = useState(true);
  const [selected, setSelected] = useState(1);
  return (
    <View style={styles.container}>
      <HomeHeader
        title="Xpress Food"
        name="menu"
        onPress={() => navigation.toggleDrawer()}
      />
      <ScrollView>
        {/* Top Buttons */}
        <View style={styles.topButtonsContainer}>
          <TouchableOpacity onPress={() => setDelivery(true)}>
            <View
              style={[
                styles.topButton,
                {
                  backgroundColor: delivery ? colors.buttons : colors.grey4,
                },
              ]}>
              <Text>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDelivery(false)}>
            <View
              style={[
                styles.topButton,
                {
                  backgroundColor: delivery ? colors.grey4 : colors.buttons,
                },
              ]}>
              <Text>Pick up</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Address container */}
        <View style={styles.addressContainer}>
          <View style={styles.address}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="location-on"
                color={colors.grey1}
                size={21}
              />
              <Text style={{paddingLeft: 5}}>22 address</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.grey5,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 15,
              }}>
              <MaterialCommunityIcons
                name="clock"
                color={colors.grey1}
                size={21}
              />
              <Text style={{paddingLeft: 5}}>Now</Text>
            </View>
          </View>
          <MaterialIcons name="tune" size={28} color={colors.grey1} />
        </View>

        {/* Categories */}
        <View>
          <View
            style={{
              backgroundColor: colors.grey4,
              padding: 10,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{color: colors.grey1, fontSize: 17, fontWeight: 'bold'}}>
              Categories
            </Text>
          </View>

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
        </View>
        {/* Food delivery now */}
        <View
          style={{
            backgroundColor: colors.grey4,
            padding: 10,
            paddingHorizontal: 20,
            marginBottom: 10,
          }}>
          <Text style={{color: colors.grey1, fontSize: 17, fontWeight: 'bold'}}>
            Free delivery now
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginHorizontal: 10,
              marginTop: 15,
              fontSize: 18,
              color: colors.grey1,
            }}>
            Options changing in :
          </Text>
          <CountDown
            until={3600}
            size={17}
            digitStyle={{backgroundColor: colors.lightGreen}}
            digitTxtStyle={{color: colors.cardBackground}}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'Min', s: 'Sec'}}
          />
        </View>

        <View>
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
        </View>

        {/* Promotions available */}
        <View
          style={{
            backgroundColor: colors.grey4,
            padding: 10,
            paddingHorizontal: 20,
          }}>
          <Text style={{color: colors.grey1, fontSize: 17, fontWeight: 'bold'}}>
            Promotions available
          </Text>
        </View>

        <View>
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
        </View>
        {/* Resturants in your area */}
        <View
          style={{
            backgroundColor: colors.grey4,
            padding: 10,
            paddingHorizontal: 20,
          }}>
          <Text style={{color: colors.grey1, fontSize: 17, fontWeight: 'bold'}}>
            Resturants in your area
          </Text>
        </View>

        <View style={{marginBottom: 50}}>
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
        </View>
      </ScrollView>

      {/* Float button */}

      {delivery && (
        <View style={styles.floatBtn}>
          <TouchableOpacity onPress={() => navigation.navigate(RESTURANTMAP)}>
            <Icon
              type="MaterialIcons"
              name="location-pin"
              size={21}
              color={colors.buttons}
            />
            <Text>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  topButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  address: {
    backgroundColor: colors.grey4,
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    marginRight: 20,
    borderRadius: 25,
  },
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
  floatBtn: {
    width: 70,
    height: 70,
    backgroundColor: colors.cardBackground,
    position: 'absolute',
    bottom: 80,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: colors.grey5,
    borderWidth: 1,
  },
});

export default Home;
