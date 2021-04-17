import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
      flex: 0.3,
      marginBottom:10,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      backgroundColor:'white',
    },
  city:{
    fontSize: 28,
    color:'black',
    fontWeight: '500',
    textAlign:'center'
  },
  filter:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  indexStyle:{
    width:32,
    height:32,
    borderRadius:16,
    marginRight:20,
  },
});
