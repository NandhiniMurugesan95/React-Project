
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, {useState} from 'react';


// CSS & Data Imports
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'; 
import pageData from './places.json'


//carousel section//
function CarouselSection({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-130 object-cover overflow-hidden  pt-10">
      
      {/* 2. Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}  
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} >
            <img 
              src={item.imgSrc} 
              alt={item.alt} 
              id="carousel-img"
              className="w-full h-full object-cover  object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
        <br />
    </div>
  );
};


   
//grid island//
function DetailGridSection({ gridItems }) {
 
  return (

    
    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50">
   
    <div class="text-center text-4xl pt-5 font-serif italic"><span className="text-amber-900">Islands</span>

    <p  class=" text-3xl pt-5 font-serif italic">Private Islands</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 mx-10 ">

      {gridItems.map((item) => (
        
         <Link
              key={item.id}
              to={`/places/island/${item.id}`}

        className="border-1 p-2 hover:shadow-2xl hover:-translate-y-2">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover"/>

          <h3 className="font-bold text-lg mt-1">{item.title}</h3>

         
              <div className="font-bold  text-sm -mt-1">{item.rating}</div>
               <div className="flex justify-center align-center gap-1 md:mt-4px">

              {item.circles.map((_, index) => (
              <span
                  key={index}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#00aa6c', // பச்சை வட்டம்
                    display: 'inline-block'
                  }}    
              />
              ))}
             <span className="text-sm -mt-1">({item.reviewCount})</span>
              
            </div>

            
          </Link>
      ))}
    </div>
    </div>
		 </section>
  );
}

//public island//
function PublicGridSection({ gridItems }) {
 
  return (

     <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 ">

  
    <div  class="text-center text-4xl pt-5 font-serif italic">Public Islands

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 mx-10 ">

      {gridItems.map((item) => (
 
        <div className="border-1 p-2 hover:shadow-2xl hover:-translate-y-2">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover"/>

          <h3 className="font-bold text-lg mt-1">{item.title}</h3>

         
              <div className="font-bold  text-sm -mt-1">{item.rating}</div>
               <div className="flex justify-center align-center gap-1 md:mt-4px">

              {item.circles.map((_, index) => (
              <span
                  key={index}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#00aa6c', // பச்சை வட்டம்
                    display: 'inline-block'
                  }}    
              />
              ))}
             <span className="text-sm -mt-1">({item.reviewCount})</span>
            </div> 
          </div>
      ))}
    </div>
       
    </div>	
       </section>	    
  );

}
//stay & accomodation//
function StayAccommodation({ categories }) {

  const categoryNames = Object.keys(categories);

  const [activeTab, setActiveTab] =
    useState("Beach Bungalows");

  const [selectedItem, setSelectedItem] =
    useState(categories["Beach Bungalows"][0]);

  const [showBooking, setShowBooking] =
    useState(false);

  return (
    <section className="py-16 bg-gray-50 -mt-50">

      <div className="text-center mb-10">

        <h2 className="text-4xl font-bold text-slate-800 font-serif italic">
          Stay & Accommodation
        </h2>

        <p className="text-amber-900 text-xl mt-3 font-serif italic">
          Find your perfect stay in paradise
        </p>

      </div>


      {/* 4 TABS */}

      <div className="flex flex-wrap justify-center gap-3">

        {categoryNames.map((category) => (

          <button
            key={category}
            onClick={() => {

              setActiveTab(category);

              setSelectedItem(
                categories[category][0]
              );

            }}

            className={`px-6 py-3 rounded-full font-semibold font-serif italic
              ${
                activeTab === category
                  ? "bg-cyan-600 text-white"
                  : "bg-white text-gray-700 border"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>


      {/* 4 IMAGES */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-10">

        {categories[activeTab].map((item) => (

          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md
              ${
                selectedItem.id === item.id
                  ? "ring-4 ring-cyan-500 font-serif italic"
                  : ""
              }
            `}
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">

              <h3 className="font-bold text-xl font-serif italic">
                {item.name}
              </h3>

            </div>

          </div>

        ))}

      </div>


      {/* IMAGE + DETAILS */}

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg mt-10 mx-10">

        {/* LEFT IMAGE */}

        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className="w-full h-[450px] object-cover"
        />


        {/* RIGHT DETAILS */}

        <div className="p-8">

          <h2 className="text-3xl font-bold text-slate-800 font-serif italic">
            {selectedItem.name}
          
		<span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-1 rounded ml-80 ">
                  ★ {selectedItem.stars} Stars
                </span></h2>

          <p className="text-gray-900 mt-4 leading-7 font-serif italic" >
            {selectedItem.description}
          </p>
		<p className="text-xs text-gray-900 mt-1 font-serif italic">
                📍 {selectedItem.location}
              </p>


          <div className="mt-5 space-y-2 font-serif italic">

            <p>👥 {selectedItem.guests} Guests</p>

            <p>📐 {selectedItem.size}</p>

            <p>🛏️ {selectedItem.bed}</p>

          </div>


          <h3 className="font-bold text-xl mt-6 font-serif italic">
            Amenities
          </h3>

          <div className="grid grid-cols-2 gap-2 mt-3">

            {selectedItem.amenities.map(
              (amenity, index) => (

                <p key={index} className="text-gray-900 font-serif italic">
                  ✓ {amenity}
                </p>

              )
            )}

          </div>


          {/* PRICE + BOOK NOW */}

          <div className="flex justify-between items-center mt-8">

            <div>

              <p className="text-gray-900 font-serif italic">
                From
              </p>

              <p className="text-3xl font-bold text-cyan-600">
                ${selectedItem.price}
                <span className="text-sm text-gray-900 font-serif italic">
                  /night
                </span>
              </p>

            </div>

            <button
              onClick={() => setShowBooking(true)}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-7 py-3 rounded-full font-serif italic"
            >
              Book Now
            </button>

          </div>

        </div>

      </div>


      {/* BOOKING POPUP */}

      {showBooking && (

        <div className="fixed inset-0 z-50 flex items-center justify-center mt-20">

          {/* BACKGROUND BLUR */}

          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={() => setShowBooking(false)}
          ></div>


          {/* FORM */}

          <div className="relative z-10 bg-white w-[90%] max-w-lg rounded-3xl p-8">

            <div className="flex justify-between">

              <div>

                <p className="text-cyan-800 font-serif italic">
                  Booking Request
                </p>

                <h2 className="text-2xl font-bold font-serif italic">
                  Book Your Stay
                </h2>

              </div>

              <button
                onClick={() => setShowBooking(false)}
                className="text-3xl"
              >
                ×
              </button>

            </div>


            {/* SELECTED ITEM */}

            <div className="flex gap-4 bg-gray-50 p-3 rounded-xl mt-5">

              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-20 h-16 object-cover rounded-lg font-serif italic"
              />

              <div>

                <h3 className="font-bold font-serif italic">
                  {selectedItem.name}
                </h3>

                <p className="text-cyan-600 font-serif italic">
                  ${selectedItem.price} / night
                </p>

              </div>

            </div>


            {/* FORM */}

            <form className="space-y-4 mt-5 font-serif italic">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-3"
              />

              <div className="grid grid-cols-2 gap-3">

                <input
                  type="date"
                  className="border rounded-xl p-3"
                />

                <input
                  type="date"
                  className="border rounded-xl p-3"
                />

              </div>

              <select className="w-full border rounded-xl p-3">

                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>

              </select>

              <button
                type="button"
                className="w-full bg-cyan-600 text-white py-3 rounded-full font-semibold"
              >
                Confirm Booking
              </button>

            </form>

          </div>

        </div>

      )}

    </section>
  );
}

