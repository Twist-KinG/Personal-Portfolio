// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FiExternalLink, FiEye, FiCode } from "react-icons/fi";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "EMS System",
//     desc: "Manage employees, salaries & leaves efficiently.",
//     img: "src/assets/img/ems.png",
//     preview: "src/assets/img/ems_preview.png",
//     details: "/projects/ems",
//     live: "https://ems-system.vercel.app",
//     github: "https://github.com/your-username/ems",
//   },
//   {
//     title: "LMS Platform",
//     desc: "Online course platform with quizzes and progress tracking.",
//     img: "src/assets/img/lms.png",
//     preview: "src/assets/img/lms_preview.png",
//     details: "/projects/lms",
//     live: "https://lms-platform.vercel.app",
//     github: "https://github.com/your-username/lms",
//   },
//   {
//     title: "Gyaandeep Nepal",
//     desc: "Educational resource sharing platform for students.",
//     img: "src/assets/img/gyaandeep.png",
//     preview: "src/assets/img/gyaandeep_preview.png",
//     details: "/projects/gyaandeep",
//     live: "https://gyaandeep-nepal.vercel.app",
//     github: "https://github.com/your-username/gyaandeep",
//   },
// ];

// export default function Projects() {
//   const navigate = useNavigate();

//   return (
//     <section
//       className="max-w-6xl mx-auto px-6 bg-gray-900 text-gray-100"
//       id="projects">
//       <h2 className="text-4xl font-bold mb-12 text-center">🚀 Projects</h2>

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow flex flex-col"
//           >
//             {/* Project Image with Overlay */}
//             <div className="relative group">
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <button
//                   onClick={() => navigate(project.details)}
//                   className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
//                   title="View Details"
//                 >
//                   <FiEye size={20} />
//                 </button>
//                 <button
//                   onClick={() => window.open(project.live, "_blank")}
//                   className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition"
//                   title="Live Preview"
//                 >
//                   <FiExternalLink size={20} />
//                 </button>
//                 <button
//                   onClick={() => window.open(project.github, "_blank")}
//                   className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
//                   title="Source Code"
//                 >
//                   <FiCode size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Project Content */}
//             <div className="p-6 flex flex-col flex-grow">
//               <h3
//                 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors cursor-pointer"
//                 onClick={() => navigate(project.details)}
//               >
//                 {project.title}
//               </h3>
//               <p className="text-gray-300 mb-4 flex-grow">{project.desc}</p>

//               {/* Preview Image (optional) */}
//               {project.preview && (
//                 <div className="mb-4 border border-gray-700 rounded overflow-hidden">
//                   <img
//                     src={project.preview}
//                     alt={`${project.title} preview`}
//                     className="w-full h-32 object-cover"
//                   />
//                 </div>
//               )}

//               {/* Buttons */}
//               <div className="flex gap-3 mt-auto">
//                 <button
//                   onClick={() => navigate(project.details)}
//                   className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition text-sm sm:text-base"
//                 >
//                   <FiEye /> Details
//                 </button>
//                 <button
//                   onClick={() => window.open(project.live, "_blank")}
//                   className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition text-sm sm:text-base"
//                 >
//                   <FiExternalLink /> Live
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <p className="mt-12 text-center text-gray-400 italic">
//         💡 Hover on project images for quick actions, or explore details for a deeper dive.
//       </p>
//     </section>
//   );
// }

















import React from "react";
import { FiExternalLink, FiEye, FiCode } from "react-icons/fi";
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
    <section id="projects" className="max-w-6xl mx-auto px-6 bg-gray-900 text-gray-100 py-20">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow flex flex-col"
          >
            <div className="relative group">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button onClick={() => window.open(project.live, "_blank")} className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition" title="Live Preview">
                  <FiExternalLink size={20} />
                </button>
                <button onClick={() => window.open(project.github, "_blank")} className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition" title="Source Code">
                  <FiCode size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors cursor-pointer">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-400 italic">
        💡 Hover on project images for quick actions, or explore details for a deeper dive.
      </p>
    </section>
  );
}
