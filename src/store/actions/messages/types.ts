import { Message } from "../../../types/classes"
import { createAction } from 'typesafe-actions'

const ADD_MESSAGE = '[Message] Add Message'

const LOAD_MESSAGES = '[Messages] Load Messages'
const LOAD_MESSAGES_SUCCESS = '[Messages] Load Success Messages'
const LOAD_MESSAGES_ERROR = '[Messages] Load Error Messages'

export const ON_CHAT = '[Messages] On Chat'
export const OFF_CHAT = '[Messages] Off Chat'

export const LoadMessages = createAction(LOAD_MESSAGES);
export const LoadMessagesSuccess = createAction(LOAD_MESSAGES_SUCCESS, resolve => (response: Message[]) => resolve(response))
export const LoadMessagesError = createAction(LOAD_MESSAGES_ERROR, resolve => (err: string) => resolve(err));

export const AddMessage = createAction(ADD_MESSAGE, resolve => (response: Message) => resolve(response));

export const OnChat = createAction(ON_CHAT);
export const OffChat = createAction(OFF_CHAT)
