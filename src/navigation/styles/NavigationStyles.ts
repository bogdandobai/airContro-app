import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from "../../themes"

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.background,
  },
  headerTitle: {
    ...Fonts.style.headerFont
  },
  headerTitleStyle: {
    flex: 1,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
    color: 'black',
    fontSize: Fonts.size.h5,
    marginBottom: Metrics.moderateScale._10,
    alignSelf: 'center',
    textAlign: "center",
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginTop: Metrics.moderateScale._5
  },
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0
  }
});
