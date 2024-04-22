import { ReactElement, useContext } from 'react';
import { AppContext } from '../core/states/Appcontext';
import RecommendationComponent from '../ui/components/Recommendation';
import { useNavigate } from 'react-router-dom';
export const RecommendationContainer = (): ReactElement => {
  const { state, dispatch } = useContext(AppContext);
  const recommendationData = state.recommendationWithBudget;
  const navigate = useNavigate();

  const handleResetQuote = () => {
    dispatch({ type: 'RESET_QUOTE' });
    navigate('/');
  };
  return (
    <RecommendationComponent recommendationData={recommendationData} onResetQuote={handleResetQuote} />
  );
};