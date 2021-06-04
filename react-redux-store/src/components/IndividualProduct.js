import React, { useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { showOneProduct } from "../actions/products-actions";
import OneProduct from "./OneProduct";

export default function IndividualProduct({ match }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.oneProduct);
  const allProds = useSelector((state) => state.products.allProducts);
  const productNumber = parseInt(match.params.id);
  useEffect(() => {
    const getProducts = () => {
      const oneProduct = allProds.filter((prod) => prod.id === productNumber);
      showOneProduct(dispatch, oneProduct);
    };
    getProducts();
  }, []);

  return (
    <div>
      <OneProduct item={products} />
    </div>
  );
}
