
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaCss3Alt, FaServer, FaAward, FaUserGraduate, FaYoutube } from "react-icons/fa";

export default function About() {
  const navigate = useNavigate();

  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-emerald-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Tailwind", icon: <FaCss3Alt className="text-teal-400" /> },
    { name: "Express", icon: <FaServer className="text-gray-400" /> },
  ];

  const projects = ["EMS System", "LMS Platform", "Gyaandeep Nepal"];

  const achievements = [
    { title: "6 Months", description: "Average time to land first dev job", icon: <FaAward className="w-8 h-8 text-yellow-400 mx-auto mb-2" /> },
    { title: "7M+ Students", description: "Trained globally through projects", icon: <FaUserGraduate className="w-8 h-8 text-green-400 mx-auto mb-2" /> },
    { title: "1B+ Views", description: "Total YouTube views & reach", icon: <FaYoutube className="w-8 h-8 text-red-500 mx-auto mb-2" /> },
  ];

  return (
    <section className="w-full bg-gray-900 text-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

        {/* About description */}
        <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-12 text-lg">
          I’m a passionate developer who thrives on crafting <span className="text-blue-400">modern, user-friendly web apps</span>.
          Skilled in React, Node.js, Express, and MongoDB. 🚀 Always eager to learn new technologies,
          solve real-world problems, and deliver <span className="text-green-400">impactful solutions</span>.
        </p>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-transform transform hover:scale-110"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => navigate("/projects")}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:shadow-lg transition-transform hover:scale-105"
              >
                {project}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {achievements.map((achieve, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                {achieve.icon}
                <h4 className="text-2xl font-bold text-blue-400 mb-2">{achieve.title}</h4>
                <p className="text-gray-300 text-sm">{achieve.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
