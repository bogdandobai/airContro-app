import { StyleSheet } from 'react-native';
import { Metrics } from '../../themes';

export default StyleSheet.create({
  button: {
    padding: Metrics.moderateScale._7,
    marginBottom: Metrics.moderateScale._15,
    marginHorizontal: Metrics.moderateScale._20,
     zIndex:1,
     flex:1,
  },
  animatedButton:{
    marginHorizontal: Metrics.moderateScale._5,
    marginTop: Metrics.moderateScale._10,
    marginBottom: Metrics.moderateScale._15,
    width: Metrics.moderateScale._32,
    height: Metrics.moderateScale._32,
    borderRadius: Metrics.moderateScale._16,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:10,
    top:0,
  },
  image:{
    width: Metrics.moderateScale._24,
    height: Metrics.moderateScale._24,
  }
})