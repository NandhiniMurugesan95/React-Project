

import React, {useState} from 'react';

import contactData from './contact.json'

function MainImage({ images }) {
  return (
    <div  className="relative mx-auto w-full  md:h-100 object-cover overflow-hidden mt-20">
      
 
        {images.map((item) => (
          
            <img 
            key={item.id}
              src={item.imgSrc} 
              alt={item.alt} 
              id="1"
              className="w-full h-full object-cover  object-center"
            />


        ))}
            
     <br />
     <br />
               </div>
             
           );
         };
        //

        


function Contact() {

  const { contactInfo, contactForm } = contactData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="bg-gradient-to-b from-cyan-50 via-white to-cyan-50 py-16">

      {/* ================= CONTACT + FORM ================= */}

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT : CONTACT INFO ================= */}

          <div className="pt-4">

            <p className="text-cyan-600 font-semibold tracking-widest text-sm mb-3 font-serif italic">
              CONTACT INFORMATION
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-6 font-serif italic">
              Let's Plan Your Maldives Journey
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-xl mb-10 font-serif italic">
            Reach out to us anytime. Our team is happy to help you with your travel plans, bookings, and any other queries.
            </p>


            {/* CONTACT DETAILS */}

            <div className="space-y-7">

              {contactInfo.details.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-5"
                >

                  {/* ICON */}

                  <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>


                  {/* TEXT */}

                  <div>

                    <h3 className="text-lg font-semibold text-slate-800 mb-1 font-serif italic">
                      {item.title}
                    </h3>

                    <p className="text-cyan-600 font-medium font-serif italic">
                      {item.text}
                    </p>

                    <p className="text-gray-500 text-sm mt-1 font-serif italic">
                      {item.subText}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            {/* SOCIAL */}

            <div className="mt-10">

              <h3 className="text-lg font-semibold text-slate-800 mb-4 font-serif italic">
                {contactInfo.socialTitle}
              </h3>

              <div className="flex gap-3">

                {contactInfo.socials.map((social, index) => (

                  <button
                    key={index}
                    className="w-11 h-11 rounded-full bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-700 transition"
                  >
                    {social.charAt(0)}
                  </button>

                ))}

              </div>

            </div>

          </div>


          {/* ================= RIGHT : CONTACT FORM ================= */}

          <div className="bg-white rounded-2xl shadow-xl p-7 md:p-10 border border-cyan-100">

            <h2 className="text-3xl font-bold text-slate-800 mb-2 font-serif italic">
             Send Us a Message
            </h2>

            <p className="text-gray-500 mb-8 font-serif italic">
             Fill in the form below and we'll get back to you soon.
            </p>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {contactForm.fields.map((field) => (

                <div key={field.name}>

                  <label className="block text-sm font-medium text-slate-900 font-bold mb-2 font-serif italic">
                    {field.label}
                  </label>


                  {field.type === "textarea" ? (

                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows="5"
                      required
                      className="w-full border border-gray-900 font-serif italic rounded-xl px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 resize-none"
                    />

                  ) : (

                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full border border-gray-200 font-serif italic rounded-xl px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />

                  )}

                </div>

              ))}


              {/* BUTTON */}

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 rounded-full transition duration-300 shadow-md"
              >
               <p> ✈  <spam className="font-serif italic">send message</spam></p>
              </button>

            </form>

          </div>

        </div>


        {/* ================= MAP SECTION ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">


          {/* MAP */}

          <div className="lg:col-span-2">

            <div className="rounded-2xl overflow-hidden shadow-lg border border-cyan-100 h-[400px]">

              <iframe
                src="https://www.google.com/maps?q=Male,Maldives&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Coral Maldives Location"
              ></iframe>

            </div>

          </div>


          {/* VISIT US */}

          <div className="bg-cyan-50 rounded-2xl p-8 flex flex-col justify-center">

            <div className="text-4xl mb-5">
              🌊
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mb-4  font-serif italic">
             Visit Us
            </h2>

            <p className="text-gray-600 leading-7 mb-6 font-serif italic">
              Experience the beauty of the Maldives in person. We are located in the heart of Malé, the capital city.
            </p>

            <p className="font-semibold text-cyan-600 mb-6 font-serif italic">
              📍Malé, Maldives
            </p>

            <a
              href="https://www.google.com/maps?q=Male,Maldives"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-white border-2 border-cyan-500 text-cyan-600 font-semibold px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-white transition"
            >
              <p className="font-serif italic">📍 Get Directions</p>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

         export default function contact() {
  return (
    <div>
        <MainImage images={contactData.image} />
         <Contact
            contactInfo={contactData.contactInfo}
           contactForm={contactData.contactForm}
            
          
           />
        </div>
  )
}
