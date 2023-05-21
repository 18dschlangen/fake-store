import React from "react";
import "../styles/Cart.css";

function Cart({ cart, removeFromCart }) {
  const getTotal = () => {
    return cart.reduce((sum, { price }) => sum + Number(price), 0);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <h2>{item.title}</h2>
            <p>${Number(item.price).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove from Cart
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${getTotal().toFixed(2)}</h2>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
