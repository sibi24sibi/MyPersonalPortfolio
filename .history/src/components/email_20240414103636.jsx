import React from "react";

const MyEmailLayout = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Send me an email</h1>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message
          </label>
          <textarea
            placeholder="Type your message here..."
            name="message"
            className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mt-2 h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="col-span-2 bg-blue-500 text-white px-4 py-2 mt-4 float-right"
        >
          Send Email
        </button>
      </form>
      <p className="text-gray-500 mt-4">
        © 2024 Adrian Darnaway
      </p>
    </div>
  );
};

export default MyEmailLayout;
