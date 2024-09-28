/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Components/navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    problemDescription: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data via email using EmailJS
    emailjs
      .send("service_h3iev0h", "template_x17zjcc", formData, "C-kl8z54FjxPDl4xb")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message successfully sent!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("There was an error sending your message.");
        }
      );
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-sky-600 shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Roll Number:</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Problem Description:</label>
            <textarea
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
