import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Landing from "../containers/Landing";
import HomeStack from './HomeNavigation'
import Loading from "../containers/Loading"

const AppNavigator = createSwitchNavigator(

    {
    Loading,
    Landing,
    Home: HomeStack
    },
    {
      initialRouteName:'Loading'
    }
)
export default createAppContainer(AppNavigator)
