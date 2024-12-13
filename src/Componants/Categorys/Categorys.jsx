import React from 'react';
import './Categorys.css';
import sofa from '../Assets/wood.png';
import chair from '../Assets/Sofas___Couches.png';
import Modular  from '../Assets/SOFÁS.png'
import icon  from '../Assets/Icon1.png'
import { Link } from "react-router-dom";

const Categorys = () => {
  return (
    <div className="Categorys">

<div className="text">
    <h1>Our Categories</h1>
    <p>Discover the latest furniture in our collection by category.</p>
    <div className="cont">
        <img src={icon}alt="" />
        <p>200+<br/>Unique Products</p>
    </div>
    

    <Link to="/product" className="category-btn">
  <span>View All Categories</span>
  <i className="bx bx-right-arrow-alt"></i>
</Link>
</div>

<div className="categoey-type">
<div className="type">
    <img src={chair}alt="" />
        <h2>sofas </h2>
        </div>
    <div className="type">
    <img src={sofa} alt="" />
        
        <h2>tables </h2>
         </div>
    
    <div className="type">
    <img src={Modular} alt="" />
        <h2>Dining chair</h2>
        </div>
</div>
    </div>);
} 
export default Categorys;