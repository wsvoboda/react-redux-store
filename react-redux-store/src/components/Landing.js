import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Landing() {
  return (
    <div className="Landing">
      <h1>Welcome to Odds & Ends!</h1>
      <h3>Estabilished in 2021, we provide a source of all random things</h3>
      <h3>Have a look!</h3>
      <Link to="/products/">
        <button>Products</button>
      </Link>
    </div>
  );
}
