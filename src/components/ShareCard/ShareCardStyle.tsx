import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes';
import { verticalScale } from "../../themes/Metrics"

export default StyleSheet.create({
  container: {
    flexDirection:'row',
    height: verticalScale(75),
    width: Metrics.width - Metrics.moderateScale._64,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.42,
    shadowRadius: 2.42,
    elevation: 3,
    marginVertical: Metrics.moderateScale._16,
    borderRadius: Metrics.moderateScale._10,
    backgroundColor:'white',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  name: {
    flex: 1,
    fontSize: Metrics.moderateScale._20,
    fontFamily: Fonts.type.base,
  },
  image: {
    flex: 0.1,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent: 'center',
  },
  data: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    height: verticalScale(75),
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    fontSize:14,
    fontWeight:'400',
    textAlign:'center',
    color:'black',
    letterSpacing:0.4,
  },
  description: {
    fontSize:12,
    color: Colors.grayBlue,
    letterSpacing:0.32
  },
  share:{
    flex:0.2,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing:0.5
  },
  separator:{
    height: verticalScale(44),
    width:0.7,
    backgroundColor: Colors.grayBlue
  }
});
