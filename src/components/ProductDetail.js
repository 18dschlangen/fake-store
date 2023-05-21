import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };

  if (!product) return "Loading...";

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail__info">
        <h2 className="product-detail__title">{product.title}</h2>
        <p className="product-detail__description">{product.description}</p>
        <p className="product-detail__price">${product.price}</p>
        <button
          className="product-detail__add-to-cart"
          onClick={handleAddToCart}
          disabled={addedToCart}
        >
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
