import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import SearchDetailsHeader from '../../components/SearchDetailsHeader';
import {colors} from '../../global/styles';
import {TabView, TabBar} from 'react-native-tab-view';
import {ScrollView} from 'react-native-gesture-handler';
import MenuTab from '../ResturantTab/MenuTab';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const SearchResultDetails = ({route}) => {
  const {item, id} = route.params;
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'first', title: 'MENU'},
    {key: 'second', title: 'INFO'},
    {key: 'third', title: 'REVIEWS'},
    {key: 'fourth', title: 'GALLERY'},
  ]);

  const UpdateRoute = () => {
    return <View />;
  };

  const renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: 'white'}}
        style={{backgroundColor: colors.buttons}}
        activeColor={'#fff'}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <SearchDetailsHeader id={id} image={item.images} />

      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: 'green',
          fontSize: 17,
          fontWeight: '600',
        }}>
        Get {item.discount}% off on food total
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        <View>
          <Text style={{fontSize: 19, fontWeight: '800', color: colors.grey1}}>
            {item.resturantName}
          </Text>
          <Text style={{fontSize: 16, color: colors.grey2}}>
            {item.foodType}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon type="AntDesign" name="star" size={21} color={colors.grey3} />
            <Text style={{fontSize: 16, color: colors.grey2, marginRight: 5}}>
              {item.averageReview}
            </Text>
            <Icon
              type="Entypo"
              name="location-pin"
              size={21}
              color={colors.grey3}
            />
            <Text style={{fontSize: 16, color: colors.grey2}}>
              {item.farAway} m away
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginRight: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 17,
                marginBottom: 5,
                fontWeight: '600',
                color: colors.grey2,
              }}>
              Collect
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 5,
                fontWeight: '800',
                color: colors.grey2,
              }}>
              5
            </Text>
            <Text style={{fontSize: 13, marginTop: 5, color: colors.grey2}}>
              min
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{fontSize: 17, fontWeight: '600', color: colors.grey2}}>
              Delivery
            </Text>
            <View
              style={{
                backgroundColor: colors.buttons,
                padding: 10,
                borderRadius: 100,
                width: 55,
                height: 55,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: '800', color: '#fff'}}>
                15
              </Text>
              <Text style={{fontSize: 13, color: '#fff'}}>min</Text>
            </View>
          </View>
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={UpdateRoute}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        tabBarPosition="top"
        style={{marginBottom: 10, flex: 0}}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{padding: 10}}>{index === 0 && <MenuTab />}</View>
      </ScrollView>
    </View>
  );
};

export default SearchResultDetails;
