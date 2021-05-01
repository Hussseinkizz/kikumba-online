import CartProductCard from './CartProductCard';

const CartFilled = ({ cart, emptyCart, history, total }) => {
  return (
    <>
      <h1 className="flex justify-center w-full text-3xl font-bold text-gray-800 uppercase md:text-4xl lg:text-5xl">
        Thanks For Shopping
      </h1>
      <section className="w-full gap-6 p-4 space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
        {cart.map((cartItem, index) => (
          <CartProductCard
            key={index}
            productId={cartItem.id}
            productQty={cartItem.quantity}
            productName={cartItem.name}
            productImage={cartItem.image}
            productPrice={cartItem.price}
          />
        ))}
      </section>
      <section className="w-full gap-6 p-4 space-y-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
        <div className="block w-full px-2 py-1 space-x-2 font-bold text-center text-white bg-gray-900 rounded md:inline-block">
          <span>Total Pricing</span>
          <span>{total}</span>
        </div>
        <button className="block text-gray-900 bg-red-300 btn hover:bg-red-400 focus:bg-red-500"
        onClick={emptyCart}>
          Remove All Items
        </button>

        <button
          className="block text-gray-900 bg-green-300 btn hover:bg-green-400 focus:bg-green-500"
          onClick={() => history.push("/checkout")}
        >
          Proceed To Checkout
        </button>

        <button
          className="block text-gray-900 bg-yellow-300 btn hover:bg-yellow-400 focus:bg-yellow-500 lg:col-start-1 lg:col-end-4 lg:py-2"
          onClick={() => history.push("/")}
        >
          Continue Shopping
        </button>
      </section>
    </>
  );
};

export default CartFilled;
