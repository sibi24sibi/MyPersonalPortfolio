import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const MyEmailLayout = () => {
  const form = useRef();

  useEffect(() => {
    // Initialize emailjs
    emailjs.init("-fw29uVaf1UZJqOVT");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hgvjibu", "template_f9rmzk9", form.current).then(
      () => {
        alert("Email sent successfully!");
      },
      (error) => {
        alert("Failed to send email. Please try again later.");
        console.error("Email Error:", error);
      }
    );
  };

  return (
    <div className="mb-20 max-w-6xl" id="contact">
      <div className=" mx-10 max-sm:mx-15 ">
        <div className="div">
          <h1 className="text-2xl dark:text-[#e1e1e1] font-bold mb-4 ">
            SEND ME A EMAIL
          </h1>
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

                <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">
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

                <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">
                  Email
                </span>
              </label>
            </div>
          </div>
          <div className="div">
            <label for="Message" class="sr-only">
              Message
            </label>

            <div class="overflow-hidden">
              <textarea
                id="Message"
                class="w-full px-2 p-2  resize-none border-b-4 dark:border-slate-900 active:border-r-0  border-gray-300 border-x-0 border-t-0  px-0 align-top sm:text-sm  bg-transparent dark:text-white"
                rows="4"
                name="message"
                placeholder="Type your message here"
              ></textarea>

              <div class="flex items-center justify-end gap-2 py-3">
                <button
                  type="submit"
                  className="bg-blue-500 rounded-full text-white px-4 py-2 mt-4 float-right"
                  value="Send"
                  class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyEmailLayout;
