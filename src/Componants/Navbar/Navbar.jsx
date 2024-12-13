import React, { useContext } from 'react';
import logo from '../Assets/one.png';
import './Navbar.css';
import 'boxicons/css/boxicons.min.css';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const {getTotalCartItems } = useContext(ShopContext);
  return (
<div className="navbar">
  {/* Left Section */}
  <div className="navbar-left">
    <img src={logo} className="logo" alt='logo' />
    <ul className="nav-links">
      <li>
        <NavLink to="/" activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/product" activeClassName="active">Products</NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </li>
    </ul>
  </div>

  
  <div className="navbar-right">
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <i className="bx bx-search search-icon"></i>
    </div>

    <div className="icon">
      <div className="icon-container">
        <i className="bx bxl-facebook icon"></i>
      </div>
      <div className="icon-container">
        <i className="bx bxl-instagram icon"></i>
      </div>
      <div className="icon-container">
        <i className="bx bxl-twitter icon"></i>
      </div>
    </div>

    <div className="divider"></div>
    <NavLink to="/CartPage" style={{textDecoration:'none'}}><button className="btn">Shop Now</button></NavLink>
     <div className="nav-cart-count">{getTotalCartItems()}</div>     
  </div>
</div>
 );
};

export default Navbar;