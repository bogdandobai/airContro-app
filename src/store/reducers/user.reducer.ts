import { ActionType, getType } from 'typesafe-actions'
import * as userActions from '../actions/user/types';
import * as authActions from '../actions/auth/types';
import { User } from '../../types/classes';
import { AuthActions } from './auth.reducer';

export interface UserState {
  user: User | null
  editable: boolean,
  users: {
    [id: number]: User
  }
}
const initialState: UserState = {
  user: null,
  editable: false,
  users: {}
}

export type UserActions = ActionType<typeof userActions>

const userReducer = (state = initialState, action: UserActions | AuthActions) => {

  switch (action.type) {
    case getType(userActions.LoadUserSuccess): {
      return {
        ...state,
        user: action.payload
      }
    }
    case getType(authActions.Logout): {
      return {
        ...state,
        user: null
      }
    }
    case getType(userActions.EditUser): {
      return {
        ...state,
        editable: !state.editable
      }
    }
    case getType(userActions.ConfirmUser): {
      const userEdited: User = action.payload
      const currentUsers = { ...state.users }
      currentUsers[userEdited.id] = userEdited
      return {
        ...state,
        users: { ...currentUsers }
      }
    }
    default:
      return state
  }
}

export default userReducer