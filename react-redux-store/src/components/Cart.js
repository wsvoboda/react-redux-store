import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="Cart">
      <h1>Cart</h1>
      {cart.map((items) => {
        return (
          <div className="cart-items">
            <img src={items.image} alt="cart-item" />
            <p>{items.title}</p>
            <p>${items.price}</p>
          </div>
        );
      })}
    </div>
  );
}
