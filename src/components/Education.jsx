const Education = () => {
  return (
    <section
      id="education"
      className="p-8  flex flex-col gap-10"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold mb-2">Education</h2>
      </div>

      <div className="flex flex-col gap-4 md:w-2/3 mx-auto">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold text-lg">B.Tech in Computer Science & Engineering</p>
          <p className="text-sm text-gray-600">Dr. AITD Kanpur • 2021 - 2025 • 8.1 CGPA </p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold text-lg">Intermediate (12th)</p>
          <p className="text-sm text-gray-600">Year of Completion: 2020 • 81%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
