import React from "react";

const MyEmailLayout = () => {
  return (
    <div className=" p-6  ">
      <h1 className="text-2xl font-bold mb-4">Send me an email</h1>
      <form className="inline-flex items-center">
        <div className="grid grid-cols-4 gap-8">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <textarea
          placeholder="Message"
          name="message"
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mt-4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          Send Email
        </button>
      </form>
      
    </div>
  );
};

export default MyEmailLayout;
