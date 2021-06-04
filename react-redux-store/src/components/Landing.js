import React from "react";
import { Link } from "react-router-dom";
import bag from "../assets/bag.jpg";
import "../App.css";

export default function Landing() {
  return (
    <div className="Landing">
      <h1>Welcome to Odds & Ends!</h1>
      <h3>Estabilished in 2021, we provide a way to find all random things.</h3>
      <h3>Take a look!</h3>
      <Link id="button-link" to="/products/">
        <button>Products</button>
      </Link>
      <img id="bag" src={bag} alt="bag" />
    </div>
  );
}
