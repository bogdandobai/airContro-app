import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    width: Metrics.moderateScale._132,
    height: Metrics.moderateScale._32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.moderateScale._16
  },
  text: {
    fontFamily: Fonts.type.base,
    fontWeight:'bold',
    color:'white',
    fontSize:17,
  },
  round: {
    width: Metrics.moderateScale._48,
    height: Metrics.moderateScale._48,
    borderRadius: Metrics.moderateScale._24,
    justifyContent: 'center',
    alignItems:'center'
  },
  absoluteContainer: {
    justifyContent: 'center',
    alignItems:'center'
  }
});
