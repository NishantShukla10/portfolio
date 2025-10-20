import React from "react";
const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "Redux", "Tailwind CSS", "HTML", "CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "JWT"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Programming",
      skills: ["C++", "Python", "DSA", "OOPs", "SQL"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section 
      id="skills" 
      className="relative w-full min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative w-11/12 max-w-7xl mx-auto flex flex-col gap-16">
        
        
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>


        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-200">
                  {category.category}
                </h3>
              </div>


              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group hover:cursor-pointer relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  >
                    
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    <div className="relative text-center">
                      <p className="text-gray-200 font-semibold text-sm md:text-base">
                        {skill}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;