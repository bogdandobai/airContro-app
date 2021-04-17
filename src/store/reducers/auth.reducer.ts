import { ActionType, getType } from 'typesafe-actions'
import * as authActions from '../actions/auth/types'

export interface AuthState {
  email: string
  password: string,
  errorMessage: boolean,
}

const initialState: AuthState = {
  email: '',
  password: '',
  errorMessage: false,
};

export type AuthActions = ActionType<typeof authActions>

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case getType(authActions.LoginFailure):
      return {
        ...state,
        errorMessage: true,
      }
    case getType(authActions.ResetError):
      return {
        ...state,
        errorMessage: false,
      }
    default:
      return state
  }
};

export default authReducer
