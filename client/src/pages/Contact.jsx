// Contact.jsx
import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-900 text-gray-100 py-20">

      <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          
          <h2 className="text-4xl font-bold">Contact Me</h2>

          <p className="text-gray-300 text-lg">
            💬 Wanna work together or hire me? Fill the form and I'll get back ASAP.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">

            <a href="mailto:deepasklight@gmail.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
              <FiMail /> Say Hello
            </a>

            <a
              href="https://www.linkedin.com/in/deep-ask-077138382/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-transform duration-300">
              <FiLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/Twist-KinG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-transform duration-300">
              <FiGithub /> GitHub
            </a>
          </div>

          <p className="mt-6 text-gray-400 italic">
            Or reach out directly at:{" "}
            <a href="mailto:deepasklight@gmail.com" className="text-blue-500 underline">
              deepasklight@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-md flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          
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

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
            Send Message
          </button>

        </motion.form>
      </div>
    </section>
  );
}
