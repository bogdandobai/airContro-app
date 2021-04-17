import * as Types from '../state';
import { AuthState } from '../Reducers/auth.reducer';
import { createSelector } from 'reselect';

const getAuthState = (state: Types.RootState): AuthState => state.auth;

export const selectErrorMessage = createSelector(
  getAuthState,
  (state: AuthState) => state.errorMessage
)