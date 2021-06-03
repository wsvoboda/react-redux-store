import React from "react";
import { useDispatch } from "react-redux";
import { fillCart } from "../actions/cart-actions";

export default function OneProduct({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="item-container">
      <div className="one-item">
        <h3 id="item-title">{item.title}</h3>
        <p id="item-description">{item.description}</p>
        <img src={item.image} alt="product" id="item-img" />
        <h3 id="item-price">${item.price}</h3>
        <button
          id="item-button"
          onClick={() => {
            fillCart(dispatch, item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
