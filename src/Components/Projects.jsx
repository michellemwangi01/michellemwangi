import React from "react";
import { useState, useEffect } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import { FaLink, FaGithub } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
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
    <>
      The Farmart shop is developed as a mock-up inspired by the Twiga platform,
      with a specific focus on supporting and empowering farmers. As well as
      streamlines sales processes and enhancing efficiency through seamless
      MPESA integration. <br />
      Implemented Features: User-friendly interfaces for both buyers and
      sellers, Includes a solution allowing vendors to track orders full cycle
      and track payments and well as fulfill them and keep track of and maintain
      their product portfolios."
    </>,
    <>
      Battle of the bots is a React web application where you can custom build
      your own Bot Army and enlist bots to conquer the galaxy!
      <br />
      Implemented Features: The app allows you to browse through a list of
      robots, view their details, and recruit them into your army. Bots can also
      be removed from the army as necessary.
    </>,
    <>
      Qwenu Residentials is a web platform for real estate, strategically
      designed as a model inspired by the BuyRentKenya platform with the purpose
      of facilitating direct connections between property owners and potential
      buyers.
      <br />
      Implemented features: The app encompasses property listing, user profiles,
      and secure communication channels, enhancing the overall real estate
      experience.
    </>,
    <>
      Mirio Jewellers is an ecommerce platform crafted in response to the needs
      of my brass jewelry business. It serves as an online platform tailored to
      showcase a curated selection of high-quality jewelry products.
      <br />
      Implemented features: Secure e-commerce functionalities such as seamless
      product browsing, efficient cart management, and secure MPESA payment
      processing. Boasts an intuitive and visually appealing user interface,
      enhancing the overall online shopping experience for customers.
    </>,
    <>
      The pet-palace is a JavaScript-based application that allows users to add
      their pets to participate in a friendly competition where other users can
      vote for the cutest pet. <br /> Implemented Features: The webpage provides
      an engaging and interactive experience for pet owners and pet enthusiasts
      alike. It allows users to set up their pets for voing and selection of the
      cutest pets.
    </>,
    <>
      Stark Cinemax is a comprehensive platform tailored for movie enthusiasts,
      serving as a mock-up inspired by the Kenya Buzz platform.
      <br />
      Objective: Offering up-to-date information on current movies, show times,
      and booking options, while providing a seamless booking experience for
      users.
    </>,
    <>
      Stark Banque is a platform for client transactions with details such as
      category, description, amount, and date. Add new transactions with
      relevant details.
      <br />
      Implemented features: Delete existing transactions from the list. Search
      and filter transactions based on keywords or specific criteria. Responsive
      design for optimal user experience on different devices.
    </>,
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

  const links = [
    "https://the-farmart.onrender.com/",
    "https://michellemwangi01.github.io/Battle-Of-The-Bots/",
    "https://qwenu-residentials.onrender.com/",
    "https://mirioarts-shop.netlify.app/",
    "https://pet-palace.netlify.app/",
    "https://stark-movies.netlify.app/",
    "https://michellemwangi01.github.io/Stark-Banque/",
  ];

  const gitGublinks = [
    "https://github.com/michellemwangi01/The-Farmart-Frontend",
    "https://github.com/michellemwangi01/Battle-Of-The-Bots",
    "https://github.com/michellemwangi01/qwenu-residentials",
    "https://github.com/michellemwangi01/MirioJewelryShop",
    "https://github.com/michellemwangi01/PetPalace",
    "https://github.com/michellemwangi01/StarkMovies",
    "https://github.com/michellemwangi01/Stark-Banque",
  ];

  const projectImages = [
    "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/230290/pexels-photo-230290.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=300",
    "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=300",
  ];

  const firstLanguages = ["ReactJS", "Vanilla Javascript", "Python", "FLASK"];

  const secondLanguages = ["ReactJS", "Vanilla Javascript", "Python", "HTML"];

  const thirdLanguages = ["React", "Vanilla Javascript", "Python", "HTML"];

  const fourthLanguages = ["React", "Vanilla Javascript", "Python", "HTML"];

  const [focusTitle, setFocusTitle] = useState(0);
  const [focusElement, setFocusElement] = useState(0);
  const [focusLink, setFocusLink] = useState(0);
  const [focusGHLink, setFocusGHLink] = useState(0);
  const [focusFirstLanguage, setFocusFirstLanguage] = useState(0);

  // Update the title when the focusElement changes
  useEffect(() => {
    setFocusTitle(focusElement);
    setFocusLink(focusElement);
    setFocusGHLink(focusElement);
    setFocusFirstLanguage(focusElement);
  }, [focusElement]);

  return (
    <div id="projects">
      <h1 className="text-center mt-4">My Projects</h1>
      <div className=" flex lg:flex-nowrap flex-wrap justify-center m-auto my-40 w-3/4 ">
        <FancyCarousel
          className="w-1/2"
          images={projectImages}
          setFocusElement={setFocusElement}
          carouselRadius={300}
          peripheralImageRadius={80}
          centralImageRadius={140}
          focusElementStyling={{ border: "2px solid #ba4949" }}
          autoRotateTime={5}
          borderWidth={4}
          borderHexColor={"#FECACA"}
        />
        <div className="w-1/2 text-center ml-40">
          <h2>{title[focusTitle]}</h2>
          <div className="languages flex justify-evenly">
            <div className="flex align-middle my-4 justify-center bg-blue-950 text-white w-1/6 p-2 rounded-md">
              <p className="text-center">REACT JS</p>
            </div>
            <div className="flex align-middle my-4 justify-center bg-blue-950 text-white w-1/6 p-2 rounded-md">
              {/* <p>{firstLanguages[focusFirstLanguage]}</p>
               */}
              <p>Python</p>
            </div>
            <div className="flex align-middle my-4 justify-center bg-blue-950 text-white w-1/6 p-2 rounded-md">
              {/* <p>{firstLanguages[focusFirstLanguage]}</p>
               */}
              <p>SQL</p>
            </div>
            <div className="flex align-middle my-4 justify-center bg-blue-950 text-white w-1/6 p-2 rounded-md">
              {/* <p>{firstLanguages[focusFirstLanguage]}</p>
               */}
              <p>Tailwind</p>
            </div>
          </div>
          <div
            className="rounded-xl pb-4"
            style={{ backgroundColor: "#FECACA" }}
          >
            <p className="text-xl  p-6 ">{info[focusElement]}</p>
            <div className="flex align-middle justify-evenly w-3/4 m-auto">
              <div className="flex">
                <IoLinkOutline className="text-2xl text-indigo" />
                <a
                  className="projectsLinks text-blue-950"
                  href={links[focusLink]}
                  target="_blank"
                >
                  View Project
                </a>
              </div>
              <div className="flex">
                <FaGithub className="text-xl text-blue-950" />
                <a
                  className="projectsLinks  text-blue-950"
                  href={gitGublinks[focusGHLink]}
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
