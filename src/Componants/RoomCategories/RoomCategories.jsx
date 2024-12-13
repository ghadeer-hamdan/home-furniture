import React from 'react';
import './RoomCategories.css'; // Assuming you have a CSS file for styling
import livingRoomImage from '../Assets/download.jpg'; // Update path accordingly
import diningRoomImage from '../Assets/diner.jpg'; // Update path accordingly

const RoomCategories = () => {
  return (
    <div className="room-categories">
      <div className="category">
        <div className="category-image" style={{ backgroundImage: `url(${livingRoomImage})` }}>
          <div className="overlay"> 
            <div className="text-container">
              <p>25% off all orders</p> 
              <h3>Living Room</h3>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <div className="category-image" style={{ backgroundImage: `url(${diningRoomImage})` }}>
          <div className="overlay">
            <div className="text-container">
              <p>25% off all orders</p>
              <h3>Dining Room</h3>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCategories;
