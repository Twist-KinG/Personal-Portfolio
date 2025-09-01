
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { FaBriefcase, FaCode, FaHeart, FaGlobe } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  const professions = [
    "Full-Stack Developer",
    "Frontend Developer",
    "React Enthusiast",
    "Node.js Developer",
    "UI/UX Designer",
  ];

  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind", "Express"];
  const projects = ["EMS System", "LMS Platform", "Gyaandeep Nepal"];

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
    <section className="bg-gray-900 text-gray-100 min-h-screen flex flex-col justify-center items-center mt-14 px-6 py-12 md:py-0">

      {/* Main Hero Section */}
      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center md:items-start gap-12">

        {/* Left Side - Text */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I’m Dipesh Thing 👋
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold h-10 text-blue-500">
            {displayText}
            <span className="border-r-2 border-red-500 ml-1 animate-pulse"></span>
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base md:text-lg">
            Passionate about creating clean, user-friendly, and efficient web
            applications. Skilled in React, Node.js, Express, MongoDB, and Tailwind CSS.
          </p>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            {skills.map((skill) => (
              <button
                key={skill}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm transition duration-300"
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Projects badges */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            {projects.map((project) => (
              <button
                key={project}
                onClick={() => navigate("/projects")}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-sm transition duration-300"
              >
                {project}
              </button>
            ))}
          </div>

          {/* Main CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300 text-sm sm:text-base"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>

          {/* Invitation text */}
          <p className="mt-6 text-gray-300 italic max-w-md">
            💬 Wanna work together or hire me? Reach out and let's create something amazing!
          </p>
        </div>

        {/* Right Side - Photo */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 flex items-center justify-center">
            {/* Rotating gradient border */}
            <div className="absolute inset-0 rounded-full p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 blur-xl animate-gradient bg-[length:200%_200%]"></div>
            </div>

            {/* Inner static image */}
            <div className="relative w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 rounded-full overflow-hidden bg-gray-900 border-4 border-gray-900">
              <img
                src="src/assets/img/photo.jpeg" // replace with your photo
                alt="Dipesh Thing"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>


      
      {/* Additional Sections Below Hero */}
      <div className="w-full mt-12 md:mt-24 px-6 md:px-20 flex flex-col gap-12 ">

        
        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">

          {/* Experience */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <FaBriefcase className="w-10 h-10 text-blue-500 mx-auto mb-4 transform transition-transform duration-300 hover:scale-125 hover:rotate-12" />
            <h2 className="text-2xl font-bold text-blue-500">2+ Years</h2>
            <p className="text-gray-300 text-sm mt-2">
              Building scalable web apps with MERN stack & modern tools.
            </p>
          </div>

          {/* Projects */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <FaCode className="w-10 h-10 text-green-500 mx-auto mb-4 transform transition-transform duration-300 hover:scale-125 hover:rotate-12" />
            <h2 className="text-2xl font-bold text-green-500">10+ Projects</h2>
            <p className="text-gray-300 text-sm mt-2">
              Delivered EMS, Doctor Booking, educational platforms and more with clean code.
            </p>
          </div>

          {/* Dedication */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <FaHeart className="w-10 h-10 text-yellow-400 mx-auto mb-4 transform transition-transform duration-300 hover:scale-125 hover:rotate-12 animate-pulse" />
            <h2 className="text-2xl font-bold text-yellow-400">100% Dedication</h2>
            <p className="text-gray-300 text-sm mt-2">
              Passionate about creating user-first designs & seamless UX.
            </p>
          </div>

          {/* Open Source */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <FaGlobe className="w-10 h-10 text-purple-500 mx-auto mb-4 transform transition-transform duration-300 hover:scale-125 hover:rotate-12 animate-spin-slow" />
            <h2 className="text-2xl font-bold text-purple-500">Open Source</h2>
            <p className="text-gray-300 text-sm mt-2">
              Sharing knowledge & contributing to the dev community worldwide.
            </p>
          </div>
        </div>


        {/* About section imported */}
        <About />

        {/* Projects section imported */}
        <Projects />

        {/* Contact section imported */}
        <Contact />

      </div>

      {/* Inline styles for animation */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }

          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient-move 5s ease infinite;
          }


    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 8s linear infinite;
    }
  `}
      </style>

    </section>
  );
}
