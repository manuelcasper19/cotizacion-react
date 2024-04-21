import { ReactElement, useContext } from "react";
import { AppContext } from "../core/states/Appcontext";
import { TableLiteryWork } from "../ui/components/Table";

export const QuotionLiteryWorkContainer = (): ReactElement => {
  const { state } = useContext(AppContext);
//   const { handleQuote } = useShoppingCart();

  return (
    <div>
    <h2>Detalle de la cotización</h2>
    <h3>Descuento por antiguedad: $ {state.quote.seniorityDiscount}</h3>
    <h3>Descuento por venta el por mayor: $ {state.quote.whosaleDiscount}</h3>
    <h3>Total: $ {state.quote.total}</h3>
    <h3>Total a pagar: $ {state.quote.totalPay}</h3>
    <TableLiteryWork quotation={state.quote} />
  </div>
  );
};