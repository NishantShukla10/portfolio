import React from "react";
import aboutUs from "../assets/about-us.png";
import resumePDF from "../assets/Nishant_Resume.pdf";

const About = () => {

  const highlights = [
    { number: "500+", label: "DSA Problems Solved" },
    { number: "2025", label: "CS Graduate" },
  ];

  const skills = [
    "React.js", "Node.js", "MongoDB", "Express.js", 
    "JavaScript", "C++", "Tailwind CSS", "Redux", "Python",
    "SQL", "HTML", "CSS", "OOPs"
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative w-11/12 max-w-7xl mx-auto flex flex-col gap-16">
        
        
        <div className="text-center space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>


        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src={aboutUs} 
                  alt="About" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>


              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-purple-500 rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-pink-500 rounded-br-2xl"></div>
            </div>
          </div>


          <div className="lg:w-1/2 space-y-8">
            
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a <span className="text-purple-400 font-semibold">Computer Science and Engineering</span> graduate from Dr. APJ Abdul Kalam Technical University with a strong foundation in Data Structures and Algorithms (C++) and hands-on experience in <span className="text-pink-400 font-semibold">full-stack web development</span>.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                I specialize in building responsive, user-friendly web applications using modern technologies like React.js, Redux, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Over the years, I've solved <span className="text-purple-400 font-semibold">500+ DSA problems</span> on platforms like LeetCode and GFG, continually strengthening my problem-solving abilities and algorithmic thinking.
              </p>
            </div>


            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 hover:cursor-pointer rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center group"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>


            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 hover:cursor-pointer py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>


            <div className="flex gap-4 pt-4">
              <a
                href={resumePDF}
                download="Nishant_Shukla_Resume.pdf"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                <span className="relative z-10">Download CV</span>
                <svg 
                  className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:border-purple-400"
              >
                View Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;