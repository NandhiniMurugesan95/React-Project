import React from 'react';
import {Link} from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2A7589] text-white pt-12 pb-6 px-6 md:px-16 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        
        {/* Section 1: Logo & Description */}
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center font-bold text-lg">
              C
            </div>
            <span className="text-xl font-bold tracking-wider">CORAL MALDIVES</span>
          </div>
          <p className="text-xs text-gray-200 leading-relaxed">
            Experience the Maldives like never before. From overwater villas to diving adventures, your paradise awaits.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-teal-500 pb-1 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xs text-gray-200">
            <li><Link to="/home">Home</Link></li>
             <li> <Link to="/places">Places</Link></li>
            <li> <Link to="/food">Food</Link></li>
            <li><Link to="/travel">Travel</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/shopping">Shopping</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Option 1: Contact Info */}
<div>
  <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b  font-serif  border-teal-500 pb-1 inline-block">
    Contact Us
  </h3>
  <ul className="space-y-3 text-xs text-gray-200">
    <li className="flex items-start space-x-2">
      <span className="font-semibold">Address:</span>
      <span>H. Coral View, Boduthakurufaanu Magu, Malé, Maldives</span>
    </li>
    <li className="flex items-center space-x-2">
      <span className="font-semibold">Phone:</span>
      <span>+960 331 4567</span>
    </li>
    <li className="flex items-center space-x-2">
      <span className="font-semibold">Email:</span>
      <a href="mailto:info@coralmaldives.com" className="hover:underline">info@coralmaldives.com</a>
    </li>
    <li className="flex items-center space-x-2">
      <span className="font-semibold">Hours:</span>
      <span>24/7 Customer Support</span>
    </li>
  </ul>
</div>

       {/* Option 3: Why Choose Us */}
<div>
  <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-teal-500 pb-1 inline-block">
    Why Choose Us
  </h3>
  <ul className="space-y-2 text-xs text-gray-200">
    <li className="flex items-center space-x-2">
      <span>✔ 100% Best Price Guarantee</span>
    </li>
    <li className="flex items-center space-x-2">
      <span>✔ Verified Luxury Resorts</span>
    </li>
    <li className="flex items-center space-x-2">
      <span>✔ 24/7 Island Support</span>
    </li>
    <li className="flex items-center space-x-2">
      <span>✔ Free Cancellation Options</span>
    </li>
    <li className="flex items-center space-x-2">
      <span>✔ Custom Travel Packages</span>
    </li>
  </ul>
</div>
       {/* Option 2: Top Destinations */}
<div>
  <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-teal-500 pb-1 inline-block">
    Top Destinations
  </h3>
  <ul className="space-y-2 text-xs text-gray-200">
    <li><a href="#male" className="hover:underline">Malé Atoll Tours</a></li>
    <li><a href="#ari" className="hover:underline">Ari Atoll Resorts</a></li>
    <li><a href="#baa" className="hover:underline">Baa Atoll Biosphere</a></li>
    <li><a href="#overwater" className="hover:underline">Luxury Overwater Villas</a></li>
    <li><a href="#scuba" className="hover:underline">Scuba Diving Packages</a></li>
  </ul>
<br/>
          
          <div className="flex space-x-3 text-lg">
            <a href="#facebook" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#instagram" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#twitter" className="hover:text-gray-300"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-teal-600/50 pt-4 mt-8 text-center text-xs text-gray-300 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>© 2024 Coral Maldives. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#terms" className="hover:underline">Terms of Service</a>
          <span>|</span>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#sitemap" className="hover:underline">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
