import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const footerRef = useRef(null);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/yourusername", icon: <FaGithub /> },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
    { label: "Twitter", url: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
    { label: "Email", url: "mailto:your.email@example.com", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-800 text-gray-100 pt-12 pb-6 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* About Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white">Dipesh Thing</h3>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Passionate Full-Stack Developer creating modern, responsive, and user-friendly web experiences.
          </p>
          <p className="text-gray-400 text-xs mt-4">
            &copy; {new Date().getFullYear()} Dipesh Thing. All rights reserved.
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {/* Quick Links */}
          <div className="transition-transform duration-1000 ease-out">
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="transition-transform duration-1000 ease-out">
            <h4 className="text-lg font-semibold text-white mb-2">Follow Me</h4>
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
      </div>
    </footer>
  );
}
