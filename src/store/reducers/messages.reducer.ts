import { Message } from "../../types/classes"
import { ActionType, getType } from 'typesafe-actions'
import * as messagesActions from '../actions/messages/types'
import * as _ from 'lodash'
import { IMessage } from "react-native-gifted-chat"


export interface MessagesState {
  messages: {  [id: number]: IMessage},
  loading: boolean;
  isOnChat: boolean
}

const initialState: MessagesState = {
  messages:{},
  loading:false,
  isOnChat: false
};

export type MessagesActions = ActionType<typeof messagesActions>

const messagesReducer = (state = initialState, action: MessagesActions) => {
  switch (action.type) {
    case getType(messagesActions.AddMessage): {
      const messageAdded: Message = action.payload
      const currentMessages = { ...state.messages }
      currentMessages[messageAdded.id] = {
        _id: messageAdded.id,
        text: messageAdded.message,
        createdAt: Date.now(),
        user:{
          _id: messageAdded.user.id,
          name: messageAdded.user.first_name + messageAdded.user.last_name
        }
      }
      return {
        ...state,
        messages: { ...currentMessages }
      }
    }
    case getType(messagesActions.LoadMessages): {
      return {
        ...state,
        loading: true
      }
    }
    case getType(messagesActions.LoadMessagesSuccess): {
      const messages: { [id: number]: IMessage } = {}
      action.payload.forEach((message: Message) => {
        messages[message.id] = {
          _id: message.id,
          text: message.message,
          createdAt: new Date(message.date),
          user:{
            _id: message.user.id,
            name: message.user.first_name + message.user.last_name
          }
        }
      })
      return {
        ...state,
        messages: {
          ...state.messages,
          ...messages
        },
        loading: false
      }
    }
    case getType(messagesActions.OnChat):{
      return{
        ...state,
        isOnChat: true
      }
    }
    case getType(messagesActions.OffChat):{
      return{
        ...state,
        isOnChat: false
      }
    }
    default:
      return state
  }
};

export default messagesReducer
