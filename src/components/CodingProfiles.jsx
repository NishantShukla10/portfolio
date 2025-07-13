import React from "react";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";

const CodingProfiles = () => {
  return (
    <section
      id="coding"
      className="p-8  flex flex-col gap-10"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold mb-2">Online Coding Profiles</h2>
      </div>

      <div className="flex justify-center gap-10 flex-wrap">
        {/* LeetCode */}
        <div className="flex flex-col items-center text-center">
          <img
            src={leetcode}
            alt="LeetCode Logo"
            className="w-20 h-20 object-contain mb-2"
          />
          <a
            href="https://leetcode.com/u/NishantShukla10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Link
          </a>
        </div>

        {/* GFG */}
        <div className="flex flex-col items-center text-center">
          <img
            src={gfg}
            alt="GeeksforGeeks Logo"
            className="w-20 h-20 object-contain mb-2"
          />
          <a
            href="https://www.geeksforgeeks.org/user/nishantshukla332/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 underline hover:text-green-900"
          >
            Link
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
