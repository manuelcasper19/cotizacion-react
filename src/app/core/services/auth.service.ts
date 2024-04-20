import authenticationMapper from '../mappers/authentication.mapper';
import { IUserCredentials } from '../models/user-crential';
import { urls } from '../resources/url.resourse';
import { StorageService } from './general/storage.service';
import http from './general/http.service';
export const authService = (credentials: IUserCredentials): Promise<boolean> => {
    const url = urls.auth;
    const body = authenticationMapper.toApi(credentials);
    console.log(body)
      return http.post(url, body)
      .then((response) => response.json())
      .then((response) => {
        const storage = new StorageService();
        storage.set('TOKEN', response.token);
        return Boolean(response.token);
      });
  };