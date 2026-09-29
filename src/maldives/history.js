
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css'; 
import HistoryData from './history.json'

function MainImage({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-[60] object-cotain overflow-hidden pt-10">
      
 
        {images.map((item) => (
          
            <img 
            key={item.id}
              src={item.imgSrc} 
              alt={item.alt} 
              id="1"
              className="w-full h-full mx-auto object-contain "
            />
        ))}
                     
     <br />
      <br />
       <br />
               </div>
           );
         };


// section1//

const Ancient = ({ items = [] }) => {
  return (
<div className="overflow-hidden">
    <div className="w-full  border-t-3  border-solid border-cyan-900">

    <div>

      <p className="text-5xl font-sherif italic text-center  center-justify text-amber-900  mb-5">Ancient Origins</p><br />
      
       <div  className="relative mx-auto w-full  md:h-[70] object-cotain overflow-hidden ">
      
 
        {items.map((item) => (
          <div>
            <img 
            key={item.id}
              src={item.image} 
              alt={item.alt} 
              id="1"
              className="w-[900px] h-[500px] mx-auto object-cover mb-10 "
            />
            
    

          <p className="text-xl font-sherif italic text-justify center-justify text-black m-5  ">{item.description}</p>
</div>
         ))}
          </div>
          </div>
          </div>
          <br />
          </div>
  );
};

//Islamic Heritage

const Islamic = ({ items = [] }) => {
  return (
<div className="overflow-hidden">
    <div className="w-full  border-t-3 border-solid border-cyan-900">

    <div>

      <p className="text-5xl font-sherif italic text-center  center-justify text-amber-900  mb-5">Islamic Heritage</p><br />
      
       <div  className="relative mx-auto w-full  md:h-[70] object-cotain overflow-hidden ">
      
 
        {items.map((item) => (
          <div>
            <img 
            key={item.id}
              src={item.image} 
              alt={item.alt} 
              id="1"
              className="w-[900px] h-[500px] mx-auto object-cover mb-10 "
            />
            
    

          <p className="text-xl font-sherif italic text-justify center-justify text-black m-5  ">{item.description}</p>
</div>
         ))}
          </div>
          </div>
          </div>
          <br />
          </div>
  );
};

//Sultanatte Era

const Sultanate = ({ items = [] }) => {
  return (
<div className="overflow-hidden">
    <div className="w-full  border-t-3  border-solid border-cyan-900">

    <div>

      <p className="text-5xl font-sherif italic text-center  center-justify text-amber-900  mb-5">Sultanate Era</p><br />
      
       <div  className="relative mx-auto w-full  md:h-[70] object-cotain overflow-hidden ">
      
 
        {items.map((item) => (
          <div>
            <img 
            key={item.id}
              src={item.image} 
              alt={item.alt} 
              id="1"
              className="w-[900px] h-[500px] mx-auto object-cover mb-10 "
            />
            
    

          <p className="text-xl font-sherif italic text-justify center-justify text-black m-5  ">{item.description}</p>
</div>
         ))}
          </div>
          </div>
          </div>
          <br />
          </div>
  );
};


//colonial period

const Colonial = ({ items = [] }) => {
  return (
<div className="overflow-hidden">
    <div className="w-full  border-t-3 border-solid border-cyan-900">

    <div>

      <p className="text-5xl font-sherif italic text-center  center-justify text-amber-900  mb-5">Colonial Period</p><br />
      
       <div  className="relative mx-auto w-full  md:h-[70] object-cotain overflow-hidden ">
      
 
        {items.map((item) => (
          <div>
            <img 
            key={item.id}
              src={item.image} 
              alt={item.alt} 
              id="1"
              className="w-[900px] h-[500px] mx-auto object-cover mb-10 "
            />
            
    

          <p className="text-xl font-sherif italic text-justify center-justify text-black m-5  ">{item.description}</p>
</div>
         ))}
          </div>
          </div>
          </div>
          </div>
  );
};

//Modern Maldives

const Modern = ({ items = [] }) => {
  return (
<div className="overflow-hidden">
    <div className="w-full  border-t-3 border-solid border-cyan-900">

    <div>

      <p className="text-5xl font-sherif italic text-center  center-justify text-amber-900  mb-5">Modern Maldives</p><br />
      
       <div  className="relative mx-auto w-full  md:h-[70] object-cotain overflow-hidden ">
      
 
        {items.map((item) => (
          <div>
            <img 
            key={item.id}
              src={item.image} 
              alt={item.alt} 
              id="1"
              className="w-[900px] h-[500px] mx-auto object-cover mb-10 "
            />
            
    

          <p className="text-xl font-sherif italic text-justify center-justify text-black m-5  ">{item.description}</p>
</div>
         ))}
          </div>
          </div>
          </div>
          </div>
  );
};

        
         export default function history() {
  return (
    <div>

      <MainImage images={HistoryData.section} />
       <Ancient items={HistoryData.ancient} />
        <Islamic items={HistoryData.islamic} />
        <Sultanate items={HistoryData.Sultante} />
        <Colonial items={HistoryData.Colonial} />
        <Modern items={HistoryData.modern} />
       
       
       
           
    
         
      </div>
  )
}
