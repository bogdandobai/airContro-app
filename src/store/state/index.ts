import { CoreActions } from '../reducers/core.reducer';
import { StateType } from 'typesafe-actions';
import rootReducer from '../reducers';
import { CitiesActions } from '../reducers/cities.reducer';
import { UserActions } from '../reducers/user.reducer';
import { AuthActions } from '../reducers/auth.reducer';
import { MessagesActions} from "../reducers/messages.reducer"

export type RootAction =
  | CoreActions
  | CitiesActions
  | UserActions
  | AuthActions
  | MessagesActions

export type RootState = StateType<typeof rootReducer>
