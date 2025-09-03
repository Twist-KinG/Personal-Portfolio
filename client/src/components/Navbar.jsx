import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false); // close menu after click
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-gray-900 shadow-md" : "bg-gray-800"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <h1
          className="text-xl font-bold text-white cursor-pointer hover:text-blue-400"
          onClick={() => scrollToSection("hero")}>
          DeepAskLight
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="text-gray-100 cursor-pointer hover:text-blue-400"
              onClick={() => scrollToSection(item.id)}>
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden fixed top-4 right-12 text-white text-2xl z-50 focus:outline-none"
          onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {open && (
          
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed top-16 right-0 w-56 sm:w-64 h-full bg-gray-800 z-40 flex flex-col items-center pt-6 space-y-6 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-gray-100 text-lg font-medium hover:text-blue-400"
                onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>

            ))}
          </motion.div>

        )}
      </AnimatePresence>

    </nav>
  );
}
