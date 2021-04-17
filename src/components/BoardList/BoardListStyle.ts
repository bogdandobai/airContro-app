import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
    listContent: {
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      marginTop:20,
      backgroundColor:'white'
    }
})
