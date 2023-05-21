import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const shortDescription =
    product.description.split(" ").slice(0, 10).join(" ") + "...";

  const handleAddToCart = (product) => {
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-content">
        <h2>{product.title}</h2>
        <p>{shortDescription}</p>
        <div className="card-bottom">
          <p>${product.price}</p>
          <button
            className={`product-detail__add-to-cart ${
              isAdded ? "added-to-cart" : ""
            }`}
            disabled={isAdded}
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
          >
            {isAdded ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
