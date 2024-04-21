export interface ILiteryWork {
    id: number;
    title: string;
    url: string;
    price: number;
    incrasePrice?: number;
    literyWorkType?: number;
  }
  

  export interface ILiteryworkToQuote {
    id: number;
    quantity: number;
  }

  export interface ILiteryworkToBudget {
    budget: number;
    literyWorksId: number[];
  }


  