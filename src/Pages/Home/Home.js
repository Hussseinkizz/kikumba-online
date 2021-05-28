import { useProducts } from '../../hooks/useFetchHooks';
import { ErrorUI, FetchUI, LoaderUI } from '../../modules/StateModules';
import HomeUI from './HomeUI';

// smart component --> Home

const Home = ({ onAddToCart }) => {
  const { status, data, error, isFetching } = useProducts();

  switch (status) {
    case 'loading':
      return <LoaderUI />;

    case 'error':
      return <ErrorUI error={error} />;

    case 'success':
      return <HomeUI 
      products={data} 
      addToCart={onAddToCart} 
   />;

    default:
      return <FetchUI fetching={isFetching} />;
  }
};

export default Home;
