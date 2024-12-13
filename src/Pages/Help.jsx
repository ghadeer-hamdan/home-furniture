import React from "react";
import "./CSS/Help.css";

const Help = () => {
  return (
    <div className="help-page">
      <h1>Help Center</h1>
      <p>Welcome to our Help Center! We're here to assist you with any questions or concerns you may have.</p>

      <div className="help-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <ul>
          <li>
            <strong>Q:</strong> How do I place an order? <br />
            <strong>A:</strong> You can place an order by adding items to your cart and proceeding to checkout.
          </li>
          <li>
            <strong>Q:</strong> What is your return policy? <br />
            <strong>A:</strong> You can return any item within 30 days of purchase. Visit our <a href="#return-policy">Return Policy</a> page for more details.
          </li>
          <li>
            <strong>Q:</strong> How can I track my order? <br />
            <strong>A:</strong> Once your order is shipped, you’ll receive a tracking number via email.
          </li>
        </ul>
      </div>

      <div className="help-section">
        <h2>Contact Us</h2>
        <p>If you need further assistance, feel free to reach out to us:</p>
        <ul>
          <li>Email: support@homefurniture.com</li>
          <li>Phone: +123-456-7890</li>
          <li>Live Chat: Available 9 AM - 6 PM (Mon-Fri)</li>
        </ul>
      </div>

      <div className="help-section">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="#how-to-shop">How to Shop Online</a></li>
          <li><a href="#planning-tools">Planning Tools</a></li>
          <li><a href="#product-recalls">Product Recalls</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
