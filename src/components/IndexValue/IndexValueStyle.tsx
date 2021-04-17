import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    width: Metrics.moderateScale._64,
    height: Metrics.moderateScale._24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.moderateScale._12
  },
  text: {
    fontFamily: Fonts.type.base,
    fontWeight:'bold',
    color:'white',
  }
});
