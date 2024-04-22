import { IUserCredentials } from '../models/user-crential';


export default {
    toApi: (credentials: IUserCredentials): any => {
      return {
        Email: credentials.email,
        Password: credentials.password,
        Firstname: credentials.firstname,
        Lastname: credentials.lastname
      };
    }
  };