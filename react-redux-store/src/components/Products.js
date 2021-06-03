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
    <div>
      <h1>Products</h1>
      {products.map((item) => {
        return (
          <div className="products">
            <p>{item.title}</p>
            <img src={item.image} alt="product" />
            <p>${item.price}</p>
            <Link to={`/products/${item.id}`}>
              <button>View More</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
