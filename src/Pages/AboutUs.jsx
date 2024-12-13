import React from "react";
import "./CSS/AboutUs.css";
import aboutus from '../Componants/Assets/aboutUs.jpg';
import Design1 from '../Componants/Assets/Design1.jpg';
import Design2 from '../Componants/Assets/Design2.jpg';
import Quality from '../Componants/Assets/Quality.jpg';
import Expertise from '../Componants/Assets/Expertise.jpg';
import Customized from '../Componants/Assets/Customized.jpg';
import Footer from "../Componants/Footer/Footer";
const AboutUs = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <div className="category">
        <div className="category-image" style={{ backgroundImage: `url(${aboutus})` }}>
          <div className="overlay">
            <h2>Organize Your Home with Elegance and Enhance Your Space with Us</h2>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <img  src={Design1}/>
          <div className="contantaboutus">
            <h2>About Us</h2>
          
            <p>
            Welcome to <span className="highlight">HOME FURNITURE</span>, your ideal destination for modern and elegant home furniture. We offer a wide variety of high-quality furniture pieces that suit all tastes and spaces, transforming your home into a stylish and functional haven.</p>
       </div>  
        <img  src={Design2}/>     
      </div>    
<div className="servi">
    <div className="sercard">
        <img src={Customized} alt="" />
        <h3>Customized Designs</h3>
        <p>
        We create custom furniture pieces that are perfect for your specific needs and style. We offer free samples and workshops to help you explore your creativity and create something beautiful.
        </p>
    </div>
    <div className="sercard">
        <img src={Expertise} alt="" />
        <h3>Expertise</h3>
        <p>
        We have a team of skilled and experienced designers who can help you create a unique and stylish home. Our designers have extensive experience in creating furniture pieces that are both functional and beautiful.
        </p>
    </div>
    <div className="sercard">
        <img src={Quality} alt="" />
        <h3>Quality</h3>
        <p>
        At Home Furniture, we strive to provide high-quality furniture pieces that are both durable and comfortable for your home. We offer free replacement parts and warranty for our products.
        </p>
    </div>
    
    </div>


     <Footer/>
    </div>
  );
};

export default AboutUs;
