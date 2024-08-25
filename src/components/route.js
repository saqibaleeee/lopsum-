import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Feature from './feature';
import Header from './header';
import Product from './product';
import Video from './video';
import Frequent from './frequent';


function Main() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/video" element={<Video />} />
        <Route path="/frequent" element={<Frequent />} />


        
      </Routes>
    </Router>
  );
}

export default Main;
