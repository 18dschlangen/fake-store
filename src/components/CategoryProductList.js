import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../styles/CategoryProductList.css";

function CategoryProductList({ addToCart }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) {
    // Render loading skeleton cards
    const skeletonCards = Array.from({ length: 6 }, (_, index) => (
      <div className="product-card loading" key={index}>
        <div className="card-image loading-placeholder"></div>
        <div className="card-content loading-placeholder"></div>
      </div>
    ));

    return <div className="product-list">{skeletonCards}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default CategoryProductList;
