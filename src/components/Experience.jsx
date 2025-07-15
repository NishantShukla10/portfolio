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
      skills: ["React", "Tailwind CSS", "JavaScript", "CSS", "Routing", "Git"]
    }
  ];

  return (
    <section id="experience" className="px-4 py-10 md:px-10 flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
          Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            {/* Title, Company, Duration */}
            <div className="text-2xl font-semibold text-gray-800 text-center mb-1">
              {exp.title}
            </div>
            <div className="text-lg font-medium text-gray-700 text-center mb-1">
              {exp.company}
            </div>
            <div className="text-sm italic text-gray-500 text-center mb-4">
              {exp.duration}
            </div>

            {/* Skills Section with Emphasis */}
            <div className="mb-4">
              <div className="flex flex-wrap justify-center gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullet List */}
            <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-relaxed space-y-2">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
