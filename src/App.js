import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './maldives/components/nav'; // உங்க nav.js ஃபைல் பாதை
import Carousel from './maldives/components/carousel';
import Home from './maldives/home';
import History from './maldives/history';
import Places from './maldives/places';
import Food from './maldives/food';
import Travel from './maldives/travel';
import Shopping from './maldives/shopping';
import Contact from './maldives/contact';
import Footer from './maldives/components/footer';

import './index.css';

function Home1() {
  return (
    <Router>
      <div className="relative">
        {/* 1. Navbar எப்போதும் மேலே இருக்கும் */}
        <Navbar />

        {/* 2. Routes - Home பக்கத்தில் Carousel மட்டும் காட்டப்படும் */}
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/places" element={<Places />} />
          <Route path="/food" element={<Food />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
<Footer/>
    </Router>
  );
}

export default Home1;