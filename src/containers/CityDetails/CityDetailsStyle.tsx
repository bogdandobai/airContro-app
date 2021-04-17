import { StyleSheet } from "react-native"
import { Metrics } from "../../themes"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop:Metrics.moderateScale._32
  },
  safeArea: { backgroundColor: "white", flex: 1 },
  tabBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:22,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title:{
    fontSize:16,
    fontWeight:'bold'
  }
})
