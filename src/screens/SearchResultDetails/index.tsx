import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import SearchDetailsHeader from '../../components/SearchDetailsHeader';
import {colors} from '../../global/styles';

import {ScrollView} from 'react-native-gesture-handler';
import MenuTab from '../ResturantTab/MenuTab';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {menuData} from '../../global/Data';
import CustomTabView from '../../components/TabView';

import {
  FirstRoute,
  SecRoute,
  TenRoute,
  ThirdRoute,
  FiveRoute,
  FourRoute,
  SevenRoute,
  SixRoute,
  EightRoute,
  ElevenRoute,
  NineRoute,
} from './../../components/MenuRoute';

const SearchResultDetails = ({route}: any) => {
  const {item, id} = route.params;

  const [modalVisibile, setModalVisible] = useState(false);

  const [index, setIndex] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);

  const [routes] = useState([
    {key: 'first', title: 'MENU'},
    {key: 'second', title: 'INFO'},
    {key: 'third', title: 'REVIEWS'},
    {key: 'fourth', title: 'GALLERY'},
  ]);
  const [routes2] = useState(menuData);

  const renderScene = (inx: number) => {
    switch (inx) {
      case 0:
        return <FirstRoute />;
      case 1:
        return <SecRoute />;
      case 2:
        return <ThirdRoute />;
      case 3:
        return <FourRoute />;
      case 4:
        return <FiveRoute />;
      case 5:
        return <SixRoute />;
      case 6:
        return <SevenRoute />;
      case 7:
        return <EightRoute />;
      case 8:
        return <NineRoute />;
      case 9:
        return <TenRoute />;
      case 10:
        return <ElevenRoute />;
      default:
        return null;
    }
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
      <CustomTabView routes={routes} index={index} setIndex={setIndex} />

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{padding: 10}}>
          {index === 0 && <MenuTab onPress={() => setModalVisible(true)} />}
          {index === 1 && <MenuTab onPress={() => setModalVisible(true)} />}
          {index === 2 && <MenuTab onPress={() => setModalVisible(true)} />}
          {index === 3 && <MenuTab onPress={() => setModalVisible(true)} />}
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.buttons,
          padding: 10,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 17, fontWeight: '600'}}>
          View Cart
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.grey5,
            padding: 5,
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 17}}>
            0
          </Text>
        </View>
      </View>
      <Modal style={{flex: 1}} visible={modalVisibile} animationType="slide">
        <View
          style={{
            marginTop: 50,
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AntDesign
            name="arrowleft"
            size={25}
            onPress={() => setModalVisible(false)}
            style={{marginRight: 15}}
          />
          <Text style={{fontSize: 22, fontWeight: '600'}}>Menu</Text>
        </View>
        <CustomTabView
          scrollEnabled
          routes={routes2}
          index={index2}
          setIndex={setIndex2}
        />
        {renderScene(index2)}
        <View
          style={{
            backgroundColor: colors.buttons,
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 17,
              fontWeight: '600',
              marginLeft: 10,
              marginBottom: 10,
            }}>
            View Cart
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.grey5,
              padding: 5,
              borderRadius: 10,
              marginRight: 10,
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 17}}>
              0
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchResultDetails;
