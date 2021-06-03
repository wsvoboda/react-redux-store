import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProducts } from "../actions/products-actions";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

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
            <p>${item.price}</p>
            <a href={`/products/${item.id}`}>
              <button>See More</button>
            </a>
          </div>
        );
      })}
    </div>
  );
}
