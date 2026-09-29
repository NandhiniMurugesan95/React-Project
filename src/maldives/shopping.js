
import React from 'react';
import { XCircle, Search, ShoppingBag } from "lucide-react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'; 
import shoppingData from './shopping.json'

function MainImage({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-100 object-cover overflow-hidden">
      
 
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
                 
              
                 <h1 className="text-2xl sm:text-3xl md:text-4xl  font-serif font-extrabold tracking-widest drop-shadow-lg uppercase mb-2 mt-40">
                  Shop the Spirit of Maldives
                 </h1>
         
               
                 <p className="text-2xl sm:text-2xl md:text-3xl font-serif italic text-amber-100 drop-shadow-md mb-8 md:mx-10">
                   Discover unique souvenirs, local crafts, island-made products and authentic Maldivian treasures.
                 </p>
         
                 
         
               </div>
     <br />
     <br />
               </div>
             
           );
         };
        
//what to buy in maldives

function Buy({ data }) {
  return (

    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 px-5 py-16">

      
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <h2 className="text-2xl font-extrabold  font-serif italic tracking-wide text-amber-900 md:text-3xl">
          What To Buy In Maldives
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500"></div>
      </div>

     
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4 ">

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
            </div>

          
            <div className="p-5">

             
              <h3 className="mb-4 text-xl font-bold text-amber-900 font-serif italic ">
                {item.title}
              </h3>
              
              <h1 className="mb-4 text-sm  text-slate-900 font-serif italic">
                {item.description}
              </h1>

             
              <div className="space-y-3">

                <button
                  className="w-full rounded-full border-2 border-cyan-600 py-2.5 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-600 hover:text-white"
                >
                  Explore
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

//best places for shopping

function Places({ data }) {
  return (

  <section className=" py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50 via-white to-cyan-50">

     
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-slate/25 font-medium uppercase tracking-[3px] text-sm mb-3 font-serif italic">
          Explore & Discover
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-4xl  font-bold text-slate/25 font-serif italic">
          Best Places for Shopping
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-600 font-serif italic">
          Explore the best shopping spots in Maldives for unique finds,
          local treasures, and memorable souvenirs.
        </p>
      </div>

     
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">

        {data.map((place) => (
          <div
            key={place.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm
                       hover:shadow-xl transition-all duration-300
                       border border-gray-100"
          >

            
            <div className="relative h-56 overflow-hidden">

              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition-transform duration-500"
              />


            </div>

           
            <div className="p-4  pt-2">

              <h3 className="text-xl font-serif font-bold text-amber-900 italic">
                {place.name}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6 min-h-[72px] font-serif italic">
                {place.description}
              </p>

              
              <div className="mt-5 flex items-center justify-between gap-3">

               
                <div className="flex items-center gap-1.5 text-xl fontt-extrabold text-amber-900 font-serif italic">
                  
                  <span>{place.location}</span>
                </div>

            
                <button
                  className="flex items-center gap-1
                             bg-cyan-700 hover:bg-cyan-300
                             text-white text-sm font-medium
                             px-2 py-2 rounded-lg
                             transition-all duration-300"
                >Explore
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>

  );
};
//Traaditional crafts
function Traditional({ data }) {
  return (

       <section className="bg-cyan-50 px-5 py-16 md:px-10 lg:px-16">

    
      <div className="mx-auto max-w-5xl text-center">

        <p className="font-serif text-xl italic text-amber-900 md:text-3xl ">
          Traditional
        </p>

        <h2 className="mt-1 font-serif text-3xl font-bold text-slate-800 md:text-4xl italic">
          Maldivian Crafts
        </h2>

      
        <div className="mx-auto  flex justify-center">
          <span className="text-3xl tracking-widest text-cyan-700">
            ~~~
          </span>
        </div>

        <p className="text-lg font-medium text-gray-700 md:text-xl font-serif italic">
          Handmade with heritage. Crafted with love
        </p>

        

      </div>

     
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {data.map((craft) => (
          <div
            key={craft.id}
            className="group relative h-[400px] overflow-hidden rounded-3xl shadow-lg"
          >

           
            <img
              src={craft.image}
              alt={craft.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

           
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

              
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#078b8b] text-xl">
                ✦
              </div>

              <h3 className="text-xl font-bold uppercase tracking-wide font-serif italic">
                {craft.title}
              </h3>

              <p className="mt-1 text-sm font-semibold font-serif italic">
                {craft.subtitle}
              </p>

          
              <div className="my-3 h-[2px] w-12 bg-[#20b7b0]" />

              <p className="text-sm leading-6 text-gray-200 font-serif italic">
                {craft.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

//coconut

function Coconut({ data }) {
  return (

       <section className="bg-cyan-50 px-5 py-16 md:px-10 lg:px-16">

    
      <div className="mx-auto max-w-5xl text-center">

        

        <h2 className="mt-1 font-serif text-3xl font-bold text-slate-800 md:text-4xl italic">
          Coconut products
        </h2>

      
        <div className="mx-auto  flex justify-center">
          <span className="text-3xl tracking-widest text-cyan-700">
            ~~~
          </span>
        </div>

      </div>

     
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {data.map((craft) => (
          <div
            key={craft.id}
            className="group relative h-[400px] overflow-hidden rounded-3xl shadow-lg"
          >

           
            <img
              src={craft.image}
              alt={craft.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

           
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

              
             

              <h3 className="text-xl font-bold uppercase tracking-wide font-serif italic">
                {craft.title}
              </h3>

              <p className="mt-1 text-sm font-semibold font-serif italic">
                {craft.subtitle}
              </p>

          
              <div className="my-3 h-[2px] w-12 bg-[#20b7b0]" />

              <p className="text-sm leading-6 text-gray-200 font-serif italic">
                {craft.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
 
//wooden cratfs

function WoodenCrafts({ data }) {
  return (

       <section className="bg-cyan-50 px-5 py-16 md:px-10 lg:px-16">

    
      <div className="mx-auto max-w-5xl text-center">

        

        <h2 className="mt-1 font-serif text-3xl font-bold text-slate-800 md:text-4xl italic">
          Wooden Crafts
        </h2>

      
        <div className="mx-auto  flex justify-center">
          <span className="text-3xl tracking-widest text-cyan-700">
            ~~~
          </span>
        </div>

      </div>

     
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {data.map((craft) => (
          <div
            key={craft.id}
            className="group relative h-[400px] overflow-hidden rounded-3xl shadow-lg"
          >

           
            <img
              src={craft.image}
              alt={craft.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

           
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

              
              

              <h3 className="text-xl font-bold uppercase tracking-wide font-serif italic">
                {craft.title}
              </h3>

              <p className="mt-1 text-sm font-semibold font-serif italic">
                {craft.subtitle}
              </p>

          
              <div className="my-3 h-[2px] w-12 bg-[#20b7b0]" />

              <p className="text-sm leading-6 text-gray-200 font-serif italic">
                {craft.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
 

//local art

function LocalArt({ data }) {
  return (

       <section className="bg-cyan-50 px-5 py-16 md:px-10 lg:px-16">

    
      <div className="mx-auto max-w-5xl text-center">

        

        <h2 className="mt-1 font-serif text-3xl font-bold text-slate-800 md:text-4xl italic">
          Local Arts
        </h2>

      
        <div className="mx-auto  flex justify-center">
          <span className="text-3xl tracking-widest text-cyan-700">
            ~~~
          </span>
        </div>

      </div>

     
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {data.map((craft) => (
          <div
            key={craft.id}
            className="group relative h-[400px] overflow-hidden rounded-3xl shadow-lg"
          >

           
            <img
              src={craft.image}
              alt={craft.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

           
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

              
              

              <h3 className="text-xl font-bold uppercase tracking-wide font-serif italic">
                {craft.title}
              </h3>

              <p className="mt-1 text-sm font-semibold font-serif italic">
                {craft.subtitle}
              </p>

          
              <div className="my-3 h-[2px] w-12 bg-[#20b7b0]" />

              <p className="text-sm leading-6 text-gray-200 font-serif italic">
                {craft.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
 
//shopping special
function Special({ data }) {
  return (
        <section className="bg-[#f8fcfb] px-5 py-16 md:px-10 lg:px-16">

      
      <div className="mx-auto max-w-5xl text-center">

        <p className="font-serif text-xl italic text-[#18aaa8] md:text-2xl">
          ~ Why It's Special ~
        </p>

        <h2 className="mt-3 font-serif text-2xl font-bold italic leading-tight text-[#064f55] sm:text-3xl md:text-4xl lg:text-4xl">
          What Makes Maldivian Shopping Special?
        </h2>

        
        <div className="mx-auto mt-6 flex items-center justify-center gap-4">
          <span className="h-[1px] w-16 bg-[#32b9b5]" />

          <span className="text-2xl text-[#32b9b5]">
            ♧
          </span>

          <span className="h-[1px] w-16 bg-[#32b9b5]" />
        </div>
      </div>

      
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">

        {data.map((item) => (
          <div
            key={item.id}
            className="group relative flex min-h-[350px] flex-col items-center overflow-hidden rounded-3xl border border-white bg-white px-7 py-10 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >

      
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#13aaa8] text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>

   
            <h3 className="mt-7 font-serif text-xl font-bold leading-tight text-[#07545a] italic">
              {item.title}
            </h3>

  
            <div className="my-5 h-[3px] w-14 rounded-full bg-[#22b8b3]" />

            
            <p className="text-[15px] leading-7 text-gray-600 font-serif italic">
              {item.description}
            </p>

        
            <div className="mt-auto pt-8 text-4xl font-bold opacity-50">
              {item.icon}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
  
//shopping tips

function Tips({ data }) {
  return (

      <section className="relative overflow-hidden bg-[#f7fcfc] px-5 py-16 md:px-10 lg:px-16">

      
      <div className="mx-auto max-w-6xl text-center">

        <h2 className="font-serif text-3xl italic font-bold text-[#07545a] md:text-4xl ">
          Shopping Tips
        </h2>

        
        <div className="mt-5 flex items-center justify-center gap-4">
          <span className="h-[2px] w-20 bg-[#25b5b2]" />

          <span className="text-3xl text-[#25b5b2]">
            🐚
          </span>

          <span className="h-[2px] w-20 bg-[#25b5b2]" />
        </div>
      </div>

      
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((tip) => (
          <div
            key={tip.id}
            className="group flex min-h-[180px] items-center gap-5 rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            
            <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#e5f7f6] text-4xl transition-transform duration-300 group-hover:scale-110">
              {tip.icon}
            </div>

           
            <div>
              <h3 className="font-serif text-xl font-bold text-[#07545a] italic">
                {tip.title}
              </h3>

              <div className="my-2 h-[2px] w-10 bg-[#24b5b1]" />

              <p className="text-sm leading-6 text-gray-600 font-serif italic">
                {tip.description}
              </p>
            </div>

          </div>
        ))}

      </div>

      
      <div className="mt-14 flex justify-center">
        <div className="h-1 w-32 rounded-full bg-[#b9e9e6]" />
      </div>

    </section>
  );
};
 

//NOT TO BUY  & search for
 function ShopSmart() {
  const { notToBuy, searchFor } = shoppingData;

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 sm:p-8 md:p-12 font-sans flex justify-center items-center"
      style={{
        
      }}
    >
      
      <div className="max-w-5xl w-full bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/40">
        
        
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-800 tracking-wide  font-serif italic">
            🌴SHOP SMART IN MALDIVES 🌴
          </h1>
          <p className="text-slate-700 text-sm md:text-base mt-1 font-medium">
           Enjoy your shopping experience and take home memories that last forever
          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
       
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-red-200/60 shadow-sm">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-lg md:text-xl uppercase">
                <XCircle className="w-6 h-6 fill-red-600 text-white " />
                <h2 >{notToBuy.title}</h2>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {notToBuy.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {notToBuy.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-3 border-b border-red-100/80 last:border-none">
                 
                  <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-red-500 shadow-sm ">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-600 rotate-45 transform"></div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-red-800  tracking-wide font-serif italic">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

    
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-emerald-200/60 shadow-sm">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 text-teal-800 font-bold text-lg md:text-xl uppercase">
                <Search className="w-5 h-5 text-teal-800" />
                <h2>{searchFor.title}</h2>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                {searchFor.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {searchFor.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-3 border-b border-teal-100/80 last:border-none">
            
                  <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-teal-600 shadow-sm">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-teal-900 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

       
        <div className="mt-8 pt-4 border-t border-slate-300/50 text-center flex items-center justify-center gap-2">
          <ShoppingBag className="w-5 h-5 text-slate-800" />
          <p className="text-sm md:text-base font-semibold text-slate-800 italic">
            Shop Smart. Take Home Memories, Not Trouble
          </p>
        </div>

      </div>
    </div>
  );
}

        

    


                  


      


export default function shopping() {
  return (
    <div>
        <MainImage images={shoppingData.image} />
         <Buy data={shoppingData.buy} />
          <Places data={shoppingData.place} />
          <Traditional data={shoppingData.traditional} />
           <Coconut data={shoppingData.coconut} />
           <WoodenCrafts data={shoppingData.woodcrafts} />
            <LocalArt data={shoppingData.local} />
            <Special data={shoppingData.special} />
            <Tips data={shoppingData.tips} />
             <ShopSmart
            notToBuy={shoppingData.notToBuy}
           searchFor={shoppingData.searchFor}
          
           />
            
            
            
              
        
         
      </div>
  )
}
