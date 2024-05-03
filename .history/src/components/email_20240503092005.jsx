import React, { useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';



const MyEmailLayout = () => {
  const form = useRef();

  useEffect(() => {
    // Initialize emailjs
    emailjs.init('-fw29uVaf1UZJqOVT');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm('service_hgvjibu', 'template_f9rmzk9', form.current)
      .then(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email. Please try again later.');
          console.error('Email Error:', error);
        }
      );
  };

  return (
    <div   className="mb-20 max-w-6xl" id="contact">
      
      <div className=" mx-10 max-sm:mx-5 ">
      <div className="div">
      <h1 className="text-2xl dark:text-[#e1e1e1] font-bold mb-4 ">SEND ME A EMAIL</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid  grid-cols-2 gap-4 flex justify-center">
          <div>
            <label htmlFor="name" className="dark:text-[#e1e1e1]">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="px-3 py-2 placeholder-gray-400 text-gray-600 relative dark:bg-slate-300 bg-stone-300 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring  w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="dark:text-[#e1e1e1]">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="px-3 py-2 placeholder-gray-400 text-gray-600 relative dark:bg-slate-300 bg-stone-300 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>
        </div>
        <label htmlFor="message" className="dark:text-[#e1e1e1]">Message</label>
        <textarea
          placeholder=""
          name="message"
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative dark:bg-slate-300 bg-stone-300 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring h-40 w-full "
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 rounded-full text-white px-4 py-2 mt-4 float-right"
          value="Send"
        >
          Send Email
        </button>
      </form>
      </div>
    </div>
  );
};

export default MyEmailLayout;
