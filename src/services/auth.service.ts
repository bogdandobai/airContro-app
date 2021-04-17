import LocalStorageManager from "../transforms/LocalStorageManager";
import Api from '../services/api'
import {Tokens} from '../types/interfaces'
import AsyncStorage from '@react-native-community/async-storage';
import { User } from "../types/classes"

export const getRefreshToken = (refreshToken: string): Promise<{ access: string }> => {
    return Api.post('/refresh-token', { refresh: refreshToken })
};

export const setTokens = async (tokens: Tokens) => {
    await LocalStorageManager.storeObjectPromise('TOKENS', tokens)
    Api.setAuthorizationHeader(tokens.access,tokens.refresh)
}

export const getTokens = async (): Promise<Tokens> => {
    // tslint:disable-next-line
    return await LocalStorageManager.getObjectPromise('TOKENS')
}

export const login = async (username: string, password: string): Promise<Tokens> => {
    return Api.post('/login', { email: username, password });
}

export const register = async(email: string, password:string,firstName: string, lastName:string) => {
    return Api.post('/register',{email,password,firstName,lastName})
}

export const verifyAuth = async () => {
    const tokens = await getTokens();
    if (!tokens) {
        // tslint:disable-next-line
        console.log('Not logged in.');
    }

    Api.setAuthorizationHeader(tokens.access, tokens.refresh);
    const user = await loadUser()
    if (!user) {
        throw Error('User not found')
    }

    return user
   // return null
}

export const logOut = async (): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem('TOKENS');
        return true;
    }
    catch (exception) {
        return false;
    }
}

export const resetPassword = async (email: string): Promise<string> => {
    return Api.post('tokens', { email })
}

export const loadUser = async (): Promise<User> => {
    return Api.get('/users')
}
