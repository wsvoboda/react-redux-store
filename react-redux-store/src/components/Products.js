import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProducts } from "../actions/products-actions";
import { Link } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const parsedData = await response.json();
      showProducts(dispatch, parsedData);
    };
    getProducts();
  }, []);

  return (
    <div className="Products">
      <h1>Products</h1>
      <div className="card-container">
        {products.map((item) => {
          return (
            <div className="product-cards">
              <p>{item.title}</p>
              <img src={item.image} alt="product" />
              <p>${item.price.toFixed(2)}</p>
              <Link to={`/products/${item.id}`}>
                <button>View More</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
