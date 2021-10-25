import {StyleSheet} from 'react-native';
import {colors} from '../../global/styles';

export default StyleSheet.create({
  mainText: {
    fontSize: 25,
    color: colors.buttons,
    marginTop: 10,
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
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
