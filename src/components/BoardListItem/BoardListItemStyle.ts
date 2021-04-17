import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:32,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical: 10
  },
  text:{
    flex:0.3,
    fontSize:18,
    lineHeight:22,
    letterSpacing:-0.24,
    fontWeight:'400',
  },
  index:{
    fontSize:16,
    lineHeight:18,
    letterSpacing:-0.24,
    fontWeight:'400',
    flex:0.1,
    textAlign:'center'
  },
  dot:{
    height:16,
    width:16,
    borderRadius:8,
    marginLeft: 5,
  },
  dotContainer:{
    flexDirection:'row',
    justifyContent:'flex-end',
    flex:0.6
  }
});
