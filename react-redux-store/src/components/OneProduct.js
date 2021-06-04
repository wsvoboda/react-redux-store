import React from "react";
import { useDispatch } from "react-redux";
import { fillCart } from "../actions/cart-actions";

export default function OneProduct({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="item-container">
      <div className="one-item">
        <h3 id="item-title">{item[0].title}</h3>
        <p id="item-description">{item[0].description}</p>
        <img src={item[0].image} alt="product" id="item-img" />
        <h3 id="item-price">${item[0].price}</h3>
        <button
          id="item-button"
          onClick={() => {
            fillCart(dispatch, item[0]);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
