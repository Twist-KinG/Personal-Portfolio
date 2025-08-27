import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          YourName
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.span
                    key="moon"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    🌙
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ☀️
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-4 space-y-4 font-medium">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.span
                    key="moon-mobile"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    🌙
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun-mobile"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ☀️
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
