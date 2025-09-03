// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/yourusername", icon: <FaGithub /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
    { label: "Twitter", url: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
    { label: "Email", url: "mailto:your.email@example.com", icon: <FaEnvelope /> },
  ];

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-gray-100 pt-12 pb-6">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

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
                key={item.id}
                className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                onClick={() => handleNavClick(item.id)}>
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
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
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
