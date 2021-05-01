import { useHistory } from "react-router-dom";
import { useStateValue } from "../../hooks/StateProvider";
import CartFilled from "./components/CartFilled";
import CartEmpty from "./components/CartEmpty";
import { getCartTotal } from '../../hooks/StateProvider_Props'
import { formatCurrency } from "../../modules/formatCurrency";

// empty cart

const CartPage = () => {
  const [{ cart }, dispatch] = useStateValue();

  //todo: get back to this after installing currency format
  let total = getCartTotal(cart)

  // formatting product prices
  const formattedTotal = formatCurrency(total)

  // remove all items from cart
  const emptyCart = () => {
    dispatch({
      type: 'EMPTY_CART'
    })
  }

  let history = useHistory();

  return (
    <section className="p-2 grid place-items-center">
    { (cart.length > 0) ? 
    <CartFilled
      history={history}
      total={formattedTotal}
      cart={cart}
      emptyCart={emptyCart}
    /> 
    :
     <CartEmpty history={history}/> }
    </section>
  );
};

export default CartPage;
