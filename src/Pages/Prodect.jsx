import React from "react";
import all_product from "../Componants/Assets/all_product";
import ProductCard from "../Componants/ProductCard/ProductCard";
import './CSS/Product.css'
const Product = () => {
  return (
    <div className="product-list">
      {all_product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
