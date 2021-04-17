import { Dispatch } from 'redux';
import * as Types from '../../state/'
import * as messagesActions from './types'
import * as service from '../../../services/messages.service'

export const loadMessages = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
    getState: () => Types.RootState
  ) => {
    dispatch(messagesActions.LoadMessages())
    try {
      const response = await service.list();
      dispatch(messagesActions.LoadMessagesSuccess(response))
    } catch (e) {
      dispatch(messagesActions.LoadMessagesError(e.message))
    }
  }
}


