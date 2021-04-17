import { Dispatch } from "redux"
import * as Types from "../../state"
import * as messageActions from "./types"

export const onChat = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
  ) => {
    dispatch(messageActions.OnChat())
  }
}

export const offChat = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
  ) => {
    dispatch(messageActions.OffChat())
  }
}

