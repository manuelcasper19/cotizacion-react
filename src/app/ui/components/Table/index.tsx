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
  const roundToThreeDecimals = (value: number): number => {
    return Number(value.toFixed(3)).toString();
  };
  const getLiteryWorkType = (value: number): string => {
    return value === 0 ? "Novela" : "Libro";
  };

  return (
    <section className="table__literywork">
      {quotation?.literyWorkDetailQuoationDTOs && quotation?.literyWorkDetailQuoationDTOs.length === 0 ? (
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
              <th>Aumento Minorista</th>
              <th>Tipo de Obra Literaria</th>
              <th>Total Normal</th>
            </tr>
          </thead>
          <tbody>
            {quotation!.literyWorkDetailQuoationDTOs!.map((book) => (
              <tr key={book.title}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>$ {roundToThreeDecimals(book.increasedPrice)}</td>
                <td>{book.quantityToPurchase}</td>
                <td>$ {roundToThreeDecimals(book.discountWhoSale)}</td>
                <td>$ {roundToThreeDecimals(book.incresedRetail)}</td>
                <td>{getLiteryWorkType(book.literyWorkType)}</td>
                <td>$ {roundToThreeDecimals(book.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
