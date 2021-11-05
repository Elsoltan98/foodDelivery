import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyOrders = () => {
  return (
    <View style={styles.container}>
      <Text>My Orders screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyOrders;
