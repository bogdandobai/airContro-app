import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../themes';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingHorizontal: Metrics.moderateScale._22,
  },
});
