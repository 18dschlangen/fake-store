import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/CategoryNav.css";

const CategoryNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <nav className="nav">
      {categories.map((category) => (
        <Link to={`/category/${category}`} key={category}>
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;
