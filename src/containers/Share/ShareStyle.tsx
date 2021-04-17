import { StyleSheet } from 'react-native';
import { verticalScale } from "../../themes/Metrics"

export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-evenly',
    paddingTop: verticalScale(80),
    alignItems:'center',
    backgroundColor: '#F9F9F9'
  },
});
