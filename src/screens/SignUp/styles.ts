import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../global/styles';

export default StyleSheet.create({
  mainText: {
    fontSize: 25,
    color: colors.buttons,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: colors.grey3,
    paddingBottom: 5,
  },
  inputContainer: {
    borderColor: colors.grey4,
    borderWidth: 1,
    marginHorizontal: 20,
    paddingVertical: Platform.OS === 'android' ? 0 : 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  signText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  forgetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetText: {
    color: colors.grey2,
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  orText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.grey1,
  },
  socialBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 15,
    marginVertical: 20,
  },
  new: {
    marginVertical: 20,
    marginHorizontal: 25,
    color: colors.grey2,
    fontSize: 17,
  },
  createBtn: {
    alignItems: 'flex-end',
  },
  createText: {
    borderColor: colors.buttons,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 20,
    borderRadius: 15,
    color: colors.buttons,
    fontSize: 17,
    marginBottom: 40,
  },
});
