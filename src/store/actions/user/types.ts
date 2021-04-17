import { createAction } from 'typesafe-actions'
import { User } from '../../../types/classes'
import { UserCity } from "../../../types/classes/user-city.class"


const USER_LOAD_USER_SUCCESS = '[User] Load User Success';
const USER_EDIT_USER = '[User] Edit User';
const USER_CONFIRM_USER = '[User] Confirm User';

const TOGGLE_SUBSCRIPTION = '[User] Toggle Subscription';
const TOGGLE_SUBSCRIPTION_SUCCESS = '[User] Toggle Subscription Success';
const TOGGLE_SUBSCRIPTION_FAIL = '[User] Toggle Subscription Fail';

export const LoadUserSuccess = createAction(USER_LOAD_USER_SUCCESS, resolve => (user: User) => resolve(user));
export const EditUser = createAction(USER_EDIT_USER)
export const ConfirmUser = createAction(USER_CONFIRM_USER, resolve => (user: User) => resolve(user))

export const ToggleSubscription = createAction(TOGGLE_SUBSCRIPTION)
export const ToggleSubscriptionSuccess = createAction(TOGGLE_SUBSCRIPTION_SUCCESS, resolve => (city: UserCity) => resolve(city))
export const ToggleSubscriptionFail = createAction(TOGGLE_SUBSCRIPTION_FAIL)
