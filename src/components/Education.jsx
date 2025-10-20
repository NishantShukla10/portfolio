const Education = () => {
  const educations = [
    {
      title: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Dr. AITD Kanpur",
      duration: "2021 - 2025",
      result: "8.1 CGPA"
    },
    {
      title: "Intermediate (12th Grade)",
      field: "Science Stream",
      duration: "2019 - 2020",
      result: "81%"
    }
  ];

  return (
    <section id="education" className="px-4 py-10 md:px-10 flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
          My Education
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-md border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 p-5 md:p-6"
          >
            <div className="text-xl font-bold text-gray-800 text-center mb-2">
              {edu.title}
            </div>
            <div className="text-base font-medium text-gray-700 text-center mb-1">
              {edu.field}
            </div>
            {edu.institution && (
              <div className="text-sm text-gray-600 text-center mb-1">
                From: <span className="font-semibold">{edu.institution}</span>
              </div>
            )}
            <div className="text-sm text-gray-600 text-center mb-1">
              Duration: <span className="font-semibold">{edu.duration}</span>
            </div>
            <div className="text-sm text-gray-600 text-center">
              Result: <span className="font-semibold">{edu.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
