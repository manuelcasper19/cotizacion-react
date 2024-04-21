import { ILiteryworkToBudget, ILiteryworkToQuote } from '../models/literywork.model';
import { urls } from '../resources/url.resourse';
import http from './general/http.service';

  export const submitQuote = async (booksToQuote: ILiteryworkToQuote[]) => {
    const url = `${urls.literywork}/calculateall`;
  
    try {
      const transformedData = booksToQuote.map(book => ({
        id: book.id,
        quantityBook: book.quantity
      }));
  
      const data = { literyWorks: transformedData };
          const response = await http.post(url, data);
      if (!response.ok) {
        throw new Error('Error al enviar la cotización');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Error al enviar la cotización');
    }
  };

  export const submitBudget = async (booksToBudget: ILiteryworkToBudget) => {
    const url = `${urls.literywork}/calculatemaxdiscount`;
  
    try {       
      const response = await http.post(url, booksToBudget);
      console.log(response)
      if (!response.ok) {
        throw new Error('Error al enviar la cotización');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Error al enviar la cotización');
    }
  };