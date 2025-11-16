import React from "react";
import myImage from "../assets/profile_picture.jpg";

const Hero = () => {  
  return (
    <section
      id="home"
      className="relative w-screen min-h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>


      <div className="relative w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-8 py-20 md:py-0">
        
        
        <div className="flex-1 space-y-6 text-center md:text-left z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <span className="text-sm text-purple-300 font-medium">Available for opportunities</span>
          </div>


          <div className="space-y-2">
            <h1 className="text-3xl xs2:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-200">Hi, I'm</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Nishant Shukla
              </span>
            </h1>
            <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto md:mx-0"></div>
          </div>


          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            A passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with expertise in the{" "}
            <span className="text-pink-400 font-semibold">MERN stack</span>, specializing in building responsive, 
            scalable web applications. With <span className="text-purple-400 font-semibold">500+ DSA</span> problems solved.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 hover:cursor-pointer rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>


          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#hire"
              className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border-2 border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:border-purple-400 hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>


        <div className="flex-1 flex justify-center md:justify-end z-10">
          <div className="relative group">
            
            
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
           
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"></div>
              <img
                src={myImage}
                alt="Nishant Shukla"
                className="relative rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              
              
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping"></div>
              <div className="absolute -inset-4 rounded-full border border-purple-500/20"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll Down</span>
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;