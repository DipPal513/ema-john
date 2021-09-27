import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../fakedb";
import Product from "../Product/Product";

import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    
    setCart(newCart);
    addToDb(product.key);
    //   console.log(product)
    //   console.log(newCart)
  };
  useEffect(() => {
    console.log("localStorage called");
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        storedCart.push(addedProduct);
      }
      setCart(storedCart);
    }
  }, [products]);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>Item's found: {products.length}</h3>
        {products.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.key}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
