import { ILiteryWork } from '../models/literywork.model';

interface IApiResponse {
    increasePrice: number;
    price: number;
    title: string;
  }

  export default {
    fromApi: (apiResponse: any): IApiResponse[] => {
      return apiResponse.map((item: ILiteryWork) => ({
        increasePrice: item.increasePrice,
        price: item.price,
        title: item.title
      }));
    }
  };