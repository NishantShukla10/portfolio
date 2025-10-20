import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "IT and Web Development Intern",
      company: "BasketHunt",
      duration: "Sep 2023 - Nov 2023",
      description: [
        "Developed responsive web interfaces using React.js and Tailwind CSS, contributing to real-world projects.",
        "Built scalable and reusable frontend components in collaboration with a development team, applying best practices in conditional rendering, API integration, and routing.",
        "Gained practical experience during an internship by developing product cards and implementing category-based filtering using React and modern frontend technologies."
      ],
      skills: ["React", "Tailwind CSS", "JavaScript", "CSS", "Routing", "Git"],
      icon: "💼",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section 
      id="experience" 
      className="relative w-full min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative w-11/12 max-w-7xl mx-auto flex flex-col gap-16">
        
        
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 text-lg">
            Professional journey and contributions
          </p>
        </div>


        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative"
            >
              
              <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}></div>
              
              
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 space-y-6 h-full flex flex-col">
                
                
                <div className="space-y-4">
                  
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-lg opacity-50`}></div>
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-3xl`}>
                        {exp.icon}
                      </div>
                    </div>
                  </div>


                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>


                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-400 font-medium">{exp.duration}</span>
                    </div>
                  </div>
                </div>


                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 font-semibold">Technologies Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-20 border border-white/10 text-gray-200 text-sm font-medium hover:bg-opacity-30 transition-all duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>


                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="text-gray-300 font-semibold">Key Contributions</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 leading-relaxed">
                        <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2`}></span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>


                <div className={`h-1 w-full bg-gradient-to-r ${exp.color} rounded-full opacity-50`}></div>
              </div>
            </div>
          ))}
          </div>
        </div>


        <div className="text-center">
          <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg">
              🚀 <span className="font-semibold text-purple-400">Always learning, always growing</span> - 
              Open to new challenges and opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;