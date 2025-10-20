// App.js
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
import bg_grid from "./assets/bg_grid.svg";
function App() {
  return (
    <div className="overflow-x-hidden font-sans">
      <Navbar />

      {/* Rest of the site stays centered */}
      <div 
        className="w-screen mx-auto flex flex-col bg-gradient-to-br from-gray-100 via-blue-100 to-white"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <CodingProfiles />
        <HireMe />
        <Footer />
      </div>
    </div>
  );
}


export default App