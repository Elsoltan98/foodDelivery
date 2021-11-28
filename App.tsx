import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {SignInContextProvider} from './src/Context/Context';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigations/RootNavigator';

const MyStatusBar = ({backgroundColor, ...props}: any) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const App = () => {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <MyStatusBar
          backgroundColor={colors.statusBar}
          barStyle="dark-content"
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
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
