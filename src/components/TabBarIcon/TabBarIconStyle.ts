import { StyleSheet } from 'react-native'
import Fonts from '../../themes/Fonts'

export default StyleSheet.create({
  tabBarIcon: {
    width:32,
    height:32
  },
  tabBarLabelText: {
    color: 'rgba(0.7,0.22,0.25,1)',
    fontFamily: Fonts.type.semiBold,
    fontSize: 14,
    alignSelf: 'center',
    display: 'none',
    letterSpacing: 0.1,
    lineHeight: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})
