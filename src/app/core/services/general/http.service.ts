import { StorageService } from './storage.service';


const storageService = new StorageService();

const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${storageService.get('TOKEN')}`
  };
  
  export default {
    post: async (url: RequestInfo, body?: any): Promise<Response> => await fetch(url, { headers, method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  
    get: async (url: RequestInfo): Promise<Response> => await fetch(url, { headers, method: 'GET' }),
  
    put: async (url: RequestInfo, body?: any): Promise<Response> => await fetch(url, { headers, method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  
    delete: async (url: RequestInfo): Promise<Response> => await fetch(url, { headers, method: 'DELETE' })
  };