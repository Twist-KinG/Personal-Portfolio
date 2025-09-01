
import React, { useState, useEffect } from "react";
import { FaBriefcase, FaCode, FaHeart, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
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
        timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="bg-gray-900 text-gray-100 min-h-screen flex flex-col justify-center items-center mt-14 px-6 py-12 md:py-0">
      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center md:items-start gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m Dipesh Thing 👋
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold h-10 text-blue-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {displayText}
            <span className="border-r-2 border-red-500 ml-1 animate-pulse"></span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Passionate about creating clean, user-friendly, and efficient web applications.
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {skills.map((skill) => (
              <button key={skill} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm transition duration-300">
                {skill}
              </button>
            ))}
          </motion.div>

          {/* Project Buttons */}
          <motion.div
            className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {projects.map((project) => (
              <button
                key={project}
                onClick={() => scrollToSection("projects")}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-sm transition duration-300"
              >
                {project}
              </button>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300 text-sm sm:text-base"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded shadow-md transition duration-300 text-sm sm:text-base"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.p
            className="mt-6 text-gray-300 italic max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            💬 Wanna work together or hire me? Reach out and let's create something amazing!
          </motion.p>
        </div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 blur-xl animate-gradient bg-[length:200%_200%]"></div>
            </div>
            <div className="relative w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 rounded-full overflow-hidden bg-gray-900 border-4 border-gray-900">
              <img src="src/assets/img/photo.jpeg" alt="Dipesh Thing" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
        {[
          { icon: FaBriefcase, title: "2+ Years", text: "Building scalable web apps with MERN stack.", color: "text-blue-500" },
          { icon: FaCode, title: "10+ Projects", text: "Delivered EMS, LMS, educational platforms.", color: "text-green-500" },
          { icon: FaHeart, title: "100% Dedication", text: "Creating user-first designs & seamless UX.", color: "text-yellow-400", pulse: true },
          { icon: FaGlobe, title: "Open Source", text: "Contributing to the dev community worldwide.", color: "text-purple-500", spin: true },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <item.icon className={`w-10 h-10 mx-auto mb-4 ${item.color} ${item.pulse ? "animate-pulse" : ""} ${item.spin ? "animate-spin-slow" : ""}`} />
            <h2 className={`text-2xl font-bold ${item.color}`}>{item.title}</h2>
            <p className="text-gray-300 text-sm mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }

        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient-move 5s ease infinite; }
      `}</style>
    </section>
  );
}
