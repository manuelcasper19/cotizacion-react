import { ReactElement } from 'react';
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
  literyWorkDetailQuoationDTOs: LiteryWorkDetail[];
}

interface TableProps {
  quotation: Quotation;
}

export const TableLiteryWork = ({ quotation }: TableProps): ReactElement => {
  return (
    <section className="table__literywork">
         <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Cantidad a Comprar</th>
            <th>Descuento Mayorista</th>
            <th>Aumentado Minorista</th>
            <th>Tipo de Obra Literaria</th>
            <th>Total Normal</th>            
          </tr>
        </thead>
        <tbody>
          {quotation.literyWorkDetailQuoationDTOs.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>$ {book.increasedPrice}</td>
              <td>{book.quantityToPurchase}</td>
              <td>$ {book.discountWhoSale}</td>
              <td>$ {book.incresedRetail}</td>              
              <td>{book.literyWorkType}</td>
              <td>$ {book.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
