import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="p-8  flex flex-col gap-10"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold mb-2">Experience</h2>
      </div>

      <div className="flex flex-col gap-4 md:w-2/3 mx-auto">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold text-lg">Intern - BasketHunt</p>
          <p className="text-sm text-gray-600">Sep 2023 - Nov 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
