export interface ILiteryWork {
    id?: number;
    title: string;
    url: string;
    price?: number;
    incrasePrice: number;
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

  export interface ILiteryWorkDetail {
    id: number;
    title: string;
    increasedPrice: number;
    quantityToPurchase: number;
    discountWhoSale: number;
    incresedRetail: number;
    total: number;
    literyWorkType: number;
  }


  