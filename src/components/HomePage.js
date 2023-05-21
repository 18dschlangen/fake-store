import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryButton from "./CategoryButton";
import ProductCard from "./ProductCard";
import "../styles/HomePage.css";

function HomePage({ addToCart }) {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/1`) // replace with your API endpoint
      .then((response) => {
        const data = response.data;
        // Apply 10% discount
        data.price = (data.price * 0.9).toFixed(2); // This rounds the price to 2 decimal places
        setProduct(data);
      });
  }, []);

  if (!product) return "Loading...";

  return (
    <div className="home-page">
      <h1>Welcome to Our Fake Store</h1>
      <div>
        {categories.map((category) => (
          <CategoryButton category={category} key={category} />
        ))}
      </div>
      <div className="item-of-the-day">
        <h2>Item of The Day - 10% OFF</h2>
        <ProductCard product={product} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default HomePage;
