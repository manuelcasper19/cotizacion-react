import { ReactElement, useContext } from "react";
import { AppContext } from "../core/states/Appcontext";
import { TableLiteryWork } from "../ui/components/Table";
import { DiscountInfo } from "../ui/elements/TitleTable";

export const QuotionLiteryWorkContainer = (): ReactElement => {
  const { state } = useContext(AppContext);
//   const { handleQuote } = useShoppingCart();

  return (
    <div>
    <h2>Detalle de la cotización</h2>
    <DiscountInfo label="Descuento por antiguedad: $ " value={state.quote.seniorityDiscount} />
    <DiscountInfo label="Descuento por venta el por mayor: $ " value={state.quote.whosaleDiscount} />
    <DiscountInfo label="Total: $ " value={state.quote.total} /> 
    <TableLiteryWork quotation={state.quote} />
    <DiscountInfo label="Total a pagar: $ " value={state.quote.totalPay} /> 
  </div>
  );
};