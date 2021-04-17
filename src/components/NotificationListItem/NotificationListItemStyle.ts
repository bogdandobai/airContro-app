import { StyleSheet } from "react-native"
import { Colors, Metrics } from "../../themes"

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Metrics.moderateScale._16,
  },
  label: {
    fontSize: Metrics.moderateScale._16,
    textAlign: "left",
    lineHeight: Metrics.moderateScale._21,
    color: Colors.gray,
  },
})
