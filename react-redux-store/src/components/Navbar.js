import React from "react";
import "../App.css";

import AboutUs from "./AboutUs";
import Products from "./Products";
import Cart from "./Cart";
import Landing from "./Landing";
import cart from "../assets/cart.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">
              <img className="cart" src={cart} alt="shopping-cart" />
            </Link>
          </nav>
        </div>
        <Switch>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="*">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
