import React from "react";
import img1 from "../assets/UserFlow.png";
import img2 from "../assets/shoppingCart.png";
import img3 from "../assets/weatherApp.png";
import img4 from "../assets/razorPay.png";

const Projects = () => {
  const projects = [
    {
      title: "UserFlow Manager",
      image: img1,
      description:
        "Created a MERN stack application with full CRUD functionality, allowing users to be added, edited, deleted, and viewed in detail, with the ability to toggle user status between active and inactive. Implemented dynamic filters (gender, status), sorting, pagination, and search functionality on the homepage to improve user navigation and data accessibility. Integrated a seamless front-end (React) with a back-end (Express, MongoDB), optimizing data handling for real-time user management",
      github: "https://github.com/NishantShukla10/user-app-details",
      live: "https://user-details-mernapp.netlify.app/",
    },
    {
      title: "Shopping Cart",
      image: img2,
      description:
        "I built a fancy online shopping cart with ReactJS and Redux to handle the behind-the-scenes stuff smoothly. Smoothly handles looking at products, picking them, and managing the cart, making shopping easy and enjoyable for everyone. Centralized data management with Redux ensures a smooth user experience",
      github: "https://github.com/NishantShukla10/Shopping-cart",
      live: "https://shopping-cart-seven-zeta.vercel.app/",
    },
    {
      title: "Weather App",
      image: img3,
      description:
        "Built a weather app using JavaScript to fetch real-time weather data from an API. Implemented dynamic updates to the user interface, ensuring it displays real-time weather information seamlessly. Enhanced the app’s functionality by incorporating additional features wind speed, humidity levels, and cloud information, making it a comprehensive weather tool",
      github: "https://github.com/NishantShukla10/Weather-app",
      live: "https://weather-app-eight-lemon.vercel.app/",
    },
    {
      title: "RazorPay UI Clone",
      image: img4,
      description:
        "Created a Razorpay UI clone website using HTML and Tailwind CSS. Ensured accurate responsiveness, demonstrating expertise in adaptive and visually appealing web design. Replicated the intuitive and user-friendly interface of Razorpay’s payment platform.",
      github: "https://github.com/NishantShukla10/Educational_website",
      live: "https://razor-pay-clone-xi.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="p-8 flex flex-col gap-10"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold mb-2">My Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Text Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>

              {/* Buttons */}
              <div className="mt-auto space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-black text-white px-3 py-1 rounded"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-green-600 text-white px-3 py-1 rounded"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
