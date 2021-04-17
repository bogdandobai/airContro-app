import { Dispatch } from 'redux';
import * as Types from '../../state';
import * as coreActions from './types';
import * as authService from '../../../services/auth.service';
import * as userActions from '../user/types';
import NavigationService from '../../../navigation/NavigationService';
import NotificationListener from "../../../services/NotificationListener"
import firebase from "react-native-firebase"

export const setSettings = () => {
	return (dispatch: Dispatch<Types.RootAction>, getState: () => Types.RootState) => {
		dispatch(coreActions.CoreSettings());
	};
};

export const launchApp = () => {
	return async (dispatch: Dispatch<Types.RootAction> | any, getState: () => Types.RootState) => {
		try {
			const c = firebase.messaging().getToken();
			console.log(c)
			const user = await authService.verifyAuth()
			dispatch(userActions.LoadUserSuccess(user))


			NotificationListener.subscribeToTopic('chat');
			const notification = await NotificationListener.onNotificationOpenedAppClose()
			if (notification) {
				console.log('notification',notification)
				if(notification.notification.data.type === 'chat'){
					return NavigationService.navigate('Chat')
				}
				NotificationListener.removeAllDeliveredNotifications()
				return NavigationService.navigate("Home")
			}
			NavigationService.navigate('Home')
		}catch{
			await authService.logOut();
			NavigationService.navigate('Landing');
		}
	};
};
