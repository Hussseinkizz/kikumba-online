import React, { useState } from "react";
import Header from "./modules/Header";
import { Home, Cart, Checkout, SignUp, Login, Contact, About, TCs, Page404, PasswordReset } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//todo: get product data from database, and parse them to components

const App = () => {
  const [showNav, setShowNav] = useState(false)

  const hideNav = () => {
    showNav && setShowNav(showNav === false)
  }

  return (
    <Router>
    <div id="app" className="font-sans cursor-pointer h-screen">
      <Header 
      toggleNav={() => setShowNav(!showNav)}
      closeNav={hideNav}
      navState={showNav}
       />
      <main className="mt-6"
      onClick={hideNav}>
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
