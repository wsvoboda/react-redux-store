import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import IndividualProduct from "./IndividualProduct";
import { showProducts } from "../actions/products-actions";
// import { fillCart } from "../actions/cart-actions";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const parsedData = await response.json();
      showProducts(dispatch, parsedData);
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {products.map((item) => {
        return (
          <div className="products">
            <p>{item.title}</p>
            <img src={item.image} alt="product" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <label>Qty</label>
            <input type="number" placeholder="1" min="0"></input>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
