
import React from 'react';

// CSS & Data Imports
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'; 
import foodData from './food.json'

function MainImage({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-130 object-cover overflow-hidden pt-10">
      
 
        {images.map((item) => (
          
            <img 
            key={item.id}
              src={item.imgSrc} 
              alt={item.alt} 
              id="1"
              className="w-full h-full object-cover  object-center"
            />


        ))}
            <div className="absolute inset-0 bg-black/25 " />
         
               
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10 -mt-10">
                 
              
                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-widest drop-shadow-lg uppercase mb-2 mt-40">
                   Taste The Flavours Of Maldives
                 </h1>
         
               
                 <p className="text-2xl sm:text-2xl md:text-3xl font-serif italic text-amber-100 drop-shadow-md mb-8 md:mx-10">
                   Savor the authentic taste of Maldives with fresh seafood, aromatic spices, and delicious traditional island flavors.
                 </p>
         
                 
         
               </div>
     <br />
               </div>
           );
         };
        





//must-try//
const Restuarant = ({ items = [] }) => {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 mt-10">
   
         <div>
            <p className="text-4xl text-center mb-10 font-serif italic  text-amber-900">Must-Try Traditional Dishes</p>

                
    <div className="grid grid-cols-1 md:rid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto p-4">

      {items.map((item) => (
        <div
          key={item.id}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2"
        >
          
          <div className="relative w-full h-56">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {item.rating}
              </span>

          </div>


          <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold font-serif italic">{item.name}</h3>
                  <span className="text-lg font-semibold text-emerald-600">{item.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              
                       
            </div>
        
        </div>
      ))}
    </div>
     <div className="mt-12 text-center">

        <button
          className="rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-cyan-700 hover:shadow-xl"
        >
         Explore More Foods
          <span className="ml-3">→</span>
        </button>

      </div>
    
    </div>
<br />
    </section>
  );
};


//street foods

const StreetFood = ({ items = [] }) => {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 mt-10">
   
         <div>
            <p className="text-4xl text-center mb-10 font-serif italic  text-amber-900">Street foods</p>

                
    <div className="grid grid-cols-1 md:rid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto p-4">

      {items.map((item) => (
        <div
          key={item.id}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2"
        >
          
          <div className="relative w-full h-56">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {item.rating}
              </span>

          </div>


          <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold font-serif italic">{item.name}</h3>
                  <span className="text-lg font-semibold text-emerald-600">{item.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              
                       
            </div>
        
        </div>
      ))}
    </div>
     <div className="mt-12 text-center">

        <button
          className="rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-cyan-700 hover:shadow-xl"
        >
         Explore More Foods
          <span className="ml-3">→</span>
        </button>

      </div>
    
    </div>
<br />
    </section>
  );
};


//drinks
const Drinks = ({ items = [] }) => {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 mt-10">
   
         <div>
            <p className="text-4xl text-center mb-10 font-serif italic  text-amber-900">Famous Drinks</p>

                
    <div className="grid grid-cols-1 md:rid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto p-4">

      {items.map((item) => (
        <div
          key={item.id}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2"
        >
          
          <div className="relative w-full h-56">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {item.rating}
              </span>

          </div>


          <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold font-serif italic">{item.name}</h3>
                  <span className="text-lg font-semibold text-emerald-600">{item.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>           
            </div>
        
        </div>  
      ))}
    </div>
     <div className="mt-12 text-center">

        <button
          className="rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-cyan-700 hover:shadow-xl"
        >
         Explore More Drinks
          <span className="ml-3">→</span>
        </button>

      </div>
    
    </div>
<br />
<br />
    </section>
  );
};


