
import React from "react";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EMS System",
    desc: "Manage employees, salaries & leaves efficiently.",
    img: "src/assets/img/ems.png",
    preview: "src/assets/img/ems_preview.png",
    live: "https://ems-system.vercel.app",
    github: "https://github.com/your-username/ems",
  },
  {
    title: "LMS Platform",
    desc: "Online course platform with quizzes and progress tracking.",
    img: "src/assets/img/lms.png",
    preview: "src/assets/img/lms_preview.png",
    live: "https://lms-platform.vercel.app",
    github: "https://github.com/your-username/lms",
  },
  {
    title: "Gyaandeep Nepal",
    desc: "Educational resource sharing platform for students.",
    img: "src/assets/img/gyaandeep.png",
    preview: "src/assets/img/gyaandeep_preview.png",
    live: "https://gyaandeep-nepal.vercel.app",
    github: "https://github.com/your-username/gyaandeep",
  },
];

export default function Projects() {
  return (

    <section id="projects" className="bg-gray-900 text-gray-100 py-20">

      <div className="max-w-7xl w-full mx-auto px-6">

        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          🚀 Projects
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow flex flex-col">
              
              {/* Project Image with overlay buttons */}
              <div className="relative group">

                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 
                  <button
                    onClick={() => window.open(project.live, "_blank")}
                    className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition"
                    title="Live Preview">
                    
                    <FiExternalLink size={20} />

                  </button>

                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                    title="Source Code">
                    <FiCode size={20} />
                  </button>

                </div>

              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors cursor-pointer">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow">{project.desc}</p>

                {/* Optional Preview */}
                {project.preview && (
                  <div className="mb-4 border border-gray-700 rounded overflow-hidden">

                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="w-full h-32 object-cover"
                    />

                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-400 italic">
          💡 Hover on project images to see Live and Source Code buttons.
        </p>
        
      </div>

    </section>

  );
  
}
