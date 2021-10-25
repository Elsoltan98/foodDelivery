import {StyleSheet} from 'react-native';
import {colors} from '../../global/styles';

export default StyleSheet.create({
  headerConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  headerText: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: '900',
    color: colors.buttons,
  },
  swiperImage: {
    width: '100%',
    height: '100%',
  },
  signText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  createText: {
    borderColor: colors.buttons,
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 15,
    color: colors.buttons,
    fontSize: 17,
    width: '100%',
    textAlign: 'center',
  },
});
