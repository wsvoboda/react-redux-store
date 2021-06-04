import React from "react";
import "../App.css";
import store from "../assets/store.jpg";

export default function AboutUs() {
  return (
    <div>
      <div className="About">
        <h1>About Us</h1>
        <h3>
          We're the best store, ever. All items are ethically sourced and
          organically made. We give thanks to all our vendors and customers. You
          make this store what it is!
        </h3>
      </div>
      <div className="store">
        <img id="store" src={store} alt="store" />
      </div>
    </div>
  );
}
