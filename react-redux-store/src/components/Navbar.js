import React from "react";
import "../App.css";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Cart from "./Cart";
import Landing from "./Landing";
import IndividualProduct from "./IndividualProduct";
import cartpic from "../assets/cart.png";

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
              <img className="cart" src={cartpic} alt="shopping-cart" />
            </Link>
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
