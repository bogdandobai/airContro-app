import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    height: Metrics.moderateScale._10,
    backgroundColor: Colors.gray,
    marginHorizontal: Metrics.moderateScale._10,
    borderRadius:Metrics.moderateScale._5
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius:Metrics.moderateScale._5

  },
});
