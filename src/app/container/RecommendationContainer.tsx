import  { ReactElement, useContext } from 'react'
import { AppContext } from '../core/states/Appcontext';
import RecommendationComponent from '../ui/components/Recommendation';

export const RecommendationContainer = (): ReactElement => {
  const { state } = useContext(AppContext);
  const recommendationData = state.recommendationWithBudget;

  return (
    <RecommendationComponent recommendationData={recommendationData} />
  );
};