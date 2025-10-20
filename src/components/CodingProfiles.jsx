import React from "react";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";

const CodingProfiles = () => {
  
  const profiles = [
    {
      name: "LeetCode",
      logo: leetcode,
      url: "https://leetcode.com/u/NishantShukla10/",
      stats: "500+ Problems",
      color: "from-yellow-500 to-orange-500",
      description: "Consistent problem solver"
    },
    {
      name: "GeeksforGeeks",
      logo: gfg,
      url: "https://www.geeksforgeeks.org/user/nishantshukla332/",
      stats: "250+ Problems",
      color: "from-green-500 to-emerald-500",
      description: "Learning & practicing"
    }
  ];

  return (
    <section
      id="coding"
      className="relative w-full min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative w-11/12 max-w-7xl mx-auto flex flex-col gap-16">
        
        
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Coding Profiles
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 text-lg">
            My journey in competitive programming
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                
                
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative flex flex-col items-center text-center space-y-6">
                  
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                    <div className="relative w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex items-center justify-center border border-white/20">
                      <img
                        src={profile.logo}
                        alt={`${profile.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>


                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      {profile.name}
                    </h3>
                    
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${profile.color} bg-opacity-20 border border-white/20`}>
                      <p className="text-sm font-semibold text-gray-300">
                        {profile.stats}
                      </p>
                    </div>

                    <p className="text-gray-400 text-sm">
                      {profile.description}
                    </p>
                  </div>


                  <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <span className="font-semibold">Visit Profile</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;