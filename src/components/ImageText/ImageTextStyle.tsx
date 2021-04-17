import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  text: {
    fontSize: Metrics.moderateScale._20,
    color: Colors.black,
    marginHorizontal: Metrics.moderateScale._10
  }
});
