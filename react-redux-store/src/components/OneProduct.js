import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fillCart } from "../actions/cart-actions";

export default function OneProduct({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Individual Product</h1>
      <div className="products">
        <p>{item.title}</p>
        <p>{item.description}</p>
        <img src={item.image} alt="product" />
        <p>${item.price}</p>
        <label>Qty</label>
        <input type="number" placeholder="1" min="0"></input>
        <button
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
