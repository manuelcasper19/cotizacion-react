import { urls } from '../resources/url.resourse';
import http from './general/http.service';

interface ILiteryworkToQuote {
    id: number;
    quantity: number;
  }

  export const submitQuote = async (booksToQuote: ILiteryworkToQuote[]) => {
    const url = `${urls.literywork}/calculateall`;
  
    try {
      const response = await http.post(url, booksToQuote);
      if (!response.ok) {
        throw new Error('Error al enviar la cotización');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Error al enviar la cotización');
    }
  };