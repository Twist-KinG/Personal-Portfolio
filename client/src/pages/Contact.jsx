import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-900 pb-12 pt-6 text-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* Left Side: Details + Social Links */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-300 text-lg">
            💬 Wanna work together or hire me? Let's build something amazing together! Fill the form and I'll get back to you ASAP.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              <FiMail /> Say Hello
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
            >
              <FiGithub /> GitHub
            </a>
          </div>

          <p className="mt-6 text-gray-400 italic">
            Or reach out directly at:{" "}
            <a href="mailto:your.email@example.com" className="text-blue-500 underline">
              deepasklight@gmail.com
            </a>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
