import Header from "./modules/Header";
import { useDispatch } from './states/clientState/StoreProvider'
import { Home, Cart, Checkout, SignUp, Login, Contact, About, TCs, Page404, PasswordReset } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//todo: get product data from database, and parse them to components

const App = () => {
  const dispatch = useDispatch();

  const hideMenu = () => {
    dispatch({
      type: 'HIDE_MENU'
    })
  }

  return (
    <Router>
    <div id="app" className="cursor-pointer h-screen font-sans">
      <Header/>
      <main className="mt-6"
      onClick={hideMenu}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={Login} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/about' exact component={About} />
            <Route path='/terms-and-conditions' exact component={TCs} />
            <Route path='/password-reset' exact component={PasswordReset} />
            <Route path='*' exact component={Page404} />
          </Switch>
      </main>
    </div>
    </Router>
  );
};

export default App;
