import React from "react";

export default function OneProduct({ item }) {
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
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
