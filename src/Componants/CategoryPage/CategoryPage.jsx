import React, { useState } from "react";
import all_product from "../Assets/all_product";
import ProductCard from "../ProductCard/ProductCard";

// Import category images
import all from "../Assets/loooogoo.png"; 
import sofa1_img from "../Assets/Sofas1.jpg";
import table from "../Assets/table.jpg";
import RockingChair from "../Assets/RockingChair.jpg";
import Bed from "../Assets/ModernPlatformBed.jpg";
import Lamp from "../Assets/ModernFloorLamp.jpg";
import Cabinet from "../Assets/WoodenStorageCabinet.png";
import rag from "../Assets/LargeAreaRug.png";

import "./CategoryPage.css";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === "all"
    ? all_product
    : all_product.filter((product) => product.category === selectedCategory);

  const categories = [
    { category: "all", label: "All Products", image: all },
    { category: "sofas", label: "Sofas & Couches", image: sofa1_img },
    { category: "tables", label: "Tables", image: table },
    { category: "chairs", label: "Chairs", image: RockingChair },
    { category: "beds", label: "Beds", image: Bed },
    { category: "lighting", label: "Lighting", image: Lamp },
    { category: "cabinets", label: "Cabinets", image: Cabinet },
    { category: "rugs", label: "Rugs", image: rag },
  ];

  return (
    <div className="category-page-container">
      <div className="category-navigation">
        {categories.map(({ category, label, image }) => (
          <div
            key={category}
            className={`category-item-card ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            <img src={image} alt={label} className="category-item-image" />
            <h2>{label}</h2>
          </div>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
