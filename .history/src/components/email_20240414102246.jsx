// MyEmailLayout.jsx

import React from "react";

function MyEmailLayout() {
  return (
    <div className="bg-black p-6">
        
      <h1 className="dark:text-[#e1e1e1] text-2xl font-bold mb-4">Send me an email</h1>
      <form>
      <div className="div inline-flex items-center">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mt-2"
        />
        </div>
        <div className="div">
        <textarea
          placeholder="Message"
          name="message"
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mt-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          Send Email
        </button>
        </div>
      </form>
      
    </div>
  );
};

export default MyEmailLayout;
