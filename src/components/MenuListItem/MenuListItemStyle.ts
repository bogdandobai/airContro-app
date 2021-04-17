import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.height / 4.5,
    width: Metrics.height / 5.5,
    backgroundColor: Colors.white,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.42,
    shadowRadius: 2.42,
    elevation: 3,
    borderRadius: Metrics.moderateScale._10,
    marginHorizontal: Metrics.moderateScale._10,
    justifyContent: 'center',
    alignItems:'center'
  },
});
