import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-900 py-16 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Let’s build something amazing together 🚀
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
