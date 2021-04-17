import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../themes';
import { verticalScale } from "../../themes/Metrics"

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    paddingTop: verticalScale(80)
  },
});
