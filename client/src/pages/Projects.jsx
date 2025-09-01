
import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "EMS System",
    desc: "Manage employees, salaries & leaves efficiently.",
    img: "src/assets/img/ems.png",
    preview: "src/assets/img/ems_preview.png", 
    details: "/projects/ems",
    live: "https://ems-system.vercel.app",
  },
  {
    title: "LMS Platform",
    desc: "Online course platform with quizzes and progress tracking.",
    img: "src/assets/img/lms.png",
    preview: "src/assets/img/lms_preview.png",
    details: "/projects/lms",
    live: "https://lms-platform.vercel.app",
  },
  {
    title: "Gyaandeep Nepal",
    desc: "Educational resource sharing platform for students.",
    img: "src/assets/img/gyaandeep.png",
    preview: "src/assets/img/gyaandeep_preview.png",
    details: "/projects/gyaandeep",
    live: "https://gyaandeep-nepal.vercel.app",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-900 text-gray-100" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(project.details)}
            />

            {/* Project Content */}
            <div className="p-6">
              <h3
                className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors"
                onClick={() => navigate(project.details)}
              >
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>

              {/* Preview Section */}
              {project.preview && (
                <div className="mb-4 border border-gray-700 rounded overflow-hidden">
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              )}

              <div className="flex gap-4">
                {/* View Details Button */}
                <button
                  onClick={() => navigate(project.details)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded shadow-md transition duration-300 text-sm sm:text-base"
                >
                  View Details
                </button>

                {/* Live Preview Button */}
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition duration-300 text-sm sm:text-base"
                >
                  Live Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-400 italic">
        💡 Click on the image, title, or "View Details" to see project details, or "Live Preview" to open the deployed project.
      </p>
    </section>
  );
}
