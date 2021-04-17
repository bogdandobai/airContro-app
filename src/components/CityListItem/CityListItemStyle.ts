import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    height: Metrics.moderateScale._100,
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
    backgroundColor:'white'
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
  },
  title: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.moderateScale._10
  }
});
