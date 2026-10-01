import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  
  const isHomePage = location.pathname === '/' || location.pathname === '/index';

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'History', path: '/history' },
    { name: 'Places', path: '/places' },
    { name: 'Food', path: '/food' },
    { name: 'Shopping', path: '/shopping' },
    { name: 'Travel', path: '/travel' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`${
        isHomePage
          ? 'fixed top-0 left-0 z-50 bg-transparent text-white'
          : 'fixed top-0 left-0 z-50 custom-nav-bg shadow-md'
      } w-full z-100 px-6 py-4 transition-all duration-300 `}
    >
      <div className="flex items-center  justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="/images/loco_3.png"
              alt="logo"
              className="h-10 w-10 md:h-12 scale-200 md:scale-250 md:origin-left  object-contain"
            />
          </Link>
        </div>

        {/* Laptop View */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-gray-300 font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
       </div>
        
  
        {/* Mobile View Hamburger */}
        
          <div className="md:hidden flex items-center ml-80 -mt-8">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
   

      {/* Mobile Menu Links */}
      
        <div
        className={`fixed inset-0 bg-blue-800 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* க்ளோஸ் (X) பட்டன் - வலது ஓரத்தில் */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white focus:outline-none p-2"
          aria-label="Close Menu"
        >
          ✕
        </button>

        {/* ஃபுல் வியூவில் சென்டராக வரும் மெனு ஐட்டங்கள் */}
        <ul className="flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={() => setIsOpen(false)} // லிங்க் கிளிக் செய்தவுடன் மெனு மூடிக்கொள்ளும்
                className="hover:text-amber-300 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};



export default Navbar;
