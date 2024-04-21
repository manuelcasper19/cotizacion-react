import  { ReactElement } from 'react';

interface RecommendationComponentProps {
  recommendationData: any; 
}

const RecommendationComponent = ({ recommendationData }: RecommendationComponentProps): ReactElement => {
  return (
    <div className="recommendation-card">
      <h2>Recomendación con presupuesto:</h2>
      <ul>
        {Object.entries(recommendationData).map(([book, quantity]) => (
          <li key={book}>
            <span>{book}: </span>
            <span>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationComponent;