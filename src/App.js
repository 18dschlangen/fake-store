import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CategoryProductList from "./components/CategoryProductList";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productID) => {
    setCart(cart.filter((product) => product.id !== productID));
  };

  return (
    <Router>
      <div className="app">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/products/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/category/:category"
            element={<CategoryProductList addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
