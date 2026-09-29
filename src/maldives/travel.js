import React, { useState } from "react";

import Weather from './weather';

import TravelData from './travel.json';


function MainImage({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-auto object-contain overflow-hidden ">
      
 
        {images.map((item) => (
          
            <img 
            key={item.id}
              src={item.imgSrc} 
              alt={item.alt} 
              id="1"
              className="w-full h-full object-cover  object-center"
            />


        ))}
        </div>
             
           );
         };

         //ways to maldives

const HowToReach = ({data}) => {

  const [activeOption, setActiveOption] = useState("air");

  const selectedOption = data.find(
    (option) => option.id === activeOption
  );
  return (
    <section className="bg-white py-16 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          

          <h2 className="mt-3 text-4xl font-bold text-slate-800 font-serif italic">
            How to Reach Maldives
          </h2>

          <p className="mt-4 text-gray-500 font-serif italic">
          Choose the best way to begin your Maldives adventure
          </p>

        </div>


        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

              {data.map((way) => (
          <div
            key={way.id}
            onClick={() => setActiveOption(way.id)}
            className={`cursor-pointer bg-white rounded-2xl overflow-hidden
              border-2 transition-all duration-300
              ${
                activeOption === way.id
                  ? "border-blue-500 shadow-xl"
                  : "border-transparent shadow-md"
              }`}
          >

              {/* Image */}
              <div className="relative h-56">

                <img
                  src={way.image}
                  alt={way.title}
                  className="w-full h-full object-cover"
                />

                <div className="
                  absolute bottom-[-20px] left-6
                  w-12 h-12
                  rounded-full
                  bg-white
                  shadow-lg
                  flex items-center justify-center
                  text-2xl
                ">
                  {way.icon}
                </div>

              </div>


              {/* Content */}
              <div className="p-6 pt-10">

                <h3 className="text-2xl font-bold text-slate-800 font-serif italic">
                  {way.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 font-serif italic">
                  {way.description}
                </p>

                 <p className="text-blue-600 font-semibold text-sm mt-4">
                View Details →
              </p>

              </div>

            </div>

          ))}

        </div>


        {/* Selected Card */}
         {selectedOption && (
        <div className="max-w-6xl mx-auto mt-8 bg-cyan-600 rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 md:p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="text-4xl">
                {selectedOption.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-serif italic">
                  {selectedOption.title}
                </h3>

                <p className="text-amber-900 font-serif italic">
                  Everything you need to know
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {selectedOption.details.map(([label, value], index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4"
                >
                  <p className="text-xl font-semibold text-gray-900 font-serif italic">
                    {label}
                  </p>

                  <p className="mt-1 text-sm text-gray-900 font-serif italic">
                    {value}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      )}
</div>
    </section>
  );
}

//getting around islands


const GettingAround = ({data}) => {

  const [selectedTransport, setSelectedTransport] = useState(
    data[0]
  );

  return (
    <section className="bg-sky-50 py-16 px-4">

      
      <div className="text-center max-w-3xl mx-auto mb-12">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 font-serif  italic">
          Getting Around the Islands
        </h2>

        <div className="w-16 h-1 bg-teal-500 mx-auto my-5"></div>

        <p className="text-gray-600 text-lg font-serif  italic">
          Explore the Maldives your way. Choose the best transport
          option to travel between islands and discover paradise.
        </p>

      </div>


      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {data.map((transport) => (

          <div
            key={transport.id}
            onClick={() => setSelectedTransport(transport)}
            className={`bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer
              transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
              ${
                selectedTransport.id === transport.id
                  ? "ring-4 ring-teal-400"
                  : ""
              }`}
          >

            
            <img
              src={transport.image}
              alt={transport.name}
              className="w-full h-52 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">

              <h3 className="text-2xl font-bold text-teal-700 mb-2 font-serif  italic">
                {transport.name}
              </h3>

              <p className="text-gray-600 text-sm leading-6 mb-5 font-serif  italic">
                {transport.description}
              </p>

             
              <div className="mb-3">
                <span className="font-semibold text-gray-800 font-serif  italic">
                  Best For:
                </span>

                <span className="text-gray-600 ml-2 font-serif  italic">
                  {transport.bestFor}
                </span>
              </div>

            
              <div className="mb-5">
                <span className="font-semibold text-gray-800 font-serif  italic">
                  Travel Time:
                </span>

                <span className="text-gray-600 ml-2 font-serif  italic">
                  {transport.travelTime}
                </span>
              </div>

           
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTransport(transport);
                }}
                className="w-full border border-teal-500 text-teal-600
                  py-2 rounded-lg font-semibold
                  hover:bg-teal-500 hover:text-white transition font-serif  italic"
              >
                Learn More →
              </button>

            </div>

          </div>

        ))}

      </div>


    
      <div className="max-w-5xl mx-auto mt-12">

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <img
                src={selectedTransport.image}
                alt={selectedTransport.name}
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>


           
            <div>

              <span className="text-teal-600 font-semibold font-serif  italic">
                TRAVEL OPTION
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-serif  italic">
                {selectedTransport.details.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-4 font-serif  italic">
                {selectedTransport.details.content}
              </p>


            
              <div className="mt-6">

                <h4 className="font-bold text-lg mb-3 font-serif  italic">
                  Why Choose It?
                </h4>

                <div className="space-y-3">

                  {selectedTransport.details.features.map(
                    (feature, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <span
                          className="w-7 h-7 rounded-full bg-teal-100
                          text-teal-600 flex items-center justify-center"
                        >
                          ✓
                        </span>

                        <span className="text-gray-700 font-serif  italic">
                          {feature}
                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


//travel trip planner

const TravelGuide = () => {

  const [selectedDays, setSelectedDays] = useState(3);
  const [activeGuide, setActiveGuide] = useState("stay");

  const selectedTrip = TravelData.tripDurations.find(
    (trip) => trip.id === selectedDays
  );

  const selectedItinerary =
    TravelData.itineraries[selectedDays];

  const getGuideData = () => {

    switch (activeGuide) {

      case "stay":
        return TravelData.stay;

      case "eat":
        return TravelData.eat;

      case "transport":
        return TravelData.transport;

      case "things":
        return TravelData.things;

      case "cost":
        return TravelData.cost;

      default:
        return [];
    }
  };

  return (
    <section className=" bg-sky-50 py-12 px-4 md:px-8 ">

      {/* ================= HERO ================= */}

      <div className=" mx-auto ">

        <div
        >

          

          <div className=" p-8 md:p-14 ">

            <p className="text-amber-900 text-xl italic font-semibold font-serif text-center">
              Travel Guide
            </p>

            <h1 className="text-4xl md:text-4xl font-bold mt-2 text-slate-600 font-serif italic text-center">
              Plan Your Maldives Trip
            </h1>

            <p className="max-w-10xl mt-5 text-lg text-slate-600 font-serif italic text-center">
              Everything you need to know about where to stay,
              what to eat and how to explore the beautiful islands.
            </p>

          </div>
        </div>


        {/* ================= TRIP CARDS ================= */}

        <div className=" rounded-3xl shadow-lg -mt-8
          relative z-20 p-5 md:p-8">

          <h2 className="text-2xl md:text-3xl text-center
            font-bold text-slate-900 mb-7 font-serif italic">

            Choose Your Trip Duration

          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2
            xl:grid-cols-4 gap-5">

            {TravelData.tripDurations.map((trip) => (

              <div
                key={trip.id}
                onClick={() => setSelectedDays(trip.id)}
                className={`cursor-pointer rounded-2xl border p-4
                transition-all duration-300 hover:-translate-y-1
                hover:shadow-lg bg-white  
                ${
                  selectedDays === trip.id
                    ? "border-cyan-800 ring-2 ring-cyan-200 shadow-2xl"
                    : "border-gray-900"
                }`}
              >

                <div className="flex justify-between gap-3 font-serif italic">

                  <div>

                    <h3 className="text-2xl font-bold text-cyan-800">
                      {trip.days}
                    </h3>

                    <h4 className="font-semibold mt-1 text-sm text-amber-900">
                      {trip.title}
                    </h4>

                  </div>

                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-24 h-20 object-cover rounded-xl"
                  />

                </div>


                <div className="mt-4 space-y-2 font-serif italic">

                  {trip.highlights.map((item, index) => (

                    <p
                      key={index}
                      className="text-sm text-slate-900"
                    >
                      ✓ {item}
                    </p>

                  ))}

                </div>


                <div className="flex items-center
                  justify-between mt-5  ">

                  <span className="font-bold text-cyan-800">
                    From {trip.price}
                  </span>

                  <button
                    className="bg-cyan-600 text-white
                    px-4 py-2 rounded-lg text-sm font-serif italic"
                  >
                    View Itinerary
                  </button>

                </div>

              </div>

            ))}

          </div>
        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12
          gap-6 mt-8">


          {/* ITINERARY */}

          <div className="lg:col-span-4 bg-white border
            rounded-2xl p-6 shadow-sm font-serif italic">

            <h2 className="text-2xl font-bold text-green-700 mb-6 ">

              {selectedTrip.days} – {selectedTrip.title}

            </h2>


            <div className="space-y-6">

              {selectedItinerary.map((day, index) => (

                <div
                  key={index}
                  className="flex gap-4"
                >

                  <img
                    src={day.image}
                    alt={day.title}
                    className="w-28 h-24 object-cover rounded-xl"
                  />

                  <div>

                    <p className="text-sm font-bold text-green-700">
                      {day.day}
                    </p>

                    <h3 className="font-bold">
                      {day.title}
                    </h3>

                    <ul className="mt-2 text-sm text-slate-900">

                      {day.activities.map((activity, i) => (

                        <li key={i}>
                          • {activity}
                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* GUIDE CONTENT */}

          <div className="lg:col-span-5 border rounded-2xl
            overflow-hidden bg-white shadow-sm font-serif italic">

            {/* TABS */}

            <div className="flex overflow-x-auto border-b">

              {[
                ["stay", "Where to Stay"],
                ["eat", "Where to Eat"],
                ["transport", "Getting Around"],
                ["things", "Things to Do"],
                ["cost", "Travel Cost"]
              ].map(([id, title]) => (

                <button
                  key={id}
                  onClick={() => setActiveGuide(id)}
                  className={`whitespace-nowrap px-5 py-4 text-sm
                  font-medium ${
                    activeGuide === id
                      ? "text-green-700 border-b-2 border-green-600"
                      : "text-gray-900"
                  }`}
                >
                  {title}
                </button>

              ))}

            </div>


            {/* TAB CONTENT */}

            <div className="p-5 space-y-5 font-serif italic">

              {getGuideData().map((item, index) => (

                <div
                  key={index}
                  className="flex gap-4"
                >

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-24 object-cover rounded-xl"
                    />
                  )}

                  <div>

                    <h3 className="font-bold text-green-700">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-900 mt-1">
                      {item.description}
                    </p>

                    {item.price && (
                      <p className="text-sm text-amber-900
                        font-semibold mt-2">
                        {item.price}
                      </p>
                    )}

                    {item.time && (
                      <p className="text-sm font-semibold mt-2">
                        {item.time}
                      </p>
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* QUICK GUIDE */}

          <div className="lg:col-span-3 bg-cyan-50
            rounded-2xl p-3 font-serif italic ">

            <h2 className="text-xl font-bold
              text-center text-slate-900 mb-5">

              Quick Guide

            </h2>


            <div className="space-y-2 ">

              {TravelData.quickGuide.map((item) => (

                <button
                  key={item.id}
                  onClick={() => {
                    if (
                      ["stay", "eat", "transport", "things", "cost"]
                        .includes(item.id)
                    ) {
                      setActiveGuide(item.id);
                    }
                  }}
                  className="w-full flex gap-3 text-left
                  hover:bg-white p-2 rounded-lg transition"
                >

                  <span className="text-2xl">
                    {item.icon}
                  </span>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-900">
                      {item.description}
                    </p>

                  </div>

                 

                </button>

              ))}

            </div>

          </div>

        </div>


        {/* ================= QUICK FACTS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-5 gap-4 mt-8 font-serif italic ">

          {TravelData.facts.map((fact, index) => (

            <div
              key={index}
              className="border rounded-2xl p-5 bg-white"
            >

              <div className="text-3xl">
                {fact.icon}
              </div>

              <h3 className="font-bold mt-3">
                {fact.title}
              </h3>

              <p className="text-green-700 font-semibold mt-1">
                {fact.value}
              </p>

              <p className="text-sm text-slate-900 mt-1">
                {fact.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

//travel costs

const TravelCost = ({data}) => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-10">

        <p className="text-sm font-semibold tracking-widest text-cyan-600 uppercase font-serif italic">
          Travel Cost
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-serif italic">
          Estimated Travel Cost
        </h2>

        <p className="text-gray-600 max-w-2xl mt-4 leading-7 font-serif italic">
          Your Maldives trip cost depends on your travel style,
          accommodation and activities. Here's a quick overview
          to help you plan your budget.
        </p>

      </div>

      {/* Cost Cards */}
      <div className="
        max-w-7xl mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-5
      ">

        {data.map((item) => (

          <div
            key={item.id}
            className="
              bg-sky-50
              rounded-2xl
              p-6
              text-center
              border border-sky-100
              hover:-translate-y-2
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            {/* Icon */}
            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-800 font-serif italic">
              {item.title}
            </h3>

            {/* Price */}
            <p className="text-xl font-bold text-cyan-700 mt-3 ">
              {item.price}
            </p>

            {/* Unit */}
            <p className="text-sm text-gray-500 mt-1">
              {item.unit}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-6 mt-4 font-serif italic">
              {item.description}
            </p>

          </div>

        ))}

      </div>

      {/* Button */}
      <div className="max-w-7xl mx-auto mt-8">

        <button
          className="
            border-2
            border-cyan-600
            text-cyan-700
            px-6
            py-3
            rounded-full
            font-semibold
            hover:bg-cyan-600
            hover:text-white
            transition
            font-serif italic
          "
        >
          View Detailed Budget Guide →
        </button>

      </div>

    </section>
  );
};

//season


const BestTimeToVisit = ({data}) => {
  return (
    <section className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold tracking-widest uppercase text-sm font-serif italic">
            Plan Your Vacation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 tracking-tight font-serif italic">
            Best Time To Visit Maldives
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-base md:text-lg  font-serif italic">
            Choose the perfect month for your dream trip based on weather, budget, and ocean activities.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Season Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((season) => (
            <div
              key={season.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col justify-between"
            >
              <div>
                {/* Header Banner */}
                <div className={`${season.headerBg} p-6 text-white text-center relative`}>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-2 ${season.badgeColor}`}>
                    {season.badge}
                  </span>
                  <h3 className="text-xl font-bold tracking-wide font-serif italic">{season.title}</h3>
                  <p className="text-slate-100 text-sm font-medium mt-1 font-serif italic">{season.months}</p>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h4 className="font-serif italic text-slate-800 font-semibold text-lg mb-4 text-center border-b pb-2 border-slate-100">
                    {season.highlights}
                  </h4>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {season.points.map((point, index) => (
                      <li key={index} className="flex items-start text-sm text-slate-900 font-serif italic">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Footer */}
              <div className="p-6 pt-0">
                <div className="overflow-hidden rounded-xl h-44 shadow-inner">
                  <img
                    src={season.image}
                    alt={season.title}
                    className=" w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips Banner */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-md border border-slate-100 max-w-4xl mx-auto">
          <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center justify-center font-serif italic">
            <span className="mr-2">💡</span> Quick Travel Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600 text-center ">
            <div className="bg-slate-50 p-3 rounded-lg font-serif italic ">
              <strong>Book Early:</strong> Peak season villas fill up 3–6 months in advance.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-serif italic">
              <strong >Pack Light:</strong> Breathable clothes & rain jackets for off-peak trips.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-serif italic">
              <strong>Set Priorities:</strong> Choose sunshine vs lower price deals.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

//travelessentials

const TravelEssentials = ({data}) => {

   return (

    <div className="bg-sky-50 py-16">

      {/* ================= TRAVEL ESSENTIALS ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-cyan-600 uppercase tracking-widest text-sm font-semibold font-serif italic">
            Travel Guide
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-serif italic">
           Travel Essentials
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-3 font-serif italic">
            Don't forget to pack these must-haves for a smooth and enjoyable trip to Maldives          </p>

        </div>


        {/* Essentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.items.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                border border-sky-100
              "
            >

              {/* Small Image */}
              <div className="flex items-center gap-4 p-5">

                <div className="
                  w-20 h-20
                  rounded-xl
                  overflow-hidden
                  flex-shrink-0
                  bg-sky-100
                ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 font-serif italic">
                  {item.title}
                </h3>

              </div>


              {/* Points */}
              <div className="px-5 pb-5">

                <ul className="space-y-2">

                  {item.points.map((point, pointIndex) => (

                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-sm text-slate-900 font-serif italic"
                    >

                      <span className="text-cyan-900 mt-1">
                        ✓
                      </span>

                      <span>{point}</span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          )
        )
          }

        </div>

      </section>
</div>
);
};

//travel requirements

const TravelRequirements = ({data}) => {

   return (

     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-cyan-600 uppercase tracking-widest text-sm font-semibold font-serif italic">
            Before You Travel
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 font-serif italic">
           Travel Requirements & Tips
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-3 font-serif italic">
            Know the important rules and local tips before you travel to make your trip hassle-free
          </p>

        </div>


        {/* Requirements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {data.items.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-5
                border border-sky-100
                shadow-sm
                hover:-translate-y-1
                hover:shadow-lg
                transition-all
                duration-300
              "
            >

              {/* Small Image */}
              <div className="
                w-16 h-16
                rounded-xl
                overflow-hidden
                bg-sky-100
                mb-4
              ">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

              </div>


              {/* Title */}
              <h3 className="text-base font-bold text-amber-800 mb-3  font-serif italic">
                {item.title}
              </h3>


              {/* Points */}
              <ul className="space-y-2">

                {item.points.map((point, pointIndex) => (

                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 text-sm text-slate-900 font-serif italic"
                  >

                    <span className="text-cyan-500 font-bold">
                      ✓
                    </span>

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </section>

  );
};

    
                  
         export default function Travel() {
  return (
    <div>
        <MainImage images={TravelData.image} />
         <HowToReach data={TravelData.ways} />
         <GettingAround data={TravelData.islands} />
          <TravelGuide
            tripDurations={TravelData.tripDurations}
           itineraries={TravelData.itineraries}/>

           <TravelCost data={TravelData.travel} />
            <BestTimeToVisit data={TravelData.season} />
            <TravelEssentials data={TravelData.travelEssentials} />
             <TravelRequirements data={TravelData.travelRequirements} />
            <Weather/>
            
                          
       
        
        
        
         
      </div>
  )
}
