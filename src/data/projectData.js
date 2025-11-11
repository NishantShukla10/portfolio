
import imgStallBidding from "../assets/project/stallBidding.png"
import imgUserFlow from "../assets/project/UserFlow.png";
import imgShoppingCart from "../assets/project/shoppingCart.png";
import imgWeatherApp from "../assets/project/weatherApp.png";
import imgRazorPay from "../assets/project/razorPay.png";

export const MyProjects = [
    {
      title: "Bidding Platform",
      image: imgStallBidding,
      description:
        "Built a secure, role-based bidding system using Node.js, Express, MongoDB, and JWT authentication, enabling principals to create stalls and students to place competitive bids. Designed and implemented RESTful APIs with Mongoose relationships for dynamic bid tracking, real-time highest bid updates, and automated email notifications. Developed a responsive frontend using React and Tailwind CSS with API integration, smooth navigation, and user-centric bid management features.",
      github: "https://github.com/NishantShukla10/stallBiddingPlatform",
      live: "https://stallbiddingplatform-qyx1.onrender.com",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "UserFlow Manager",
      image: imgUserFlow,
      description:
        "Created a MERN stack application with full CRUD functionality, allowing users to be added, edited, deleted, and viewed in detail, with the ability to toggle user status between active and inactive. Implemented dynamic filters (gender, status), sorting, pagination, and search functionality on the homepage to improve user navigation and data accessibility.",
      github: "https://github.com/NishantShukla10/userFlow-Manager",
      live: "https://userflow-manager.netlify.app",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Shopping Cart",
      image: imgShoppingCart,
      description:
        "I built a fancy online shopping cart with ReactJS and Redux to handle the behind-the-scenes stuff smoothly. Smoothly handles looking at products, picking them, and managing the cart, making shopping easy and enjoyable for everyone. Centralized data management with Redux ensures a smooth user experience",
      github: "https://github.com/NishantShukla10/Shopping-cart",
      live: "https://shopping-cart-seven-zeta.vercel.app/",
      tags: ["React", "Redux", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Weather App",
      image: imgWeatherApp,
      description:
        "Built a weather app using JavaScript to fetch real-time weather data from an API. Implemented dynamic updates to the user interface, ensuring it displays real-time weather information seamlessly. Enhanced the app's functionality by incorporating additional features wind speed, humidity levels, and cloud information.",
      github: "https://github.com/NishantShukla10/Weather-app",
      live: "https://weather-app-eight-lemon.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "RazorPay UI Clone",
      image: imgRazorPay,
      description:
        "Created a Razorpay UI clone website using HTML and Tailwind CSS. Ensured accurate responsiveness, demonstrating expertise in adaptive and visually appealing web design. Replicated the intuitive and user-friendly interface of Razorpay's payment platform.",
      github: "https://github.com/NishantShukla10/Educational_website",
      live: "https://razor-pay-clone-xi.vercel.app/",
      tags: ["HTML", "CSS", "Tailwind CSS"],
      color: "from-orange-500 to-red-500"
    },
  ];