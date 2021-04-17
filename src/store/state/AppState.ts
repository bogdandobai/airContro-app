import {CoreState} from '../reducers/core.reducer';
import { CitiesState } from '../reducers/cities.reducer';
import { AuthState } from '../reducers/auth.reducer';
import { UserState } from '../reducers/user.reducer';
import { MessagesState } from "../reducers/messages.reducer"


export default interface AppState {
  core: CoreState;
  messages: MessagesState;
  cities: CitiesState;
  auth: AuthState;
  user: UserState
}
