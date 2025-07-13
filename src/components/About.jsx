import React from "react";
import aboutUs from "../assets/about-us.png";
import resumePDF from "../assets/Nishant_n2.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="w-full 
      "
    >
      <div className="w-11/12 mx-auto flex flex-col gap-8">
        {/* Section heading */}
        <h2 className="text-5xl font-bold text-center text-gray-800">About Me</h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={aboutUs} alt="About" className="w-full h-auto rounded" />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed text-justify text-[17px]">
              I am a Computer Science and Engineering graduate from Dr. APJ Abdul Kalam Technical University with a strong foundation in Data Structures and Algorithms (C++) and hands-on experience in full-stack web development.
              <br /><br />
              I specialize in building responsive, user-friendly web applications using modern technologies like React.js, Redux, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, HTML, and CSS.
              <br /><br />
              Over the years, I've solved 500+ DSA problems on platforms like LeetCode and GFG, continually strengthening my problem-solving abilities and algorithmic thinking.
              I’m always looking for opportunities to contribute to impactful projects, grow as a developer, and be part of teams that build meaningful tech solutions.
            </p>

            {/* Download button */}
            <a
              href={resumePDF}
              download="Nishant_Shukla_Resume.pdf"
              className="inline-block mt-6 bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
