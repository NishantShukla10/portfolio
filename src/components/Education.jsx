import React from "react";

const Education = () => {
  const educations = [
    {
      title: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Dr. AITD Kanpur",
      duration: "2021 - 2025",
      result: "8.1 CGPA",
      icon: "🎓",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intermediate (12th Grade)",
      field: "Science Stream",
      institution: "Swami Gokulanand IC",
      duration: "2019 - 2020",
      result: "81%",
      icon: "📚",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section
      id="education"
      className="relative w-full min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative w-11/12 max-w-7xl mx-auto flex flex-col gap-16">


        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            My Education
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 text-lg">
            Academic journey and achievements
          </p>
        </div>


        <div className="relative">
          <div className="flex flex-wrap gap-8 max-w-6xl mx-auto justify-center">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-full lg:w-[calc(50%-1rem)]"
              >
                <div className="w-full">
                  <div className="group relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500`}></div>

                    <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                          {edu.title}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.field}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-20 flex items-center justify-center`}>
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-800">Institution</p>
                            <p className="text-gray-300 font-medium">{edu.institution}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-20 flex items-center justify-center`}>
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-800">Duration</p>
                            <p className="text-gray-300 font-medium">{edu.duration}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-20 flex items-center justify-center`}>
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-800">Result</p>
                            <p className={`text-xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                              {edu.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;