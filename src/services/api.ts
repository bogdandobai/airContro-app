import { ApisauceInstance, create } from 'apisauce';
import jwtDecode from 'jwt-decode';
import * as authService from '../services/auth.service'

class Api {
  private static api: ApisauceInstance;
  private static accessToken: string;
  private static refreshToken: string;
  

  public static getInstance() {
    if (!Api.api) {
      const url = 'http://127.0.0.1:8000';
      Api.initializeWithUrl(url);
    }
  }
  private static initializeWithUrl(url: string) {
      Api.api = create({
        baseURL: url,
        headers: {
          Accept: 'application/json',
        },
      });
    }

  public static setAuthorizationHeader(accessToken: string, refreshToken: string) {
    Api.accessToken = accessToken;
    Api.refreshToken = refreshToken;
    Api.api.setHeader('Authorization', `Bearer ${accessToken}`);
  }

  public static get = async <T>(url: string, params?: any): Promise<T> => {
    await Api.checkAccessTokenExpiration(url)
    const response = await Api.api.get<T>(url, params);
    return Api.getResponse(response);
  };

  public static post = async <T>(url: string, data?: {}): Promise<T> => {
    await Api.checkAccessTokenExpiration(url);
    const response = await Api.api.post<T>(url, data);
    return Api.getResponse(response);
  };

  public static patch = async <T>(url: string, data?: {}): Promise<T> => {
    await Api.checkAccessTokenExpiration(url);
    const response = await Api.api.patch<T>(url, data);
    return Api.getResponse(response);

  };

  public static put = async <T>(url: string, data?: {}): Promise<T> => {
    await Api.checkAccessTokenExpiration(url);
    const response = await Api.api.put<T>(url, data);
    return Api.getResponse(response);
  };

  public static delete = async <T>(url: string, params?: {}): Promise<T> => {
    // tslint:disable-next-line
    await Api.checkUrlHasAccessToken(url);
    const response = await Api.api.delete<T>(url, params);
    return Api.getResponse(response);
  };

  private static checkUrlHasAccessToken = (url: string) => {
    if (url.indexOf('/refresh-token') >= 0 || url.indexOf('/login') >= 0 || url.indexOf('reset-password') >= 0 || url.indexOf('measurements')>=0) {
      Api.getInstance()
      return false;
    }
    return true;
  }

  private static checkAccessTokenExpiration = async (url: string) => {
   if (Api.checkUrlHasAccessToken(url)) {
      const currentTime = Date.now() / 1000
      const decodedAccessToken = jwtDecode(Api.accessToken)
      if (decodedAccessToken.exp < currentTime) {
        const token = await authService.getRefreshToken(Api.refreshToken)
        Api.setAuthorizationHeader(token.access, Api.refreshToken)
      }
    }
  }
  private static getResponse = (response: any): Promise<any> => {
    return !response.ok ? Promise.reject(response.data) : Promise.resolve(response.data);
  };
}

export default Api;
