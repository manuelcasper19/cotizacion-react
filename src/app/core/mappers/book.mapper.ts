import { ILiteryWork } from '../models/literywork.model';


const literyWorkMapper = {
  fromApi: (apiResponse: any): ILiteryWork[] => {
    return apiResponse.map((item: ILiteryWork) => ({
      increasePrice: item.increasePrice,
      price: item.price,
      title: item.title,
      url: item.url,
      id: item.id
    }));
  }
};

  const quotationDetailMapper = {
    fromApi: (apiResponse: any) => {
      return apiResponse.literyWorkDetailQuoationDTOs.map((item: any) => ({
        id: item.id,
        title: item.title,
        increasedPrice: item.increasedPrice,
        quantityToPurchase: item.quantityToPurchase,
        discountWhoSale: item.discountWhoSale,
        incresedRetail: item.incresedRetail,
        total: item.total,
        literyWorkType: item.literyWorkType
      }));
    }
  };
export { literyWorkMapper, quotationDetailMapper };