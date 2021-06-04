import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  let grandTotalArray = [];
  cart.map((prices) => grandTotalArray.push(prices.price));
  let grandTotal = 0;
  for (let i = 0; i < grandTotalArray.length; i++) {
    grandTotal += grandTotalArray[i];
  }
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
      <p>
        <strong>Grand Total:</strong> ${grandTotal.toFixed(2)}
      </p>
    </div>
  );
}
