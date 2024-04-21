import { ReactElement } from 'react';
import './style.css';
import { ILiteryWorkDetail } from '../../../core/models/literywork.model';



interface IQuotation {
  literyWorkDetailQuoationDTOs?: ILiteryWorkDetail[];
}

interface ITableProps {
  quotation?: IQuotation;
}

export const TableLiteryWork = ({ quotation }: ITableProps): ReactElement => {
  
  return (
    <section className="table__literywork">
      {quotation?.literyWorkDetailQuoationDTOs && quotation?.literyWorkDetailQuoationDTOs.length === 0 ?  (
        <p>No hay elementos cotizados</p>
      ) : (
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
            {quotation!.literyWorkDetailQuoationDTOs!.map((book) => (
              <tr key={book.title}>
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
      )}
    </section>
  );
};
