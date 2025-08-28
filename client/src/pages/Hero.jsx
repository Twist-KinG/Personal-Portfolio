import React, { useState, useEffect } from "react";

export default function Hero() {
  const professions = [
    "Full-Stack Developer",
    "Frontend Developer",
    "React Enthusiast",
    "Node.js Developer",
    "UI/UX Designer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const delay = 1500;

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const fullText = professions[currentIndex];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % professions.length);
      } else {
        timeout = setTimeout(
          handleTyping,
          isDeleting ? deletingSpeed : typingSpeed
        );
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section className="bg-gray-900 text-gray-100 h-screen flex flex-col md:flex-row justify-center items-center px-6">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I’m Dipesh Thing 👋
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold h-10 text-red-500">
          {displayText}
          <span className="border-r-2 border-red-500 ml-1 animate-pulse"></span>
        </h2>

        <p className="text-gray-400 max-w-md leading-relaxed">
          Passionate about creating clean, user-friendly, and efficient web
          applications. Skilled in React, Node.js, Express, MongoDB, and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side - Animated Border Photo */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative w-80 h-80 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 blur-xl animate-spin-slow"></div>

          <div className="relative w-72 h-72 rounded-full overflow-hidden bg-gray-900 border-4 border-gray-900">
            <img
              src="src\assets\img\photo.jpeg" // replace with your photo
              alt="John Doe"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
