import  { ReactElement } from 'react'
import { useLiteryWork } from '../../core/hooks/useLiteryWork';


const Home = () : ReactElement => {
    const { literywork } = useLiteryWork();
  
    return (
      <section>
      <h1>HOME</h1> 
      <ul>
        
        {literywork.map((customer) => <li key={customer.title}>{customer.title} {customer.price} {customer.incrasePrice}</li>)}
      </ul>   
      </section>
    )
}

export default Home