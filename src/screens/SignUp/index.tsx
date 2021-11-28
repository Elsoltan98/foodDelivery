import {Formik} from 'formik';
import React, {useRef} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {SocialIcon} from 'react-native-elements/dist/social/SocialIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {WELCOME} from '../../global/RoutesName';
import {colors, parameters} from '../../global/styles';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const signIn = async (email, password) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    if (user) {
      console.log('User-signed in', user);
    }
  } catch (error) {
    Alert.alert(error.name, error.message);
  }
};

const initialValues = {
  phoneNumber: '',
  name: '',
  familyName: '',
  email: '',
  password: '',
};

const SignUp = ({navigation}: any) => {
  const [show, setShow] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const textInput3 = useRef(3);
  const textInput4 = useRef(4);
  const textInput5 = useRef(5);
  return (
    <ScrollView>
      <Header type={WELCOME} title="Sign up" name="arrowleft" />
      <Text style={styles.mainText}>Sign Up</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {props => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Mobile number"
                ref={textInput3}
                onChangeText={props.handleChange('phoneNumber')}
                value={props.values.phoneNumber}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter name"
                ref={textInput4}
                onChangeText={props.handleChange('name')}
                value={props.values.name}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Family name"
                ref={textInput5}
                onChangeText={props.handleChange('familyName')}
                value={props.values.familyName}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Email"
                ref={textInput1}
                onChangeText={props.handleChange('email')}
                value={props.values.email}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="lock-closed"
                  size={21}
                  style={{paddingRight: 10}}
                  color={colors.grey2}
                />
                <TextInput
                  style={{width: '85%'}}
                  placeholder="Enter Password"
                  ref={textInput2}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  secureTextEntry={show}
                />
              </View>
              <Icon
                name={show ? 'eye' : 'eye-off'}
                size={21}
                color={colors.grey2}
                onPress={() => setShow(!show)}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: 50,
              }}>
              <Text style={{textAlign: 'center', fontSize: 14, lineHeight: 22}}>
                By creating or logging into an account you are agreeing with our{' '}
                <Text style={{color: 'green'}}>Terms & Conditions </Text>and
                <Text style={{color: 'green'}}> Privacy Statement</Text>
              </Text>
            </View>

            <TouchableOpacity
              onPress={props.handleSubmit}
              style={parameters.signBtn}>
              <Text style={styles.signText}>Create my account</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <View style={styles.forgetContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <View>
        <Text style={styles.new}>
          Already have an account with XpressFood ?
        </Text>
      </View>
      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createText}>Sign in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;
