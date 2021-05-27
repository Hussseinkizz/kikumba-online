import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './api/commerce';

//* 👍 new way of importing multiple pages, looks pro! -- experimental
import * as Pages from './Pages';
import Header from './modules/Header';

export default function App() {
  const [cart, setCart] = useState({});

  // fetching our cart items 👨‍🏭
  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    getCart();
  }, []);

  // getting total number of cart items 🤔
  let totalItems = cart?.total_items;

  // adding an item to cart 🤣
  let quantity = 1;
  const handleAddToCart = async (productId) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  // updating item quantity in the cart 🙂
  const handleUpdateQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  // removing an item from cart 🤫
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  // emptying the entire cart 🙄
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  return (
    <Router>
      <div id="app" className="cursor-pointer h-screen font-sans">
        <Header totalCartItems={totalItems} />
        <main className="mt-6">
          <Switch>
            <Route exact path="/">
              <Pages.Home
                onAddToCart={handleAddToCart}
              />
            </Route>
            <Route exact path="/cart">
              <Pages.Cart
                cart={cart}
                updateQuantity={handleUpdateQty}
                removeFromCart={handleRemoveFromCart}
                emptyCart={handleEmptyCart}
              />
            </Route>
            <Route path="/checkout" exact component={Pages.Checkout} />
            <Route path="/signup" exact component={Pages.SignUp} />
            <Route path="/login" exact component={Pages.Login} />
            <Route path="/contact" exact component={Pages.Contact} />
            <Route path="/about" exact component={Pages.About} />
            <Route path="/terms-and-conditions" exact component={Pages.TCs} />
            <Route
              path="/password-reset"
              exact
              component={Pages.PasswordReset}
            />
            <Route path="*" exact component={Pages.Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
