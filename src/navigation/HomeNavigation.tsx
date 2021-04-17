import { createStackNavigator } from 'react-navigation-stack';
import Home from '../containers/Home'
import CityDetails from '../containers/CityDetails';
import Location from '../containers/Location';
import Search from '../containers/Search';
import { Images, Metrics } from "../themes"
import React from 'react'
import TabBarIcon from "../components/TabBarIcon"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HeaderButton from "../components/HeaderButton"
import styles from './styles/NavigationStyles'
import Profile from "../containers/Profile/Profile"
import Docs from "../containers/Docs/Docs"
import NotificationsManager from "../containers/NotificationsManager/NotificationsManager"
import Board from "../containers/Board/Board"
import Chat from "../containers/Chat/Chat"
import Share from "../containers/Share/Share"
import Document from "../containers/Document/Document"

const HomeStack = createStackNavigator(
  {
    LaunchScreen: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    CityDetails:{
      screen: CityDetails,
      navigationOptions:({navigation})=>({
        headerTransparent:true,
        headerLeft: (
          <HeaderButton
            source={Images.backButton}
            onPress={() =>{navigation.goBack()}}
          />
        ),
        headerTitle:navigation.getParam('title'),
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
      })
    },
  },
  {
    initialRouteName: 'LaunchScreen',
    headerTransitionPreset: 'fade-in-place',
    mode: 'card',
  }
)

const ProfileStack = createStackNavigator({
  Profile:{
    screen: Profile,
    navigationOptions:() => ({
      header: null
    })
  },
  ManageNotifications:{
    screen: NotificationsManager,
    navigationOptions:({navigation})=>({
      headerTransparent:false,
      headerLeft: (
        <HeaderButton
          source={Images.backButton}
          onPress={() =>{navigation.goBack()}}
        />
      ),
      headerTitle: 'Manage Notifications',
      headerTitleStyle: styles.headerTitleStyle,
      headerStyle: styles.headerStyle,
    })
  }
})
const SearchStack = createStackNavigator({
  Search:{
    screen: Search,
    navigationOptions:() => ({
      header:null
    })
  },
})

const DocsStack = createStackNavigator({
  Docs:{
    screen: Docs,
    navigationOptions:({navigation})=>({
      headerTransparent: true,
      headerLeft: (
        <HeaderButton
          source={Images.backButton}
          onPress={() =>{navigation.goBack()}}
        />
      ),
    })
  },
  Document:{
    screen: Document,
    navigationOptions:({navigation})=>({
      headerTransparent: true,
      headerLeft: (
        <HeaderButton
          source={Images.backButton}
          onPress={() =>{navigation.goBack()}}
        />
      ),
    })
  }
},{
  mode:'card'
})

const HomeTabNavigator = createBottomTabNavigator(
  {
    Search: SearchStack,
    Home: HomeStack,
    Profile: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName: number = Images.search;
        if (routeName === 'Search') {
          iconName = focused ? Images.search_active : Images.search
        }
        else if (routeName === 'Home') {
          iconName = focused ? Images.home_active : Images.home
        }
        else if (routeName === 'Profile') {
          iconName = focused ? Images.profile_active : Images.profile
        }
        return TabBarIcon(iconName)
      },
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      safeAreaInset: { bottom: 'never' },
      showLabel: false,
      style: { height: Metrics.moderateScale._71 }
    }
  },

)


const HomeNavigation = createStackNavigator({
    HomeTab: {
      screen: HomeTabNavigator,
      navigationOptions:({navigation})=>({
        headerTransparent: true
      })
    },
    Location:{
      screen: Location,
      navigationOptions:({navigation})=>({
        headerTransparent: true,
        headerLeft: (
          <HeaderButton
            source={Images.backButton}
            onPress={() =>{navigation.goBack()}}
          />
        ),
      })
    },
    Docs:{
      screen: DocsStack,
      navigationOptions:({navigation})=>({
        headerTransparent: true,
        headerLeft: (
          <HeaderButton
            source={Images.backButton}
            onPress={() =>{navigation.goBack()}}
          />
        ),
      })
    },
    Board:{
      screen: Board,
      navigationOptions:({navigation})=>({
        headerTransparent: true,
        headerLeft: (
          <HeaderButton
            source={Images.backButton}
            onPress={() =>{navigation.goBack()}}
          />
        ),
      })
    },
    Chat:{
      screen: Chat,
      navigationOptions:({navigation})=>({
        headerTransparent: true,
        headerLeft: (
          <HeaderButton
            source={Images.backButton}
            onPress={() =>{navigation.goBack()}}
          />
        ),
      })
    },
    Share:{
      screen: Share,
      navigationOptions:({navigation})=>({
        headerTransparent: true,
        headerLeft: (
          <HeaderButton
            source={Images.backButton}
            onPress={() =>{navigation.goBack()}}
          />
        ),
      })
    }
  },
  {
    // headerMode: 'none',
    initialRouteName: 'HomeTab',
    headerTransitionPreset: 'fade-in-place',
  });


export default HomeNavigation

