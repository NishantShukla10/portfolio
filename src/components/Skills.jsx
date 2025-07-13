// components/Skills.jsx
import React from "react";

const Skills = () => {
  const skills = ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "C++", "DSA", "OOPs",
    "SQL", "HTML", "CSS", "JavaScript", "Redux"
  ];
  return (
    <section id="skills" className=" p-8 flex flex-col gap-10">
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold mb-2">My Skills</h2>
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-500 p-4 rounded text-center text-white font-medium">{skill}</div>
        ))}
      </div>

    </section>
  );
};

export default Skills;