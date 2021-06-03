import React, { useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { showOneProduct } from "../actions/products-actions";
import OneProduct from "./OneProduct";

export default function IndividualProduct({ match }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.oneProduct);
  const productNumber = match.params.id;
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productNumber}`
      );
      const parsedData = await response.json();
      showOneProduct(dispatch, parsedData);
    };
    getProducts();
  }, []);

  return (
    <div>
      <OneProduct item={products} />
    </div>
  );
}
