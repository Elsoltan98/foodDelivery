import {Formik} from 'formik';
import React, {useRef} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SocialIcon} from 'react-native-elements/dist/social/SocialIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {DRAWERNAVIGATOR, WELCOME} from '../../global/RoutesName';
import {colors, parameters} from '../../global/styles';
import styles from './styles';

const SignIn = ({navigation}: any) => {
  const [show, setShow] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <ScrollView>
      <Header type={WELCOME} title="My Account" name="arrowleft" />
      <Text style={styles.mainText}>Sign in</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please enter email and password</Text>
        <Text style={styles.text}>Registered with your account</Text>
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {props => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Email"
                ref={textInput1}
                onChangeText={props.handleChange('username')}
                value={props.values.username}
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
                />
              </View>
              <Icon
                name={show ? 'eye' : 'eye-off'}
                size={21}
                color={colors.grey2}
                onPress={() => setShow(!show)}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate(DRAWERNAVIGATOR)}
              style={parameters.signBtn}>
              <Text style={styles.signText}>Sign in</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <View style={styles.forgetContainer}>
        <TouchableOpacity>
          <Text style={styles.forgetText}>Forget password ?</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
      </View>

      <View>
        <SocialIcon
          button
          type="facebook"
          title="Sign in with facebook"
          style={styles.socialBtn}
        />
        <SocialIcon
          button
          type="google"
          title="Sign in with google"
          style={styles.socialBtn}
        />
      </View>

      <View>
        <Text style={styles.new}>New in XpressFood ?</Text>
      </View>
      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createText}>Create an account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignIn;
