import React from "react";
import "./Cart.css";
const Cart = (props) => {
  let total = 0;
  for (const product of props.cart) {
    total += product.price;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order summary</h3>
      <h5>Item Ordered: {props.cart.length}</h5>
      <h5>tax: {grandTotal}</h5>
      <h5>Total: {total.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
