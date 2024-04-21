import  { ReactElement } from 'react';
import './style.css';


interface LiteryWorkDetail {
  id: number;
  title: string;
  increasedPrice: number;
  quantityToPurchase: number;
  discountWhoSale: number;
  incresedRetail: number;
  total: number;
  literyWorkType: number;
}

interface Quotation {
  whosaleDiscount: number;
  total: number;
  seniorityDiscount: number;
  totalPay: number;
  literyWorkDetailQuoationDTOs: LiteryWorkDetail[];
}

interface TableProps {
  quotation: Quotation;
}

export const TableLiteryWork = ({ quotation }: TableProps ): ReactElement => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Precio Aumentado</th>
          <th>Cantidad a Comprar</th>
          <th>Descuento Mayorista</th>
          <th>Precio Aumentado Minorista</th>
          <th>Total</th>
          <th>Tipo de Obra Literaria</th>
        </tr>
      </thead>
      <tbody>
        {quotation.literyWorkDetailQuoationDTOs.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.increasedPrice}</td>
            <td>{book.quantityToPurchase}</td>
            <td>{book.discountWhoSale}</td>
            <td>{book.incresedRetail}</td>
            <td>{book.total}</td>
            <td>{book.literyWorkType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