//underwater Restuarant//

const Restuarant = ({ items = [] }) => {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 ">
   
         <div>
            <p className="text-4xl text-center mb-10 font-serif italic  text-amber-900">Unique Restuarants</p>

                <p className="text-3xl text-center  mb-4 underline font-serif italic  text-amber-900">Undersea Restuarants</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-4">

      {items.map((item) => (
        <div
          key={item.id}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2"
        >
          
          <div className="w-full h-56">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="p-5 text-center text-gray-700">
         
            <div className="flex items-center justify-center my-3">
              <div className="flex-grow border-t border-gray-400 max-w-[40px]"></div>
              <h3 className="px-4 text-xl tracking-[0.2em] font-serif font-semibold text-gray-800 uppercase">
                {item.title}
              </h3>
              <div className="flex-grow border-t border-gray-400 max-w-[40px]"></div>
            </div>

            <p className="text-sm font-serif text-gray-600 mb-4">{item.subtitle}</p>
            <p className="text-sm leading-relaxed text-gray-600 mb-4">{item.description}</p>
            <p className="text-sm mb-3">
              Cuisine : <span className="font-semibold text-gray-800">{item.cuisine}</span>
            </p>

           
            <div className="flex flex-col items-center gap-1 text-sm text-gray-600 my-4">
              <p>✉ {item.email}</p>
              <p>📞 {item.phone}</p>
            </div>

          
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-xs font-semibold tracking-wider text-gray-800 uppercase">
              <span>{item.bookingText}</span>
              <a href={item.moreLink} className="text-gray-500 hover:text-black">
                MORE &gt;
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <br />
    </div>

    </section>
  );
};

//overwater restuarants//
const OverRestuarant = ({ items1 = [] }) => {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 ">
   
         <div>
                <p className="text-3xl text-center  mb-4 underline font-serif italic text-amber-900">Oversea Restuarants</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-4">

      {items1.map((item) => (
        <div
          key={item.id}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2"
        >
         
          <div className="w-full h-56">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

        
          <div className="p-5 text-center text-gray-700">
           
            <div className="flex items-center justify-center my-3">
              <div className="flex-grow border-t border-gray-400 max-w-[40px]"></div>
              <h3 className="px-4 text-xl tracking-[0.2em] font-serif font-semibold text-gray-800 uppercase">
                {item.title}
              </h3>
              <div className="flex-grow border-t border-gray-400 max-w-[40px]"></div>
            </div>

            <p className="text-sm font-serif text-gray-600 mb-4">{item.subtitle}</p>
            <p className="text-sm leading-relaxed text-gray-600 mb-4">{item.description}</p>
            <p className="text-sm mb-3">
              Cuisine : <span className="font-semibold text-gray-800">{item.cuisine}</span>
            </p>

           
            <div className="flex flex-col items-center gap-1 text-sm text-gray-600 my-4">
              <p>✉ {item.email}</p>
              <p>📞 {item.phone}</p>
            </div>

           
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-xs font-semibold tracking-wider text-gray-800 uppercase">
              <span>{item.bookingText}</span>
              <a href={item.moreLink} className="text-gray-500 hover:text-black">
                MORE &gt;
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

    </section>
  );
};


export default function Places() {
  return (
    <div>
        <CarouselSection images={pageData.carouselData} />
        <DetailGridSection gridItems={pageData.gridData} />
         <PublicGridSection gridItems={pageData.gridDataPublic} />
         <StayAccommodation
        categories={pageData.categories}
      />
         <Restuarant items={pageData.underwater} />
         <OverRestuarant items1={pageData.overwater} />
         
         
      </div>
  )
}
