import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,

  },
  listContent: {
    marginTop: 150,
    marginHorizontal: Metrics.moderateScale._22,
    paddingRight: Metrics.moderateScale._44
  }
})
