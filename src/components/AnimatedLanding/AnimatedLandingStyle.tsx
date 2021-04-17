import { StyleSheet, Dimensions } from 'react-native';
import { Metrics, Colors } from '../../themes';

export default StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'flex-end' 
  },
  container: {
    backgroundColor: 'red',
    borderRadius: Metrics.moderateScale._9,
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.moderateScale._48,
    marginVertical: Metrics.moderateScale._12,
    marginHorizontal: Metrics.moderateScale._32
  },
  text: {
    color: 'white',
    // marginHorizontal: Metrics.moderateScale._35,
    marginVertical: Metrics.moderateScale._6,
    fontSize: Metrics.moderateScale._14,
    fontWeight: 'bold',
    lineHeight: Metrics.moderateScale._20
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: Dimensions.get('window').width / 2 - 60,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: Metrics.moderateScale._2 },
    shadowOpacity: 0.5,
    shadowRadius: Metrics.moderateScale._20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: Metrics.moderateScale._64,
    marginHorizontal: Metrics.moderateScale._32
  },
  image: {
    alignSelf: 'center',
    marginTop: Metrics.height/3,
    width: Metrics.width/1.1,
    height: Metrics.width/1.1
  }
});
