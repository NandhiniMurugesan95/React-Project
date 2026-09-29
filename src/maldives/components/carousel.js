
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// CSS & Data Imports
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CarouselData from './carousel.json';

const Carousel = () => {
  
  return (
    <div  className="relative w-full h-[100dvh]  object-cover overflow-hidden">
      {/* 2. Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
        {CarouselData.map((item) => (
          <SwiperSlide key={item.id} >
            <img 
              src={item.imgSrc} 
              alt={item.alt} 
              id="carousel-img"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
         <div className="absolute inset-0 bg-black/25" />

      {/* 3. படத்திற்கு மேல் வரும் உள்ளடக்கப் பகுதி */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        
        {/* மெயின் டைட்டில் */}
        <h1 className="text-4xl sm:text-6xl md:text-5xl font-serif font-extrabold tracking-widest drop-shadow-lg uppercase mb-2 mt-40">
          Wakeup in paradise
        </h1>

        {/* சப்-டைட்டில் (Tagline) */}
        <p className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-amber-100 drop-shadow-md mb-8">
          A Tropical Haven
        </p>

        {/* Places பக்கத்திற்குச் செல்லும் பட்டன் */}
        <Link
          to="/places"
          className="bg-[#00838f]/90 hover:bg-[#006064] text-white font-semibold text-sm sm:text-base tracking-widest px-8 py-3.5 rounded-md border border-white/30 shadow-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 mb-10 uppercase"
        >
          Explore Our Islands
        </Link>

        {/* கீழுள்ள சிறிய விளக்கம் */}
        <p className="text-sm sm:text-lg md:text-xl font-light tracking-wide text-white/90 drop-shadow max-w-xl">
          Discover the ultimate escape to our coral paradises
        </p>

      </div>
    </div>
  );
};


export default Carousel;