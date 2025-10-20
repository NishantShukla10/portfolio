// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CodingProfiles from "./components/CodingProfiles";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import AllProjects from "./Pages/AllProjects";

function App() {
  return (
    <div className="overflow-x-hidden font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Experience />
              <CodingProfiles />
              <HireMe />
            </>
          } />
          
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
        
        <Footer />
    </div>
  );
}

export default App;