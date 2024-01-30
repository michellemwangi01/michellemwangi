import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SkillsSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mb-4">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        className="skill-slider  bg-gray-900 rounded-2xl"
        partialVisible={true}
      >
        <div className="skill-item ">
          <h4>HTML</h4>
          <div className="m-auto w-32">
            <CircularProgressbar value={99} text={`${99}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>CSS </h4>
          <div className="m-auto w-32">
            <CircularProgressbar value={90} text={`${90}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>TAILWIND</h4>
          <div className=" m-auto w-32">
            {" "}
            <CircularProgressbar value={90} text={`${90}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>BOOTSRAP</h4>
          <div className="m-auto w-32">
            <CircularProgressbar value={90} text={`${90}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>JS</h4>
          <div className=" m-auto w-32">
            <CircularProgressbar value={85} text={`${85}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>REACT</h4>
          <div className="m-auto w-32">
            <CircularProgressbar value={90} text={`${90}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>PYTHON</h4>
          <div className="m-auto w-32">
            <CircularProgressbar value={90} text={`${90}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>FLASK</h4>
          <div className="m-auto w-32">
            <CircularProgressbar value={90} text={`${90}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>DJANGO</h4>
          <div className="m-auto w-32">
            <CircularProgressbar value={70} text={`${70}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>PHP</h4>
          <div className="m-auto w-32">
            {" "}
            <CircularProgressbar value={60} text={`${60}%`} />
          </div>
        </div>
        <div className="skill-item ">
          <h4>SQL</h4>
          <div className="m-auto w-32">
            {" "}
            <CircularProgressbar value={90} text={`${90}%`} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SkillsSlider;
