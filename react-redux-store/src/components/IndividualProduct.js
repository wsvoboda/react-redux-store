import React from "react";
import "../App.css";

// export default function IndividualProduct({ match }) {
export default function IndividualProduct({ item }) {
  // const productNumber = match.params.id;

  return (
    <div className="products">
      <h1>Individual Product</h1>
      <p>{item.title}</p>
      <img src={item.image} alt="product" />
      <p>{item.description}</p>
      <p>${item.price}</p>
      <label>Qty</label>
      <input type="number"></input>
      <button>Add to Cart</button>
    </div>
  );
}
