import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../themes';
import { verticalScale } from "../../themes/Metrics"

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    ...ApplicationStyles.darkLabel,
    fontSize: 20,
    color: '#003A40',
    marginTop:verticalScale(100),
  },
  centered: {
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'gray',
    opacity: 0.9
  },
  content: {
    backgroundColor: 'white',
    justifyContent: 'center',
    opacity: 1,
    height: Metrics.moderateScale._100,
    width: Metrics.width - Metrics.moderateScale._64,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.42,
    shadowRadius: 2.42,
    elevation: 3,
    marginVertical: Metrics.moderateScale._16,
    borderRadius: Metrics.moderateScale._10,
  },
  button:{
    position: 'absolute',
    bottom: Metrics.moderateScale._32,
    left: Metrics.width / 2 - Metrics.moderateScale._24,
  },
});
