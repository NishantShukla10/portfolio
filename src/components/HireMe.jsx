import React from "react";
import resumePDF from "../assets/Nishant_Resume.pdf";
import gif from "../assets/hire.gif";

const HireMe = () => {

  return (
    <section
      id="hire"
      className="relative w-full min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative w-11/12 max-w-7xl mx-auto flex flex-col gap-16">
        
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-purple-300 font-semibold">Open to Opportunities</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Want to Hire Me?
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 text-lg">
            Let's build something amazing together
          </p>
        </div>


        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
                <img 
                  src={gif} 
                  alt="Hire Me" 
                  className="w-full h-auto object-cover rounded-3xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-purple-500 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-pink-500 rounded-full opacity-50"></div>
            </div>
          </div>


          <div className="lg:w-1/2 space-y-8">
            
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm currently seeking exciting new opportunities where I can contribute to 
                <span className="text-purple-400 font-semibold"> impactful projects</span>.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                If you're looking for a dedicated <span className="text-pink-400 font-semibold">full-stack developer</span> with 
                solid experience in the <span className="text-purple-400 font-semibold">MERN stack</span> and 
                strong problem-solving skills - feel free to get in touch!
              </p>
            </div>


            <div className="space-y-4">
              <a
                href="mailto:nishantshukla332@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-gray-200 font-semibold group-hover:text-purple-400 transition-colors">
                    nishantshukla332@gmail.com
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>


              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-gray-200 font-semibold">
                    +91-76788 81312
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/nishantshukla10/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="relative z-10">LinkedIn Profile</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href={resumePDF}
                download="Nishant_Shukla_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>


            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <p className="text-gray-300 text-sm leading-relaxed">
                💡 <span className="font-semibold text-purple-400">Quick Response:</span> I typically respond to messages within 24 hours. 
                Looking forward to discussing how I can contribute to your team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;