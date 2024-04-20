import { urls } from '../resources/url.resourse';
import { ILiteryWork } from '../models/literywork.model';
import http from './general/http.service';

export const getLiteryWork = (): Promise<ILiteryWork[]> => {
  const url = `${urls.literywork}/getall`;
  return http.get(url)
    .then((response) => response.json())
    .then((data: ILiteryWork[]) => {
      return data.map(item => ({
        title: item.title,
        price: item.price,
        increasePrice: item.incrasePrice,
        url: item.url
      }));
    });
};