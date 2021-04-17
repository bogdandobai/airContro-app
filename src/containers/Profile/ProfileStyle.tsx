import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../themes';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems:'center',
  },
  textInput:{
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize:24
  },
  header:{ width: Metrics.width, paddingHorizontal: Metrics.moderateScale._22},
  name: {flexDirection:'row', justifyContent: 'center',alignItems:'center'},
  email:{alignSelf:'center', color:'gray'}
});
