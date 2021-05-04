import { useHistory } from "react-router-dom";
import { useStateValue } from "../../hooks/StateProvider";
import CartFilled from "./components/CartFilled";
import CartEmpty from "./components/CartEmpty";

// empty cart

const CartPage = () => {
const [{ cart }] = useStateValue();

  let history = useHistory();

  return (
    <section className="p-2 grid place-items-center">
    { (cart.length > 0) ? 
    <CartFilled history={history} /> : <CartEmpty history={history}/> }
    </section>
  );
};

export default CartPage;
