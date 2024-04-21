import  { ReactElement } from 'react';
import './style.css';
interface RecommendationComponentProps {
  [book: string]: number;
}

const RecommendationComponent = ({ recommendationData }: RecommendationComponentProps): ReactElement => {
  if (!recommendationData) {
    return <p className="recomendation__empty">No hay datos de recomendación</p>;
  }
  return (
    <div className="recommendation__card">
      <h2 className="recommendation__title">Recomendación con presupuesto:</h2>
      <div className="recommendation__subcard">   
      <ol> {Object.entries(recommendationData).map(([book, quantity]) => (
          <li key={book}>
            <span>{book} </span>
            <span>{quantity}</span>
          </li>
        ))}
      </ol> 
      </div>     
    </div>
  );
};
export default RecommendationComponent;