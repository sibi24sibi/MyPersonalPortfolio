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
      
      <div className=" mx-10 max-sm:mx-15 ">
      <div className="div">
      <h1 className="text-2xl dark:text-[#e1e1e1] font-bold mb-4 ">SEND ME A EMAIL</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid  grid-cols-2 gap-4 flex justify-center">
          <div>
              <label
                  for="Name"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                >
                  <input
                    type="Name"
                    id="Name"
                    placeholder="Name"
                    name="user_name"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                  />

                  <span
                    class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                  >
                    Name
                  </span>
              </label>
          </div>
          <div>
            <label
                for="UserEmail"
                class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email"
                  name="user_email"
                  class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                />

                <span
                  class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                >
                  Email
                </span>
            </label>
          </div>

        </div>
        <div className="div mt-4">
        <label htmlFor="message" className="dark:text-[#e1e1e1]">Message</label>
        <textarea
          placeholder="Enter you message Here"
          name="message"
          className="px-3 py-3 my-3 placeholder-gray-400 text-gray-600 relative dark:bg-zinc-900 bg-neutral-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring h-40 w-full "
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 rounded-full text-white px-4 py-2 mt-4 float-right"
          value="Send"
        >
          Send Email
        </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default MyEmailLayout;
