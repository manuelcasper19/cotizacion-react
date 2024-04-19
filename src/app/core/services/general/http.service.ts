import { StorageService } from './storage.service';


const storageService = new StorageService();

const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`
  };
  
  export default {
    post: <T>(url: string, body: any): Promise<T> => fetch(url, { headers, method: 'POST', body: JSON.stringify(body) }).then((response) => response.json()),
    get: (url: string) => fetch(url, { headers, method: 'GET' }),
    put: <T>(url: string, body: any): Promise<T> => fetch(url, { headers, method: 'PUT', body: JSON.stringify(body) }).then((response) => response.json()),
    delete: <T>(url: string): Promise<T> => fetch(url, { headers, method: 'DELETE' }).then((response) => response.json())
  };
  