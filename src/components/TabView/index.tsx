import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TabView, TabBar} from 'react-native-tab-view';
import {colors} from '../../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const CustomTabView = ({
  routes,
  index,
  setIndex,
  scrollEnabled,
  renderScene,
}: any) => {
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
        scrollEnabled={scrollEnabled ? true : false}
      />
    );
  };
  return (
    <View>
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene ? renderScene : UpdateRoute}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        tabBarPosition="top"
        style={{marginVertical: 10, flex: 0}}
      />
    </View>
  );
};

export default CustomTabView;
