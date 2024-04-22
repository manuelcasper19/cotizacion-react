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
        incrasePrice: item.incrasePrice,
        url: item.url,
        id: item.id
      }));
    });
};

export const createLiteryWork = async ( literywork: ILiteryWork) : Promise<ILiteryWork> => {
  const url = `${urls.literywork}/calculateindividual`;
  try {
    const response = await http.post(url, literywork);
    if(!response.ok){
      throw new Error('Error al crear el libro');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error al crear el libro ' + error);
  }
};

export const getLiteryWorkById = async ( id : number) : Promise<ILiteryWork> => {
  const url = `${urls.literywork}/${id}`;
  try {
    const response = await http.get(url);
    if(!response.ok){
      throw new Error('Error al consuletar el libro');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error al consultar el libro ' + error);
  }
};