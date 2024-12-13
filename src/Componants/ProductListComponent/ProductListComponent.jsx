import React, { useState } from "react";
import all_product from "../Assets/all_product"; // Array of products
import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductListComponent.css";

const ProductListComponent = () => {
  const [displayedProducts, setDisplayedProducts] = useState(all_product.slice(0, 8)); // Initial product display
  const [productCount, setProductCount] = useState(8);

  const loadMoreProducts = () => {
    const nextCount = productCount + 8;
    setDisplayedProducts(all_product.slice(0, nextCount));
    setProductCount(nextCount);
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    let sortedProducts = [...all_product];
    if (sortValue === "price-low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "rating-high-low") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setDisplayedProducts(sortedProducts.slice(0, productCount));
  };

  return (
    <div className="continar">
      <div className="navproduct">
        <h2>Hot Products</h2>
        <ul className="nav-product">
          <li><a href="#">LATEST PRODUCTS</a></li>
          <li><a href="#">TOP RATING</a></li>
          <li><a href="#">BEST SELLERS</a></li>
        </ul>
        <div className="sort-by">
          <select name="sort" id="sort" onChange={handleSort}>
            <option value="default">All Products</option>
            <option value="price-low-high">Price (Low to High)</option>
            <option value="price-high-low">Price (High to Low)</option>
            <option value="rating-high-low">Rating (High to Low)</option>
          </select>
        </div>
      </div>
      <div className="product-list">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {productCount < all_product.length && (
        <div className="btnproduct-container">
          <button className="btnproduct" onClick={loadMoreProducts}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
  
};

export default ProductListComponent;
