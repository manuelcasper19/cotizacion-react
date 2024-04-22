import { ReactElement } from 'react';
import { useLiteryWork } from '../core/hooks/useLiteryWork';
import { CardLiteryWork } from '../ui/components/Card';

export const LiteyworkContainer = (): ReactElement => {
  const { literywork } = useLiteryWork();   
   return (
    <section className="literywork">
    {literywork.map((literywork) => <CardLiteryWork 
            key={literywork.title} 
            incrasePrice={literywork.incrasePrice} 
            url={literywork.url} 
            title={ literywork.title}
            id={ literywork.id}></CardLiteryWork> )
    
    }   
    </section>
  );
  };