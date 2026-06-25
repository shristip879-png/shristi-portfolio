import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;