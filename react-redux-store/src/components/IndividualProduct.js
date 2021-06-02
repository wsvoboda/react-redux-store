import React from "react";
import "../App.css";

export default function IndividualProduct({ match }) {
  const productNumber = match.params.id;

  return (
    <div className="products">
      <h1>Individual Product</h1>
    </div>
  );
}
