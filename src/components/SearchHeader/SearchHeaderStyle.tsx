import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.225,
    marginBottom:10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    backgroundColor:'white',
    justifyContent:'flex-end',
    paddingBottom:20
  },
  filterWrapper:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  filter:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textStyle:{
    fontSize:14,
  },
  indexStyle:{
    width:32,
    height:32,
    borderRadius:16,
    marginRight:20,
  },
  separator:{
    height:32,
    width:1,
    backgroundColor:'rgb(211,211,211)',
  }
});
