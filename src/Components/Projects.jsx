import React from "react";
import { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";

import ecommerce from "../assets/ecommerce.jpg";
import gaming from "../assets/gaming.jpg";
import house from "../assets/house.jpg";
import Jewelry from "../assets/Jewelry.jpg";
import pets from "../assets/pets.jpg";
import cinema from "../assets/cinema.jpg";
import banking from "../assets/banking.jpg";
// import image8 from "../assets/pexels-anni-roenkae-3109850.jpg";

const Projects = () => {
  const images = [ecommerce, gaming, house, Jewelry, pets, cinema, banking];
  const info = [
    " Farmart Shop. Developed as a mock-up inspired by the Twiga platform, with a specific focus on supporting and empowering farmers. Purpose: Streamlining sales processes and enhancing efficiency through seamless MPESA integration. Implemented user-friendly interfaces for both buyers and sellers, aiming to optimize and elevate the overall user experience in the realm of agricultural e-commerce. Includes a solution allowing vendors to track orders full cycle and track payments and well as fulfill them and keep track of and maintain their product portfolios.",
    "Mumbai",
    "Bengaluru",
    " Mirio Jewellers: Crafted in response to the needs of my brass jewelry business, Mirio Jewellers serves as an online platform tailored to showcase a curated selection of high-quality jewelry products. Purpose: Providing a solution for marketing and selling jewelry online, reaching a diverse customer base.  Features secure e-commerce functionalities such as seamless product browsing, efficient cart management, and secure MPESA payment processing.  Boasts an intuitive and visually appealing user interface, enhancing the overall online shopping experience for customers.",
    "Delhi",
    "Stark Cinemax:  Created a comprehensive platform tailored for movie enthusiasts, serving as a mock-up inspired by the Kenya Buzz platform.  Objective: Offering up-to-date information on current movies, show times, and booking options, while providing a seamless booking experience for users.",
    "Bengaluru",
  ];
  const [focusElement, setFocusElement] = useState(0);
  return (
    <div className=" flex justify-center m-auto my-60 w-3/4">
      <FancyCarousel
        className="w-1/2"
        images={images}
        setFocusElement={setFocusElement}
        carouselRadius={300}
        peripheralImageRadius={80}
        centralImageRadius={120}
        focusElementStyling={{ border: "2px solid #ba4949" }}
        autoRotateTime={3}
        borderWidth={4}
        borderHexColor={"pink"}
      />
      <div className="w-1/2 text-center pl-40">
        <p>{info[focusElement]}</p>
      </div>
    </div>
  );
};

export default Projects;
