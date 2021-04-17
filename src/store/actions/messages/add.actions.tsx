import { Dispatch } from 'redux';
import * as Types from '../../state/'
import * as messageActions from './types'
import * as messagesService from '../../../services/messages.service'


export const addMessage = (message: string) => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
    getState: () => Types.RootState
  ) => {
    const userId = getState().user.user.id
    const messageToAdd = await messagesService.create(userId, message);
    dispatch(messageActions.AddMessage(messageToAdd))
  }
}
