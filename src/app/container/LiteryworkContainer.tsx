import { ReactElement } from 'react';
import { useLiteryWork } from '../core/hooks/useLiteryWork';
import { Card, CardLiteryWork } from '../ui/components/Card';

export const LiteyworkContainer = (): ReactElement => {
  const { literywork } = useLiteryWork();    
  return (
  
    <section className="literywork">
    {/* <ul>        
      {literywork.map((customer) => <li key={customer.title}>{customer.title} {customer.price} {customer.increasePrice}{customer.url}</li>)}
    </ul>    */}
    {literywork.map((literywork) => <CardLiteryWork incrasePrice={literywork.incrasePrice} url={literywork.url} title={ literywork.title}></CardLiteryWork> )
    
    }   
    </section>
  );
  };