import authenticationMapper from '../mappers/authentication.mapper';
import { IUserCredentials } from '../models/user-crential';
import { urls } from '../resources/url.resourse';
import { StorageService } from './general/storage.service';
import http from './general/http.service';
export const loginService = (credentials: IUserCredentials): Promise<boolean> => {
  let url = urls.auth;
  if(!credentials.firstname && !credentials.lastname){
     url = `${url}/login`;
  }else{
     url = `${url}/create`;
  }
    const body = authenticationMapper.toApi(credentials);
      return http.post(url, body)
      .then((response) => response.json())
      .then((response) => {
        const storage = new StorageService();
        storage.set('TOKEN', response.token);
        return Boolean(response.token);
      });
  };

  export const logoutService = (): void => {
    const storage = new StorageService();
     storage.remove('TOKEN');
  };

  export const getTokenLocalStorage = (): string => {
    const storage = new StorageService();
    return storage.get('TOKEN');
  };
