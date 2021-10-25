import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {colors} from '../../global/styles';
import styles from './styles';

const SignIn = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Header title="My Account" name="arrowleft" />
      <Text style={styles.mainText}>Sign in</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please enter email and password</Text>
        <Text style={styles.text}>Registered with your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Email" />
      </View>
      <View style={styles.inputContainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="lock-closed"
            size={21}
            style={{paddingRight: 10}}
            color={colors.grey2}
          />
          <TextInput style={{width: '85%'}} placeholder="Enter Password" />
        </View>
        <Icon
          name={show ? 'eye' : 'eye-off'}
          size={21}
          color={colors.grey2}
          onPress={() => setShow(!show)}
        />
      </View>
    </View>
  );
};

export default SignIn;
