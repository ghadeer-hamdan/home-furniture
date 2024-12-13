import React from 'react';
import './Home.css';
import homeimage from '../Assets/loooogoo.png'
const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
      <h1>Spring Collection</h1>
        <p>Discover the latest arrivals in our Spring Collection for 2024. Shop now for modern designs!</p>
        
        <a href="#" className="home-btn">
          <span>Shop Now</span>
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
      <img src={homeimage} alt="Coffee Logo" className="img" />
    </div>
  );
}

export default Home;
