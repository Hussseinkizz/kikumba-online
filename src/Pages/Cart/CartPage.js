import { useHistory } from 'react-router-dom';
import CartFilled from './components/CartFilled';
import CartEmpty from './components/CartEmpty';

const CartPage = ({ cart, updateQuantity, removeFromCart, emptyCart }) => {
  let history = useHistory();

  let handlers = { updateQuantity, removeFromCart, emptyCart }


  return (
    <>
      <section className="p-2 grid place-items-center">
        {cart?.line_items?.length ? (
          <CartFilled cart={cart} {...handlers} history={history} />
        ) : (
          <CartEmpty history={history} />
        )}
      </section>
    </>
  );
};

export default CartPage