import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useState } from 'react';
import { Search, X, SlidersHorizontal, MapPin, Compass, DollarSign, Calendar } from 'lucide-react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HomeData from './home.json'


//search bar

const SearchBarModal = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedTripType, setSelectedTripType] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      searchQuery,
      selectedDestination,
      selectedTripType,
      selectedBudget,
      selectedDuration,
    });
    // Search logic or API integration here
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 1. Header / Hero - Top Corner Search Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-3  bg-white/80 hover:bg-white text-teal-700 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-teal-100 flex items-center justify-center "
        title="Search Resorts & Packages"
      >
        <Search className="w-6 h-6" />
      </button>

      {/* 2. Expanded Search Overlay / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 px-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 font-serif italic">
              <Search className="w-5 h-5 text-teal-600" />
              Find Your Maldives Vacation
            </h2>

            {/* Main Search Input */}
            <form onSubmit={handleSearch}>
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search resorts, islands, or activities (e.g. Adaaran, Scuba Diving)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border  font-serif italic  border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-gray-800 placeholder-gray-400 text-base"
                />
                <Search className="w-6 h-6 text-gray-400 absolute left-4 top-3.5  font-serif italic" />
              </div>

              {/* Filters Section Header */}
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold  font-serif italic text-gray-600">
                <SlidersHorizontal className="w-4 h-4 text-teal-900" />
                <span>Filter Your Search</span>
              </div>

              {/* Filters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                
                {/* Filter 1: Destination */}
                <div className="flex flex-col  font-serif italic">
                  <label className="text-xs font-medium text-gray-900 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Destination
                  </label>
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="p-2.5 bg-gray-50  font-serif italic border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="">All Islands / Atolls</option>
                    {data.destinations.map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter 2: Trip Type */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium  font-serif italic text-gray-900 mb-1 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" /> Trip Type
                  </label>
                  <select
                    value={selectedTripType}
                    onChange={(e) => setSelectedTripType(e.target.value)}
                    className="p-2.5 bg-gray-50 border border-gray-200  font-serif italic rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="">All Travel Styles</option>
                    {data.tripTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter 3: Budget */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium  font-serif italic text-gray-900 mb-1 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" /> Budget Per Person
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="p-2.5 bg-gray-50 border border-gray-200 font-serif italic  rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="">Any Budget</option>
                    {data.budgetRanges.map((b, index) => (
                      <option key={index} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filter 4: Duration */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium  font-serif italic text-gray-900 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Duration
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="p-2.5 bg-gray-50 border border-gray-200  font-serif italic rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="">Any Duration</option>
                    {data.durations.map((d, index) => (
                      <option key={index} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Trending Tags */}
              <div className="mb-6">
                <span className="text-xs font-medium text-gray-900  font-serif italic block mb-2">Popular Searches:</span>
                <div className="flex flex-wrap gap-2">
                  {data.popularTags.map((tag, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1 bg-teal-50  font-serif italic hover:bg-teal-100 text-teal-700 text-xs rounded-full transition"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium  font-serif italic text-gray-600 hover:bg-gray-100 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5  font-serif italic bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-xl shadow-lg shadow-teal-600/30 transition"
                >
                  Search Packages
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};




//main image
function MainImage({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-130 object-cover overflow-hidden pt-10">
      
 
        {images.map((item) => (
          
            <img 
            key={item.id}
              src={item.imgSrc} 
              alt={item.alt} 
              id="1"
              className="w-full h-full object-cover  object-center "
            />


        ))}
            <div className="absolute inset-0 bg-black/25" />
         
               
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                 
              
                 <h1 className="text-3xl sm:text-5xl md:text-4xl font-serif font-extrabold tracking-widest drop-shadow-lg uppercase mb-2 mt-40">
                   Book Your Heaven 
                 </h1>
         
               
                 <p className="text-2xl sm:text-4xl md:text-4xl font-serif italic text-amber-100 drop-shadow-md mb-8">
                   Experience breathtaking overwater villas and untouched turquoise waters.
                 </p>
         
                 <div >
               <Link className=" mt-7  rounded-xl  border  border-white/40  bg-cyan-700/70  px-6  py-3 text-sm font-semibold  tracking-wide text-white  shadow-lg  backdrop-blur-sm  transition-all duration-300  hover:scale-105 hover:bg-cyan-600
                        hover:shadow-2xl  sm:px-8  sm:py-3.5  sm:text-base" to="/places">
           
                   Explore Our Islands
                 </Link>
         
               </div>
         
               </div>
     
               </div>
           );
         };
        
     //why visit maldives//

   const WhyVisit = ({ Details = [] }) => {
  return (

    
    <div  class="text-center text-4xl pt-5 font-serif italic mt-10 ">Why Visit Maldives

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 mx-10 ">

      {Details.map((item) => (
 
        <div className="border-1 p-2  hover:shadow-2xl hover:-translate-y-2">
          <img src={item.image} alt={item.title} className="w-full h-50 object-cover"/>

          <h3 className="font-bold text-2xl mt-1 mb-5">{item.title}</h3>

         
              <div className="  text-sm -mt-1">{item.description}</div>
               
          </div>
      ))}
    </div>
      <br />
        <br />
    </div>		    
  );
}

//*popular destinations*//

function CarouselSection({ images }) {
  return (

    <div className="w-full overflow-hidden ">

    <div  className="relative  w-full ">

      <p className="text-5xl font-sherif italic text-center  center-justify text-amber-900 ">Popular Destinations</p><br />
      
      {/* 2. Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}  
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} >

            <div style={{ position: 'relative', width: '100%' }}>
              <img 
                    src={item.image} 
                    alt={item.alt} 
                 className="w-full h-[600px] object-cover"
              
            />
                   <div id="background_blur" className="absolute  right-4 top-1/2  -translate-y-1/2 rounded-2xl p-5  sm:right-5 sm:w-full md:right-8 md:w-full lg:right-12 lg:w-[32%]">

                    <h3 class="space-y-1.5 sm:space-y-2 md:space-y-3  sm:text-sm md:text-3xl font-serif italic ml-20 text-amber-200" >{item.title}</h3><br />

                    <ul className="ml-20 text-xl  font-serif italic leading-loose text-white">
                        {item.description.map((point,index)=>(<li key={index} className="drop-shadow">{point}</li>))}
                     </ul>

                    </div>
             
               </div>

          </SwiperSlide>
        ))}
      </Swiper>
          </div>
          </div>
  );
};

//popular Packages//

function TourPackages({ data }) {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 px-5 py-16">

      
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <p className="mb-3 text-lg font-semibold italic font-serif text-cyan-600">
          🌴 Your Dream Vacation 🌴
        </p>

        <h2 className="text-3xl font-extrabold  font-serif italic tracking-wide text-amber-900 md:text-4xl">
          Tour Packages
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Choose from our handpicked Maldives tour packages and create
          unforgettable memories.
        </p>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500"></div>
      </div>

     
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">

        {data.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

          
            <div className="relative h-52 overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 "
              />

            
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white ${item.tagColor}`}
              >
                {item.tag}
              </span>
            </div>

          
            <div className="p-5">

             
              <h3 className="mb-4 text-xl font-bold text-slate-900 font-serif italic">
                {item.title}
              </h3>

             
              <div className="mb-3 flex items-center font-semibold gap-3 text-sm text-gray-600">
                <span className="text-lg">📅</span>
                <span>{item.duration}</span>
              </div>

             
              <div className="mb-4">
                <span className="text-sm text-gray-500">From</span>

                <span className="ml-2 text-xl font-bold text-cyan-600">
                  {item.price}
                </span>

                <span className="text-sm text-gray-500">
                  {" "}
                  / person
                </span>
              </div>

            
              <div className="space-y-3 border-b border-gray-200 pb-4 font-serif italic">

               
                <div className="flex items-center gap-3 font-semibold  text-amber-900 ">
                  <span className="text-lg">🏨</span>
                  <span>{item.accommodation}</span>
                </div>

               
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-lg">🍽️</span>
                  <span>{item.meal}</span>
                </div>

              
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-lg">🚤</span>
                  <span>{item.transfer}</span>
                </div>

              </div>

              <div className="py-4 font-serif italic">

                {item.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="mb-2 flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-xs text-cyan-600">
                      ✓
                    </span>

                    <span>{highlight}</span>
                  </div>
                ))}

              </div>

           
              <div className="space-y-3">

                <button
                  className="w-full rounded-full border-2 border-cyan-600 py-2.5 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-600 hover:text-white"
                >
                  VIEW DETAILS
                </button>

                <button
                  className="w-full rounded-full bg-cyan-600 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
                >
                  BOOK NOW
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

      <div className="mt-12 text-center">

        <button
          className="rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-cyan-700 hover:shadow-xl"
        >
          VIEW ALL PACKAGES
          <span className="ml-3">→</span>
        </button>

      </div>

    </section>
  );
}

//things to do//

function ThingsToDo({ data }) {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 px-5 py-16">

      
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <p className="mb-3 text-lg font-semibold italic font-serif text-cyan-600">
          🌴 Explore Experience Enjoy 🌴
        </p>

        <h2 className="text-3xl font-extrabold  font-serif italic tracking-wide text-amber-900 md:text-4xl">
          Things To Do In Maldives 
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600 font-serif italic">
         From Adventures Water Sports to Romantic Sunset Cruises,
         Discover Unforgettable Experiences in Paradise
        </p>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500"></div>
      </div>

     
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">

        {data.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

          
            <div className=" h-52 overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="relative h-full w-full object-cover transition duration-500 group-hover:scale-110 "
              />
            </div>
             
                
          
            <div className="p-5">

             
              <h3 className=" text-xl font-bold text-slate-900 font-serif italic text-center ">
                {item.title}
              </h3>

              <p className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500 mb-4">
            </p>

              <div className="space-y-3 border-b border-gray-200 pb-4">
               
                
              
                <div className="flex items-center gap-3 text-sm text-gray-700 text-center font-serif italic">
                  <span>{item.description}</span>
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

      <div className="mt-12 text-center">

        <button
          className="rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-cyan-700 hover:shadow-xl"
        >
         Explore More Experiences
          <span className="ml-3">→</span>
        </button>

      </div>

    </section>
  );
}

//our testimonials//

function Testimonials({ data }) {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 px-5 py-16">

      
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <h2 className="text-3xl font-extrabold font-serif italic tracking-wide text-amber-900 md:text-4xl">
          What our Customers Says 
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500"></div>
      </div>

     
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

        {data.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-xl bg-white border-1 border-solid border-black p-4"
          >

            <h3 className=" text-xl font-bold text-slate-900 font-serif italic text-center ">
                {item.title}
              </h3><br />

              <h3 className=" text-sm font-serif italic ">
                {item.review}
              </h3><br  />

              <div>

               <img
                src={item.image}
                alt={item.title}
                className="h-[50px] w-[60px] object-cover transition duration-500 group-hover:scale-110  mb-5 ml-20"
              />
                <div className="-mt-15 ml-10">

                <h3 className=" text-sm font-bold text-slate-900 font-serif italic text-center ">
                {item.name}
              </h3>

              <h3 className=" text-sm font-bold text-slate-900 font-serif italic text-center ">
                {item.rating}
              </h3>
                </div>
              </div>
                
          </div>
        ))}

      </div>

    </section>
  );
}

//travel tips//
function TravelTips({ data }) {
  return (
     <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-cyan-50 px-4 py-16 sm:px-6 lg:px-10">

  
      <div className="mx-auto max-w-6xl text-center">

        <p className="mb-3 text-lg font-semibold italic text-cyan-600 font-serif italic">
          🌴 Plan Smart, Travel Better 🌴
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 tracking-wide text-slate-900 sm:text-4xl lg:text-4xl font-serif italic">
          Travel Tips for Maldives
        </h2>

        <div className="mx-auto my-5 flex items-center justify-center gap-4">
          <span className="h-[2px] w-16 bg-cyan-500"></span>
          <span className="text-2xl">🌊</span>
          <span className="h-[2px] w-16 bg-cyan-500"></span>
        </div>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base  font-serif italic">
          Everything you need to know before your tropical getaway.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  ">

        {data.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-50 text-4xl transition duration-300 group-hover:scale-110">
              {item.icon}
            </div>

        
            <h3 className="mb-3 text-xl font-bold text-slate-900 font-serif italic">
              {item.title}
            </h3>

            <p className="text-sm leading-7 text-slate-600 sm:text-base font-serif italic">
              {item.description}
            </p>

          </div>
        ))}

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-30">
        <div className="h-8 rounded-[50%] bg-cyan-200"></div>
      </div>

    </section>
  )
}




              
                
export default function Places() {
  return (
    <div>
        <div className="relative">
       <MainImage images={HomeData.home} />
       <div className="absolute top-25 right-4 z-40">
          <SearchBarModal data={HomeData.searchData} />
        </div>
      </div>
     
       
        <WhyVisit Details={HomeData.visitmaldives} />
        <CarouselSection images={HomeData.populardestinations} />
        <TourPackages data={HomeData.packages}  />
        <ThingsToDo data={HomeData.thingstodo}  />
        <Testimonials data={HomeData.testimonials}  />
         <TravelTips data={HomeData.traveltips}  />
        
         
      </div>
  )
}
