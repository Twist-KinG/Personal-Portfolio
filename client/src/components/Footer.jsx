// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function Footer() {
//   const navigate = useNavigate();

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Projects", path: "/projects" },
//     { label: "Contact", path: "/contact" },
//   ];

//   const socialLinks = [
//     { label: "GitHub", url: "https://github.com/yourusername", icon: <FaGithub /> },
//     { label: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
//     { label: "Twitter", url: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
//     { label: "Email", url: "mailto:your.email@example.com", icon: <FaEnvelope /> },
//   ];

//   // Initialize tsparticles
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   const particlesOptions = {
//     background: { color: { value: "#1f2937" } }, // dark background
//     fpsLimit: 60,
//     interactivity: {
//       events: { onHover: { enable: true, mode: "repulse" }, resize: true },
//       modes: { repulse: { distance: 100, duration: 0.4 } },
//     },
//     particles: {
//       color: { value: "#ffffff" },
//       links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.2, width: 1 },
//       collisions: { enable: false },
//       move: { direction: "none", enable: true, outModes: "bounce", random: true, speed: 0.3, straight: false },
//       number: { density: { enable: true, area: 800 }, value: 30 },
//       opacity: { value: 0.3 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 3 } },
//     },
//     detectRetina: true,
//   };

//   return (
//     <footer className="bg-gray-800 text-gray-100 pt-12 pb-6 relative overflow-hidden">
//       {/* Particle Background */}
//       <Particles className="absolute inset-0" id="tsparticles" init={particlesInit} options={particlesOptions} />

//       <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* About */}
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold text-white">Dipesh Thing</h3>
//           <p className="text-gray-300 text-sm leading-relaxed">
//             Passionate Full-Stack Developer creating modern, responsive, and user-friendly web experiences.
//           </p>
//           <p className="text-gray-400 text-xs mt-4">
//             &copy; {new Date().getFullYear()} Dipesh Thing. All rights reserved.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="space-y-4">
//           <h4 className="text-lg font-semibold text-white">Quick Links</h4>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             {navItems.map((item) => (
//               <li
//                 key={item.path}
//                 className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
//                 onClick={() => navigate(item.path)}
//               >
//                 {item.label}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div className="space-y-4">
//           <h4 className="text-lg font-semibold text-white">Follow Me</h4>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             {socialLinks.map((link, index) => (
//               <li
//                 key={index}
//                 className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
//               >
//                 <span className="text-lg">{link.icon}</span>
//                 <a
//                   href={link.url}
//                   target={link.label === "Email" ? "_self" : "_blank"}
//                   rel="noopener noreferrer"
//                   className="hover:underline"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     </footer>
//   );
// }
















import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/#about" },
    { label: "Projects", path: "/#projects" },
    { label: "Contact", path: "/#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/yourusername", icon: <FaGithub /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
    { label: "Twitter", url: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
    { label: "Email", url: "mailto:your.email@example.com", icon: <FaEnvelope /> },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: { value: "#1f2937" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.2, width: 1 },
      collisions: { enable: false },
      move: { direction: "none", enable: true, outModes: "bounce", random: true, speed: 0.3, straight: false },
      number: { density: { enable: true, area: 800 }, value: 30 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // Handle nav clicks
  const handleNavClick = (path) => {
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-100 pt-12 pb-6 relative overflow-hidden">
      {/* Particle Background */}
      <Particles className="absolute inset-0" id="tsparticles" init={particlesInit} options={particlesOptions} />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Dipesh Thing</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Passionate Full-Stack Developer creating modern, responsive, and user-friendly web experiences.
          </p>
          <p className="text-gray-400 text-xs mt-4">
            &copy; {new Date().getFullYear()} Dipesh Thing. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                onClick={() => handleNavClick(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Follow Me</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-lg">{link.icon}</span>
                <a
                  href={link.url}
                  target={link.label === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
