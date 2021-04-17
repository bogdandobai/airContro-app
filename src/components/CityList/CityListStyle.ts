import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  listContent: {
        marginHorizontal: Metrics.moderateScale._32
  },
  footer: {
    justifyContent: 'center',
    alignItems:'center'
  },
  hiddenItem:{
    justifyContent:'center',
    alignItems:'flex-end',
    height: Metrics.moderateScale._100,
    width: Metrics.width - 64,
    marginVertical: Metrics.moderateScale._16,
  }
})
