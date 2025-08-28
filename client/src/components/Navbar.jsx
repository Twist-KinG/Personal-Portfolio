import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer text-white"
          onClick={() => navigate("/")}>
          DeepAskLight
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="cursor-pointer text-gray-100 hover:text-blue-400 transition-colors duration-300"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-100 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800 flex flex-col items-center py-4 space-y-4 font-medium"
          >
            {navItems.map((item) => (
              <li
                key={item.path}
                className="cursor-pointer text-gray-100 hover:text-blue-400 transition-colors duration-300"
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
