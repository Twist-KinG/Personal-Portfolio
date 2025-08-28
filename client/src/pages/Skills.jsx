import React from "react";
import { useNavigate } from "react-router-dom";

const skills = [
  { name: "React", details: "/skills/react" },
  { name: "Node.js", details: "/skills/node" },
  { name: "MongoDB", details: "/skills/mongodb" },
  { name: "JavaScript", details: "/skills/javascript" },
  { name: "Tailwind", details: "/skills/tailwind" },
  { name: "Express", details: "/skills/express" },
];

export default function Skills() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-900 py-16 text-gray-100" id="skills">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 shadow-lg rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-105 transition-transform duration-300 flex items-center justify-center text-lg font-semibold"
              onClick={() => navigate(skill.details)}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-gray-400 italic">
        💡 Click on a skill to explore projects and details related to it.
      </p>
    </section>
  );
}
