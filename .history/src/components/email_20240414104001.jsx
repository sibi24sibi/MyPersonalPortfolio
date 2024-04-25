import React from "react";

const MyEmailLayout = () => {
  return (
    <div className="  p-20">
      <h1 className="text-2xl dark:text-[#e1e1e1] font-bold mb-4">Send me an email</h1>
      <form>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor="name" className="dark:text-[#e1e1e1]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="dark:text-[#e1e1e1]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>
        </div>
        <textarea
          placeholder="Message"
          name="message"
          className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mt-4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 rounded-full text-white px-4 py-2 mt-4 float-right"
        >
          Send Email
        </button>
      </form>
      
    </div>
  );
};

export default MyEmailLayout;
