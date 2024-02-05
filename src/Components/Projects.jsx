import React from "react";
import { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";

import image1 from "../assets/ecommerce.jpg";
import image2 from "../assets/gaming.jpg";
import image3 from "../assets/house.jpg";
import image4 from "../assets/Jewelry.jpg";
import image5 from "../assets/pets.jpg";
import image6 from "../assets/cinema.jpg";
import image7 from "../assets/banking.jpg";
// import image8 from "../assets/pexels-anni-roenkae-3109850.jpg";

const Projects = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const info = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Kolkata",
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Kolkata",
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
        autoRotateTime={5}
        borderWidth={4}
        borderHexColor={"pink"}
      />
      <div className="w-1/2 text-center">
        <p>{info[focusElement]}</p>
      </div>
    </div>
  );
};

export default Projects;
