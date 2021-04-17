import { Dispatch } from 'redux';
import * as Types from '../../state/'
import * as authActions from './types'
import * as userActions from '../user/types'
import * as authService from '../../../services/auth.service'
import NavigationService from '../../../navigation/NavigationService';
import {Tokens} from '../../../types/interfaces'

export const login = (email: string, password: string) => {
  return async (
    dispatch: Dispatch<Types.RootAction>
  ) => {
    try {
      const tokens: Tokens = await authService.login(email, password);
      await authService.setTokens(tokens)
      const user = await authService.loadUser()
      dispatch(userActions.LoadUserSuccess(user))
      NavigationService.navigate('Home')
    } catch (error) {
      dispatch(authActions.LoginFailure())
    }
  }
}

// TODO CEVA DE GENU

// export const register = (email: string, password: string, firstName: string, lastName: string) => {
//   return async (
//     dispatch: Dispatch<Types.RootAction>
//   ) => {
//     try {
//       const user: User = await authService.register(email, password,firstName,lastName);
//       if(user){
//        // dispatch(login(user.email,user.password))
//       }
//     } catch (error) {
//       dispatch(authActions.LoginFailure())
//     }
//   }
// }

export const logout = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>
  ) => {

    await authService.logOut();
    dispatch(authActions.Logout())

    NavigationService.navigate('Landing')
  }
}

export const resetError = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>
  ) => {
    dispatch(authActions.ResetError())
  }
}

// export const resetPassword = (email: string) => {
//   return async () => {
//     try {
//       await authService.resetPassword(email);
//       NavigationService.navigate('Login')
//       utils.toggleToast('Email sent');
//     } catch (error) {
//       utils.toggleToast('Failed to send email')
//     }
//   }
// }
