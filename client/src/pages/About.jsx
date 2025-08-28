import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind", "Express"];
  const projects = ["EMS System", "LMS Platform", "Gyaandeep Nepal"];
  const achievements = [
    { title: "6 Months", description: "Average time to land your first developer job" },
    { title: "7,000,000+", description: "Students trained globally" },
    { title: "1B+", description: "Total YouTube views" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-900 text-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

      {/* About description */}
      <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-12">
        I’m a passionate developer who loves crafting simple and user-friendly web experiences.
        Skilled in React, Node.js, and MongoDB. Always eager to learn new technologies and solve challenging problems.
      </p>

      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <button
              key={skill}
              // onClick={() => navigate("/skills")} // Redirect to skills page
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Projects</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {projects.map((project) => (
            <button
              key={project}
              onClick={() => navigate("/projects")} // Redirect to projects page
              className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition duration-300"
            >
              {project}
            </button>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {achievements.map((achieve, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-3xl font-bold text-blue-500 mb-2">{achieve.title}</h4>
              <p className="text-gray-300 text-sm">{achieve.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
