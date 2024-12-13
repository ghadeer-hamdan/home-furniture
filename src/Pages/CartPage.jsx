import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext"; // Correct path
import './CSS/CartPage.css';
import remove from '../Componants/Assets/cart_cross_icon.png'
const CartPage = () => {
  const { cartItem, removeFromCart, getTotalCartItems, getTotalCartAmmout, all_product } = useContext(ShopContext);

  const totalPrice = getTotalCartAmmout();
  const totalItems = getTotalCartItems();
  const discount = 0.1 * totalPrice; // Example 10% discount
  const deliveryFee = 50; // Fixed delivery fee
  const finalTotal = totalPrice - discount + deliveryFee;

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Shopping Cart</h1>
      {totalItems === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {/* Cart Items Section */}
          <div className="cart-items">
            {Object.keys(cartItem).map((itemId) => {
              const quantity = cartItem[itemId];
              if (quantity > 0) {
                const product = all_product.find((prod) => prod.id === parseInt(itemId)); // Find the product by ID
                return (
                  <div key={itemId} className="cart-item">
                    <img src={product.image} alt={product.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{product.name}</h3>
                      <p className="cart-item-subtitle">Set: Colour: {product.color}</p>
                      <div className="cart-item-quantity-controls">
                        <button>-</button>
                        <span>{quantity}</span>
                        <button>+</button>
                      </div>
                      <p className="cart-item-total">Total: JD {(product.new_price * quantity).toFixed(2)}</p>
                    </div>
                    <button className="remove-button" onClick={() => removeFromCart(product.id)}><img src={remove}/></button>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Order Summary Section */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <input type="text" className="discount-voucher" placeholder="Discount voucher" />
            <button className="apply-voucher">Apply</button>
            <div className="summary-details">
              <p>Sub Total: <span>JD {totalPrice.toFixed(2)}</span></p>
              <p>Discount (10%): <span>- JD {discount.toFixed(2)}</span></p>
              <p>Delivery Fee: <span>JD {deliveryFee.toFixed(2)}</span></p>
              <p className="summary-total">Total: <span>JD {finalTotal.toFixed(2)}</span></p>
            </div>
            <button className="checkout-button">Checkout Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
