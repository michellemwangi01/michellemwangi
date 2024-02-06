import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import "../custom.css";

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
    <div className="flex flex-col justify-center bg-gray-900 align-middle ">
      <div className="pt-8">
        <h1 className="text-center text-white">Languages & Frameworks</h1>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        className="skill-slider  "
        partialVisible={true}
      >
        <div className="skill-item ">
          <h4>PYTHON</h4>
          <div className="m-auto w-60">
            <CircularProgressbar
              className="slow-animation"
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
                path: {
                  transition: "stroke-dashoffset 0.5s ease 0s",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>FLASK</h4>
          <div className="m-auto w-60">
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>DJANGO</h4>
          <div className="m-auto w-60">
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={70}
              text={`${70}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>SQL</h4>
          <div className="m-auto w-60">
            {" "}
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>JAVASCRIPT</h4>
          <div className=" m-auto w-60">
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>REACT</h4>
          <div className="m-auto w-60">
            <CircularProgressbar
              className="slow-animation"
              percentages={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>PHP</h4>
          <div className="m-auto w-60">
            {" "}
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={60}
              text={`${60}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>HTML</h4>
          <div className="m-auto w-60">
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={99}
              text={`${99}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>CSS </h4>
          <div className="m-auto w-60">
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>TAILWIND</h4>
          <div className=" m-auto w-60">
            {" "}
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
        <div className="skill-item ">
          <h4>BOOTSRAP</h4>
          <div className="m-auto w-60">
            <CircularProgressbar
              styles={{
                text: {
                  fill: "#ffffff",
                  fontSize: "16px",
                },
              }}
              value={90}
              text={`${90}%`}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SkillsSlider;
