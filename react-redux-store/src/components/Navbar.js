import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Cart from "./Cart";
import Landing from "./Landing";
import IndividualProduct from "./IndividualProduct";
import cartpic from "../assets/cart.png";
import logo from "../assets/logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar">
            <div className="logo">
              <img src={logo} alt="logo" id="logo" />
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/products">Products</Link>
            </div>
            <div className="cart-div">
              <Link to="/cart">
                <img className="cart-pic" src={cartpic} alt="shopping-cart" />
              </Link>
              <p>Items in Cart: {cart.length}</p>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={IndividualProduct} />
          <Route exact path="/" component={Landing} />
          <Route path="*" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}
