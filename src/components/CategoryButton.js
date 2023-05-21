import React from "react";
import { Link } from "react-router-dom";
import "../styles/CategoryButton.css";

const CategoryButton = ({ category }) => (
  <Link to={`/category/${category}`}>
    <button type="button" className="button">
      {category}
    </button>
  </Link>
);

export default CategoryButton;
