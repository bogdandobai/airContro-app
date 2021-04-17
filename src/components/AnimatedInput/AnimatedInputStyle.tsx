import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes';

export default StyleSheet.create({
  label: {
    color: Colors.gray,
    fontWeight:'bold',
    marginTop: Metrics.moderateScale._25,
    // marginHorizontal: Metrics.moderateScale._50,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium
  },
  textInput: {
    paddingHorizontal: Metrics.moderateScale._10,
    paddingBottom:5,
    paddingLeft: 0,
    // marginHorizontal: Metrics.moderateScale._50,
    color: Colors.black
  },
  errorTextInput: {
    borderColor: Colors.gray,
  },
  text: {
    color: Colors.gray,
    // marginHorizontal: Metrics.moderateScale._65,
    marginTop: Metrics.moderateScale._5,
    fontSize: Fonts.size.smallest,
  },
  border: {
    height: 2,
    backgroundColor: Colors.gray,
    // marginHorizontal: Metrics.moderateScale._50
  },
  progress: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  iconContainer: {
    width: Metrics.moderateScale._24,
    height:  Metrics.moderateScale._24,
    position: 'absolute',
    right:0,
    bottom: 0,
  },
  icon: {
    alignSelf:'center',
    width: Metrics.moderateScale._16,
    height: Metrics.moderateScale._16,
  }
})