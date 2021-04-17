import { Dispatch } from 'redux'
import * as Types from '../../state'
import * as userActions from './types'
import * as userService from '../../../services/user.service';
import { UserCity } from "../../../types/classes/user-city.class"
import NotificationListener from "../../../services/NotificationListener"


export const toggleSubscription = (city: UserCity) => {
  return async (

    dispatch: Dispatch<Types.RootAction>
  ) => {
    dispatch(userActions.ToggleSubscription())
    try{
      await userService.toggleSubscription(city);
      dispatch(userActions.ToggleSubscriptionSuccess(city));
      NotificationListener.unsubscribeFromTopic(city.city.name)
    }catch{
      dispatch(userActions.ToggleSubscriptionFail())
    }
  }
}
