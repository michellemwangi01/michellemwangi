import React from "react";
import { useState, useEffect } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";

import ecommerce from "../assets/ecommerce.jpg";
import gaming from "../assets/gaming.jpg";
import house from "../assets/house.jpg";
import Jewelry from "../assets/Jewelry.jpg";
import pets from "../assets/pets.jpg";
import cinema from "../assets/cinema.jpg";
import banking from "../assets/BankImage.jpg";
// import image8 from "../assets/pexels-anni-roenkae-3109850.jpg";

const Projects = () => {
  const images = [ecommerce, gaming, house, Jewelry, pets, cinema, banking];
  const info = [
    "The Farmart shop is developed as a mock-up inspired by the Twiga platform, with a specific focus on supporting and empowering farmers. Purpose: Streamlining sales processes and enhancing efficiency through seamless MPESA integration. Implemented user-friendly interfaces for both buyers and sellers, aiming to optimize and elevate the overall user experience in the realm of agricultural e-commerce. Includes a solution allowing vendors to track orders full cycle and track payments and well as fulfill them and keep track of and maintain their product portfolios.",
    "Battle of the bots is a React web application where you can custom build your own Bot Army and enlist bots to conquer the galaxy! The app allows you to browse through a list of robots, view their details, and recruit them into your army.",
    "Qwenu Residentials is a web platform for real estate, strategically designed as a model inspired by the BuyRentKenya platform.  Purpose: Facilitating direct connections between property owners and potential buyers.  Implemented features encompassing property listing, user profiles, and secure communication channels, enhancing the overall real estate experience.",
    "Mirio Jewellers is an ecommerce platform crafted in response to the needs of my brass jewelry business, Mirio Jewellers serves as an online platform tailored to showcase a curated selection of high-quality jewelry products. Purpose: Providing a solution for marketing and selling jewelry online, reaching a diverse customer base.  Features secure e-commerce functionalities such as seamless product browsing, efficient cart management, and secure MPESA payment processing.  Boasts an intuitive and visually appealing user interface, enhancing the overall online shopping experience for customers.",
    "The pet-palace is a JavaScript-based application that allows users to add their pets to participate in a friendly competition where other users can vote for the cutest pet. The webpage provides an engaging and interactive experience for pet owners and pet enthusiasts alike.",
    "Stark Conemax is a comprehensive platform tailored for movie enthusiasts, serving as a mock-up inspired by the Kenya Buzz platform.  Objective: Offering up-to-date information on current movies, show times, and booking options, while providing a seamless booking experience for users.",
    "Stark Banque is a platform for client transactions with details such as category, description, amount, and date. Add new transactions with relevant details. Delete existing transactions from the list. Search and filter transactions based on keywords or specific criteria. Responsive design for optimal user experience on different devices.",
  ];
  const title = [
    "The Farmart Shop",
    "Battle of The Bots",
    "Qwenu Residentials",
    "Mirio Jewellers",
    "The Pet-Palace",
    "Stark Cinemax",
    "Stark Banque",
  ];

  const [focusTitle, setFocusTitle] = useState(0);
  const [focusElement, setFocusElement] = useState(0);

  // Update the title when the focusElement changes
  useEffect(() => {
    setFocusTitle(focusElement);
  }, [focusElement]);

  return (
    <div className=" flex justify-center m-auto my-60 w-3/4 ">
      <FancyCarousel
        className="w-1/2"
        images={images}
        setFocusElement={setFocusElement}
        setFocusTitle={setFocusTitle}
        carouselRadius={300}
        peripheralImageRadius={80}
        centralImageRadius={120}
        focusElementStyling={{ border: "2px solid #ba4949" }}
        autoRotateTime={3}
        borderWidth={4}
        borderHexColor={"pink"}
      />
      <div className="w-1/2 text-center ml-40">
        <h1>{title[focusTitle]}</h1>
        <p
          className="text-xl rounded-xl p-6 "
          style={{ backgroundColor: "#FECACA" }}
        >
          {info[focusElement]}
        </p>
      </div>
    </div>
  );
};

export default Projects;
