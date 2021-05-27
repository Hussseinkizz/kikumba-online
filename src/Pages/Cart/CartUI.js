import { useHistory } from 'react-router-dom';
import CartFilled from './components/CartFilled';
import CartEmpty from './components/CartEmpty';

const CartUI = ({ handlers }) => {
  let history = useHistory();
  
  const { cart } = handlers;

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

export default CartUI;
