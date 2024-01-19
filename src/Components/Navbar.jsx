import React, { useState } from "react";
import "../App.css";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuSetter = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu);
  return (
    <div
      id="navBar"
      className="flex align-middle justify-between mx-4"
      style={{ fontFamily: "Amita", color: "#FFC0CB", zIndex: "10" }}
    >
      <div>
        <img
          src="/Images/MMM.png"
          alt=""
          width={"100px"}
          height={"70px"}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col w-1/2 align-middle">
        <div className="flex w-full h-full align-middle justify-end md:hidden">
          <IoMenuSharp
            className="text-4xl mt-6 text-white z-10 "
            onClick={showMenuSetter}
          />
        </div>

        <div className="md:flex hidden align-middle text-xl md:justify-evenly md:flex-nowrap md:flex-row flex-col justify-center  ">
          <div className="navItem text-end h-10">
            <p>About</p>
          </div>
          <div className="navItem  text-end h-10">
            <p>Skills</p>
          </div>
          <div className="navItem  text-end h-10">
            <p>Experience</p>
          </div>
          <div className="navItem  text-end h-10">
            <p>Projects</p>
          </div>
        </div>
        {showMenu && (
          <div className="flex align-middle text-xl md:justify-evenly md:flex-nowrap md:flex-row flex-col justify-center">
            <div className="navItem text-end h-10">
              <p>About</p>
            </div>
            <div className="navItem  text-end h-10">
              <p>Skills</p>
            </div>
            <div className="navItem  text-end h-10">
              <p>Experience</p>
            </div>
            <div className="navItem  text-end h-10">
              <p>Projects</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
