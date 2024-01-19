import React from "react";
import "../App.css";
import "../Input.scss";
import MyNameAnimation from "./MyNameAnimation";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Banner = () => {
  return (
    <div className="banner min-h-full">
      {" "}
      <div className="snow h-86"></div>
      ;
      <Navbar />
      <div className=" flex w-full h-5/6 items-center align-middle justify-center  flex-wrap ">
        <div className="flex md:w-2/3 w-full xl:flex-nowrap flex-wrap text-center justify-center ">
          <Socials style={{ zIndex: "100" }} />
          <div className="intro ml-8 flex text-white flex-col items-center  w-full justify-center align-middle  ">
            <h1 className="text-white  md:text-6xl sm:text-base mb-4">
              My Name is Michelle Mwangi.
            </h1>
            <MyNameAnimation className="roles" />
          </div>
        </div>
        <div className="md:w-1/3 w-full overflow-visible relative h-full ">
          <img
            src="/Images/FreeMeLarge.png"
            className="object-cover overflow-visible"
            alt="Michelle Mwangi"
            style={{
              position: "absolute",
              // transform: "scale(1.2)",
              top: "-80px",
              right: "10px",
              height: "120%",
              opacity: "0.8",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
