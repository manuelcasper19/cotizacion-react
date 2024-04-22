import { ReactElement, useContext } from 'react';
import { AppContext } from '../core/states/Appcontext';
import { TableLiteryWork } from '../ui/components/Table';
import { DiscountInfo } from '../ui/elements/TitleTable';

export const QuotionLiteryWorkContainer = (): ReactElement => {
  const { state } = useContext(AppContext);

  if (!state.quoteCompleted || !state.quoteCompleted.literyWorkDetailQuoationDTOs || state.quoteCompleted.literyWorkDetailQuoationDTOs.length === 0) {
    return <p>No hay elementos cotizados</p>;
  }
  const roundToThreeDecimals = (value: number): number => {
    return Number(parseInt(value.toFixed(3)));
  };
  return (
    <div>
      <h2 className="quotionliterywork__title">Detalle de la cotización</h2>
      <DiscountInfo label="Descuento por antiguedad" value={roundToThreeDecimals(state.quoteCompleted.seniorityDiscount)} />
      {state.quoteCompleted.whosaleDiscount ? (
        <DiscountInfo label="Descuento por venta el por mayor" value={roundToThreeDecimals(state.quoteCompleted.whosaleDiscount)} />
      ) : (
        <DiscountInfo label="Aumentado " value={roundToThreeDecimals(state.quoteCompleted.totalIncrease)} />
      )}
      <DiscountInfo label="Total" value={roundToThreeDecimals(state.quoteCompleted.total)} />
      <TableLiteryWork quotation={state.quoteCompleted} />
      <DiscountInfo label="Total a pagar" value={roundToThreeDecimals(state.quoteCompleted.totalPay)} />
    </div>
  );
};