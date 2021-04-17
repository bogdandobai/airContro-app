import { StyleSheet } from 'react-native';
import { Metrics } from "../../themes"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  chart: {
    flex:1,
    marginVertical: 20,
  },
  value:{
    fontSize: Metrics.moderateScale._14,
    fontWeight: '500'
  },
  label:{
    color:'gray',
    fontSize: Metrics.moderateScale._12
  },
  index:{
    fontSize: Metrics.moderateScale._20,
    fontWeight: 'bold'
  }
});
