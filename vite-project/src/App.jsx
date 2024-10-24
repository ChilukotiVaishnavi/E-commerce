import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Saree from '../files/sarees';
import Shirt from '../files/shirt';
import Tshirt from '../files/tshirt';
import Footwear from '../files/footwear';
import Handbag from '../files/hand';
import Sports from '../files/sports';
import Skirt from '../files/skirts';
import AddToCart from '../files/cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart and show an alert message
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Add item to cart
    alert(`${item.title} has been added to your cart!`); // Show alert message
  };
  return (
    <div style={{backgroundColor:'#FFABAB'}}>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/sarees" element={<Saree addToCart={addToCart} />} />
          <Route path="/shirt" element={<Shirt addToCart={addToCart}/>} />
          <Route path="/tshirt" element={<Tshirt addToCart={addToCart}/>} />
          <Route path="/footwear" element={<Footwear addToCart={addToCart}/>} />
          <Route path="/hand" element={<Handbag addToCart={addToCart} />} />
          <Route path="/sports" element={<Sports addToCart={addToCart} />} />
          <Route path="/skirts" element={<Skirt addToCart={addToCart} />} />
          <Route path="/cart" element={<AddToCart cartItems={cartItems} />} />
          {/* <Route path="/home" element={<Header />} /> */}
        </Routes>
      </div>
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default App;

