import { useHistory } from "react-router-dom";
import CartFilled from './components/CartFilled'
import CartEmpty from './components/CartEmpty'

const CartUI = ({ cart }) => {
  let history = useHistory();

  return (
    <>
    <section className="p-2 grid place-items-center">
    { (cart.length > 0) ? 
    <CartFilled cart={cart} history={history} /> : <CartEmpty history={history}/> }
    </section>
    </>
  )
}

export default CartUI
