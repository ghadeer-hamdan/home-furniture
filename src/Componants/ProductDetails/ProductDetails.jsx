import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import all_product from '../Assets/all_product';
import { ShopContext } from '../../Context/ShopContext';  // Adjusted import path
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = all_product.find((item) => item.id === parseInt(id));
  const { addToCart } = useContext(ShopContext);  // Assuming 'addToCart' function exists in context
  const [quantity, setQuantity] = useState(1);
  const [showCartButton, setShowCartButton] = useState(false);


  const { image, name, new_price, old_price, description, category, colors = [] } = product;

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);  // Add product and quantity to cart
    setShowCartButton(true);  // Show floating cart button
  };
  
  

  return (
    <div className="product-details-container">
      {/* Left Section: Product Image */}
      <div className="left">
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
      </div>

      {/* Right Section: Product Information */}
      <div className="right">
        <div className="product-info">
          <h1>{name}</h1>
          <p>{category}</p>

          <div className="product-pricing">
            <p className="new-price">JD {new_price.toFixed(2)}</p>
            {old_price && <p className="old-price">JD {old_price.toFixed(2)}</p>}
          </div>

          {/* Quantity Control */}
          <div className="product-quantity">
            <label>Quantity: </label>
            <button onClick={() => handleQuantityChange('decrement')}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange('increment')}>+</button>
          </div>

          {/* Description */}
          <p className="description">{description}</p>

          {/* Total Price */}
          <div className="total-price">
            <p>Total: JD {new_price * quantity}</p>
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
