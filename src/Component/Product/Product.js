import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  const { name, img, price, stock, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <h3 className="product-name">{name}</h3>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>Price: ${price}</p>
        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
        <button
          className="purchase-btn"
          onClick={() => props.handleAddToCart(props.product)}
        >
          {element} add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
