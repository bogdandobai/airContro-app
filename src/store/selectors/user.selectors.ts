import { createSelector } from 'reselect';
import AppState from '../state/AppState';
import { UserState } from '../reducers/user.reducer'

const getUserState = (state: AppState): UserState => state.user;

export const selectUser = createSelector(
  getUserState,
  (state: UserState) => {
    return state.user;
  }
)