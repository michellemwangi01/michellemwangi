import React from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const slides = [
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="1" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/800/?random" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="8" />,
    },
  ];

  return (
    <div className="bg-black">
      <h1 className="text-white text-center"> Projects</h1>
      <Carousel slides={slides} />
    </div>
  );
};

export default Projects;
