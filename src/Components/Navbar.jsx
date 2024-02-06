import React, { useState } from "react";
import "../App.css";
import { IoMenuSharp } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuSetter = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu);
  return (
    <div
      id="navBar"
      className="flex align-middle justify-between mx-4 "
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
            <p className="">
              <AnchorLink href="#whoamI">About Me</AnchorLink>
            </p>
          </div>
          <div className="navItem  text-end h-10">
            <p className="">
              <AnchorLink href="#whatCanIdo">Skills</AnchorLink>
            </p>
          </div>
          <div className="navItem  text-end h-10">
            <AnchorLink href="#projects">Projects</AnchorLink>
          </div>
          <div className="navItem  text-end h-10">
            <AnchorLink href="#contactMe">Let's Connect</AnchorLink>
          </div>
        </div>
        {showMenu && (
          <div className="flex align-middle text-xl md:justify-evenly md:flex-nowrap md:flex-row flex-col justify-center">
            <div className="navItem text-end h-10">
              <AnchorLink href="#whoamI">About</AnchorLink>
            </div>
            <div className="navItem  text-end h-10">
              <AnchorLink href="#whatCanIdo">Skills</AnchorLink>
            </div>
            <div className="navItem  text-end h-10">
              <AnchorLink href="#projects">Projects</AnchorLink>
            </div>
            <div className="navItem  text-end h-10">
              <AnchorLink href="#contactMe">Let's Connect</AnchorLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
