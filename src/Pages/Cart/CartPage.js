import { useCart } from "../../hooks/useFetchHooks";
import { ErrorUI, FetchUI, LoaderUI } from "../../modules/StateModules";
import CartUI from "./CartUI";

const CartPage = () => {
  const { status, data, error, isFetching } = useCart();

    switch (status) {
      case "loading":
        return <LoaderUI />;
  
      case "error":
        return <ErrorUI error={error}/>
  
      case "success":
        return <CartUI cart={data}/>
  
      default:
        return <FetchUI fetching={isFetching}/>
  
      }
    }

export default CartPage;
