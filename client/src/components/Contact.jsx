import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-6">
          Let’s build something amazing together 🚀
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
