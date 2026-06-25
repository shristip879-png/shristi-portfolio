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

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
        
