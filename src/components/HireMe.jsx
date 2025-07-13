import React from "react";
import resumePDF from "../assets/Nishant_n2.pdf";
import gif from "../assets/hire.gif";

const HireMe = () => {
    return (
        <section
            id="hire"
            className="p-8 flex flex-col gap-10 "
        >
            {/* Section Heading */}
            <div className="flex justify-center items-center">
                <h2 className="text-5xl font-bold mb-2">Want to Hire Me?</h2>
            </div>

            {/* Image + Info Side by Side (responsive) */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Image Left */}
                <div className="md:w-1/2">
                    <img src={gif} alt="Hire Me" className="w-full h-auto rounded" />
                </div>

                {/* Content Right */}
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
                    <p className="mb-4 text-gray-700 leading-relaxed text-justify text-lg md:text-xl font-medium">
                        I’m currently seeking exciting new opportunities where <br /> I can contribute to impactful projects. <br /><br />
                        If you're looking for a dedicated full-stack developer with <br /> solid experience in the MERN stack and strong problem-solving <br /> skills - feel free to get in touch!
                    </p>

                    <div className="space-y-2 text-gray-800 mb-6 text-base md:text-lg font-semibold">
                        <p className="flex items-center gap-2">
                            📧 <a href="mailto:nishantshukla332@gmail.com" className="text-blue-600 underline hover:text-blue-800">
                                nishantshukla332@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            📞 <span className="font-semibold">+91-76788 81312</span>
                        </p>

                    </div>

                    <div className="flex gap-5">
                        <a
                            href="https://www.linkedin.com/in/nishantshukla10/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
                        >
                            LinkedIn
                        </a>

                        <a
                            href={resumePDF}
                            download="Nishant_Shukla_Resume.pdf"
                            className="inline-block bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireMe;
