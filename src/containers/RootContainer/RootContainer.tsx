import * as React from 'react';
import { View, StatusBar } from 'react-native';
import * as Types from '../../store/state';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import ReduxPersist from '../../config/ReduxPersist';
import NavigationService from '../../navigation/NavigationService';
import AppNavigation from '../../navigation/AppNavigation';
import styles from './RootContainerStyles';
import * as fromStore from '../../store';
import firebase from "react-native-firebase"
import NotificationListener from "../../services/NotificationListener"
import { User } from "../../types/classes"

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
interface DispatchProps {
  launchApp?: () => void;
}

// console.disableYellowBox=true

/**
 * The properties mapped from the global state
 */
interface StateProps {
  user: User
  onChat: boolean
}

console.disableYellowBox = true;

type Props = StateProps & DispatchProps & OwnProps;

export class RootContainer extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);
  }

  public async componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      // call startup action
      // this.props.startup();
    }
    await NotificationListener.setUp({
      channelId: "aircontrol",
      name: "Aircontrol Channel",
      importance: firebase.notifications.Android.Importance.High,
    })
    this.props.launchApp();
    NotificationListener.onNotificationOpened(this.openNotification)
    firebase.notifications().onNotification(notification => {
      console.log('notification',notification)
      if(!this.props.onChat){
        NotificationListener.display(notification,"aircontrol")
      }
    })
  }


  openNotification = (notification) => {
    console.log('notification',notification)
    NotificationListener.removeAllDeliveredNotifications()
    if(notification.notification.data.type==='chat'){
      return NavigationService.navigate("Chat")
    }
    NavigationService.navigate("Home")
  }


  public render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar />
        <AppNavigation ref={(navigatorRef: any) => NavigationService.initialize(navigatorRef)} />
      </View>
    );
  }
}

const mapStateToProps = (state: Types.RootState, ownProps: Props): StateProps => {
  return {
    user: fromStore.selectUser(state),
    onChat: fromStore.isOnChat(state)
  }
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<Types.RootAction>): DispatchProps |  any =>
  Redux.bindActionCreators(
    {
      launchApp: () => fromStore.coreActions.launchApp(),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
