
import React from "react";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
    
  );
}
