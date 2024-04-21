import { ILiteryWork } from '../models/literywork.model';


  export default {
    fromApi: (apiResponse: any): ILiteryWork[] => {
      return apiResponse.map((item: ILiteryWork) => ({
        increasePrice: item.increasePrice,
        price: item.price,
        title: item.title,
        url : item.url,
        id: item.id
      }));
    }
  };