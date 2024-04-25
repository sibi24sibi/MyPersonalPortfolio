import React, { useState } from "react";

const MyEmailLayout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Reset form fields after successful submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl dark:text-[#e1e1e1] font-bold mb-4">SEND ME AN EMAIL</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="dark:text-[#e1e1e1]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="dark:text-[#e1e1e1]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-3 py-2 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
          </div>
        </div>
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
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
