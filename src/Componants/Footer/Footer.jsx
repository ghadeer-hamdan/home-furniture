import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Discover the new rewarding experience!</h4>
        <p>
          Home Furniture is for everyone. From those whose homes are their passion,
          to those who are just starting out and need a helping hand.
        </p>
        <a href="#" className="button">Join Home Furniture Family</a>
        <a href="#" className="button">Download Home Furniture App</a>
      </div>
      <div className="footer-section">
        <h4>Customer service</h4>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">About services</a></li>
          <li><a href="#">Return policy</a></li>
          <li><a href="#">Spare parts</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>This is Home Furniture</h4>
        <ul>
          <li><a href="#">About Home Furniture</a></li>
          <li><a href="#">Democratic Design</a></li>
          <li><a href="#">Sustainable everyday</a></li>
          <li><a href="#">Community engagement</a></li>
          <li><a href="#">Working at Home Furniture</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Useful links</h4>
        <ul>
          <li><a href="#">How to shop online</a></li>
          <li><a href="#">Home Furniture Business</a></li>
          <li><a href="#">Planning tools</a></li>
          <li><a href="#">Home Furniture brochures</a></li>
          <li><a href="#">Product recalls</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; Inter Home Furniture Systems B.V. 1999-2024</p>
        <p>
          <a href="#">Product support</a> | 
          <a href="#"> Privacy policy</a> |
          <a href="#"> Cookie settings</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
