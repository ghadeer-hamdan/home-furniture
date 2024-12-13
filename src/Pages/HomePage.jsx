import React from "react";
import Home from '../Componants/Home/Home';
import Categorys from '../Componants/Categorys/Categorys';
import RoomCategories from '../Componants/RoomCategories/RoomCategories';
import ProductListComponent from '../Componants/ProductListComponent/ProductListComponent';
import Footer from '../Componants/Footer/Footer';

const HomePage = () => {
  return (
    
   <div>
    <Home/>
    <Categorys/>
    <RoomCategories/>
    <ProductListComponent/>
    <Footer/>
  </div>
   
  );
};

export default HomePage;