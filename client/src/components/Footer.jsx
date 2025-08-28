import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourprofile" },
    { label: "Twitter", url: "https://twitter.com/yourprofile" },
    { label: "Email", url: "mailto:your.email@example.com" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-100 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Dipesh Thing</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Passionate Full-Stack Developer creating modern, responsive, and user-friendly web experiences.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed mt-10">
            &copy; {new Date().getFullYear()} Dipesh Thing. All rights reserved.
          </p>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navItems.map((item) => (
              <li
                key={item.path}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target={link.label === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
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
