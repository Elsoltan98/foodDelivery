import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';

const MyStatusBar = ({backgroundColor, ...props}: any) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={colors.buttons} barStyle="dark-content" />
      <Header />
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default App;
