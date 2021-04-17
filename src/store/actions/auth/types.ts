import { createAction } from 'typesafe-actions'

const AUTH_LOGIN_FAILURE = '[Auth] Login Failure'
const AUTH_LOGOUT = '[Auth] Logout'
const AUTH_RESET_ERROR = '[Auth] Reset Error'

export const LoginFailure = createAction(AUTH_LOGIN_FAILURE)
export const Logout = createAction(AUTH_LOGOUT)
export const ResetError = createAction(AUTH_RESET_ERROR)

