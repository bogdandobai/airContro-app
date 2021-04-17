import * as Types from '../state';
import {  MessagesState } from '../reducers/messages.reducer';
import { createSelector } from 'reselect';
import { IMessage } from "react-native-gifted-chat"

const getMessagesState = (state: Types.RootState):  MessagesState => state.messages;

export const selectMessages = createSelector(
  getMessagesState,
  (state: MessagesState) => {
    const messages: IMessage[] = [];
    Object.keys(state.messages).forEach((key: string) => {
      messages.push(state.messages[key])
    })
    return messages;
  }
)
export const selectLoadingMessages = createSelector(
  getMessagesState,
  (state: MessagesState) => {
    return state.loading
  }
)

export const isOnChat = createSelector(
  getMessagesState,
  (state: MessagesState) => state.isOnChat
)
