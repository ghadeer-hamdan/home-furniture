import React, { createContext, useState, useEffect } from "react";
import all_product from '../Componants/Assets/all_product'; // Correct path

export const ShopContext = createContext(null);

// Get default cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  useEffect(() => {
    console.log(cartItem); // Log cartItem to see the changes
  }, [cartItem]);

  // Function to add product to cart
  const addToCart = (product, quantity) => {
    setCartItem((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + quantity, // Add quantity to cart for this product
    }));
  };

  // Function to remove product from cart
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Ensure quantity doesn't go below 0
    }));
  };

  // Get total amount for the cart
  const getTotalCartAmmout = () => {
    let totalAmount = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  // Get total number of items in the cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  };

  const contextValue = { 
    getTotalCartItems, 
    getTotalCartAmmout, 
    all_product, 
    cartItem, 
    addToCart, 
    removeFromCart 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export { ShopContextProvider };
