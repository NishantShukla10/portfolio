import React from "react";
import myImage from "../assets/profile_picture.jpg";

const Hero = () => {
  
  return (
    // Outer full-width section with background
    <section
      id="home"
      className="w-screen h-screen flex justify-center items-center
        "
    >
      {/* Inner content constrained to w-11/12 */}
      <div className="w-11/12 h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-20 pt-20">
        {/* Left: Text */}
        <div className="space-y-6 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-gray-800">Hi, I'm</span>{" "}
          <span className="text-purple-700">Nishant Shukla</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I'm a passionate Full Stack Developer with expertise in the MERN stack,
          specializing in building responsive, scalable web applications. With 500+ DSA problems solved.
        </p>
        <a
          href="#hire"
          className="inline-block bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
        >
          Want to Hire Me?
        </a>
      </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={myImage}
            alt="Nishant"
            className="rounded-full w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
