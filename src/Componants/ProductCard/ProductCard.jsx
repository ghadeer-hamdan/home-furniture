import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, image, name, new_price, old_price, discount, reviews } = product;
  const navigate = useNavigate(); // Initialize navigate function

  const handleCardClick = () => {
    navigate(`/product/${id}`); // Navigate to the product detail page
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      {/* Discount Badge */}
      {discount && <div className="discount-badge">-{discount}%</div>}
<div className="centerimg">
      <img src={image} alt={name} className="product-image" />
</div>
      <div className="product-info">
        {/* Rating and Reviews */}
        <div className="product-rating">
          <span className="stars">★★★★☆</span>
          <span className="review-count">({reviews} reviews)</span>
        </div>

        <h3 className="product-name">{name}</h3>

        {/* Pricing */}
        <div className="product-pricing">
          <span className="new-price">${new_price.toFixed(2)}</span>
          {old_price && <span className="old-price">${old_price.toFixed(2)}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
