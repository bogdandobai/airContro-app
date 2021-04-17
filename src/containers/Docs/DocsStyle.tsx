import { StyleSheet } from 'react-native';
import {  ApplicationStyles } from '../../themes';
import { verticalScale } from "../../themes/Metrics"

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    backgroundColor: '#F9F9F9',
    paddingVertical: verticalScale(40),
  },
  contentContainer:{
    paddingBottom: verticalScale(100),
  }
});