//sea food and grill//
const SeafoodSection = ({ items = [] }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 font-sans">
    
      <h2 className="text-3xl md:text-4xl font-serif font-bold italic text-gray-900 mb-8 tracking-wide text-center">
        Seafood & Live Grill Specials
      </h2>

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 p-3 rounded-2xl transition-all duration-300 cursor-pointer group border border-gray-200/60 shadow-sm hover:shadow-md"
          >
     
            <div className="w-36 h-24 md:w-44 md:h-28 flex-shrink-0 overflow-hidden rounded-xl bg-gray-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

          
            <div className="flex-grow pr-2">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-800 group-hover:text-amber-700 transition-colors duration-200 line-clamp-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//hero of veg
function Veg({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-[600px] object-cover overflow-hidden">
      
 
        {images.map((item) => (
          
            <img 
            key={item.id}
              src={item.image} 
              alt={item.alt} 
              id="1"
              className="w-full h-full object-cover "
            />


        ))}
          </div>
           );
         };
        
//what to expect

const Expectation = ({ items = [] }) => {
  return (

     <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12">

        <div className="mb-10 text-center">

          <h2 className="font-serif italic  text-3xl font-semibold text-slate-800 sm:text-4xl  ">
            What to Expect
          </h2>

          <div className="mx-auto mt-3 h-px w-40 bg-emerald-300 mb-10" />

        


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 italic font-serif ">

          {items.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl bg-cyan-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg items-center justify-center"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center mx-auto rounded-full bg-emerald-100 text-xl">
                {item.icon}
              </div>

              <h3 className="mb-3 text-base font-semibold text-slate-800">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
</div>
  );
};


//popular dinning spots//

const Popular = ({ items = [] }) => {
  return (

 <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">

        <div className="mb-10 text-center">

          <h2 className="font-serif italic text-3xl font-semibold text-slate-800 sm:text-4xl">
            Popular Dining Spots
          </h2>

          <p className="mt-3 text-sm text-slate-500 sm:text-base font-serif italic">
            A few handpicked places for vegetarian & halal dining in Maldives
          </p>

        </div>


  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-serif italic">

          {items.map((spot, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

           
              <div className="relative h-52 overflow-hidden">

                <img
                  src={spot.image}
                  alt={spot.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

             
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-emerald-700 shadow">
                  {spot.type === "Halal Friendly" ? "☪️" : "🌿"}{" "}
                  {spot.type}
                </div>

              </div>


            
              <div className="p-5">

                <h3 className="mb-2 text-lg font-semibold text-slate-800">
                  {spot.name}
                </h3>

                <p className="mb-3 text-xs font-medium text-emerald-700">
                  📍 {spot.location}
                </p>

                <p className="text-sm leading-6 text-slate-600">
                  {spot.description}
                </p>

              </div>

            </div>

          ))}

        </div>


 
        <div className="mt-10 text-center">

          <button
            className="rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800 hover:shadow-lg"
          >
            Explore More Dining Options
            <span className="ml-2">→</span>
          </button>

        </div>

      </div>
  );
}

//food guide and tips//
const FoodGuide = ({ items = [] }) => {
  return (

    <section className="w-full overflow-hidden bg-[#faf9f4]">
       <div className="relative px-5 pt-14 pb-10 text-center sm:px-8 lg:px-16">

      <div className="absolute left-0 top-0 hidden text-5xl opacity-40 lg:block">
          🌴
        </div>
          <div className="absolute right-0 top-0 hidden text-5xl opacity-40 lg:block">
          🌴
        </div>
        <div className="mb-3 text-3xl">
          🌿
        </div>

        <h2 className="font-serif italic text-3xl font-bold tracking-tight text-cyan-900 sm:text-5xl lg:text-4xl">
          Food Guide & Tips
        </h2>

        <p className="mx-auto mt-4 max-w-3xl font-serif text-lg italic text-cyan-900 sm:text-xl">
         Discover the flavors of Maldives and enjoy a smooth dining experience.
        </p>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#20a5b5]" />

      </div>

      
      <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 lg:px-12">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {items.map((food, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

        
              <div className="relative h-60 overflow-hidden">

                <img
                  src={food.image}
                  alt={food.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />


              </div>

              <div className="px-6 pb-7 pt-10 text-center">

                <h3 className="font-serif text-2xl font-bold text-[#07506a] italic">
                  {food.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 font-serif italic">
                  {food.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

//tips//

const Tips = ({ items = [] }) => {
  return (

<div className="mx-5 mb-0 rounded-t-3xl bg-cyan-50 px-5 py-10 sm:mx-8 sm:px-8 lg:mx-12 lg:px-10">

       
        <div className="mb-10 flex items-center justify-center gap-4">

          <div className="hidden h-px w-10 bg-cyan-900 sm:block" />

          <h3 className="text-center font-serif italic text-2xl font-bold text-cyan-900 sm:text-3xl ">
            Dinning Tips for Travelers
          </h3>
           

          <div className="hidden h-px w-10 bg-cyan-900 sm:block" />
          </div>
        


  
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 bg-cyan-50  mx-auto">

          {items.map((tip, index) => (

            <div
              key={index}
              className="relative border-[#71c9cc] sm:border-r sm:pr-6 last:border-r-0"
            >

         
              <div className="mb-4 flex items-center gap-3 ">

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#087f94] text-xs font-bold text-white">
                  {tip.number}
                </span>

                <span className="text-2xl">
                  {tip.icon}
                </span>

              </div>


              <h4 className="font-serif text-lg font-bold text-[#07506a]">
                {tip.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {tip.description}
              </p>

            </div>

          ))}

        </div>

      </div>
     
  );
};




export default function food() {
  return (
    <div>

      <MainImage images={foodData.image} />
        <Restuarant items={foodData.musttry} />
         <StreetFood items={foodData.streetfood} />
          <Drinks items={foodData.drinks} />
           <SeafoodSection items={foodData.seafood} />
            <Veg images={foodData.diningHero} />
            <Expectation items={foodData.expectations} />
            <Popular items={foodData.diningSpots} />
             <FoodGuide items={foodData.foodCards} />
               <Tips items={foodData.tips} />
           
      </div>
  )
}
