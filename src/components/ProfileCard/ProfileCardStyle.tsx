import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes';
import { verticalScale } from "../../themes/Metrics"

export default StyleSheet.create({
  container: {
    flexDirection:'row',
    height: verticalScale(50),
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
    justifyContent:'flex-start',
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
    flex: 0.4,
    height: verticalScale(50),
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.moderateScale._10
  }
});
