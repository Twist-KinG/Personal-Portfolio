import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
// import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="/" element={<Hero />} />

          <Route path="/about" element={<About />} />

          {/* <Route path="/skills" element={<Skills />} /> */}

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}
