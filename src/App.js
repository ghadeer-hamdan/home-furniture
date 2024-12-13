import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componants/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import CartPage from './Pages/CartPage';
import ProductDetails from './Componants/ProductDetails/ProductDetails';
import './App.css';
import Productpage from './Pages/Productpage';

// Import the ShopContext and ShopProvider
import { ShopContextProvider } from './Context/ShopContext'; // Correct named import

const App = () => {
  return (
    <ShopContextProvider> {/* Wrap the entire Router with the ShopProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/CartPage" element={<CartPage />} /> {/* Cart page route */}
        </Routes>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
