import { StyleSheet } from 'react-native';
import { Metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modal:{
    height: Metrics.height/2,
    width: Metrics.width,
    borderTopLeftRadius:10, borderTopRightRadius:10
  },
  animationContainer:{
    zIndex: 200,
    backgroundColor: "white",
    borderRadius: Metrics.moderateScale._24,
    position: "absolute",
    bottom: Metrics.moderateScale._24,
    right: Metrics.moderateScale._24,
    width: Metrics.moderateScale._48,
    height: Metrics.moderateScale._48,
  },
  backButton:{
    position: "absolute",
    top: Metrics.moderateScale._32,
    left: Metrics.moderateScale._14,
    width: Metrics.moderateScale._48,
    height: Metrics.moderateScale._48,
  }
});
