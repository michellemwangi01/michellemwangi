import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Socials = () => {
  return (
    <div
      className="lg:ml-8 my-6 flex xl:flex-col text-center md:text-2xl sm:base"
      style={{ zIndex: "1" }}
    >
      <a
        href="https://github.com/michellemwangi01"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          className="socialIcons md:text-4xl sm:base"
          style={{ color: "rgb(245, 139, 156)" }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/michelle-mwangi-31b035100/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          className="socialIcons"
          // className="text-4xl m-2 mb-4"
          style={{ color: "rgb(245, 139, 156)" }}
        />
      </a>

      <a
        href="https://twitter.com/michellemwangi8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter
          className="socialIcons"
          // className="text-4xl m-2 mb-4"
          style={{ color: "rgb(245, 139, 156)" }}
        />
      </a>

      <a
        href="mailto:michellemwangim@gmail.com"

        // className="text-4xl m-2 mb-4"
      >
        <IoIosMail
          className="socialIcons"
          style={{ color: "rgb(245, 139, 156)" }}
        />
      </a>
    </div>
  );
};

export default Socials;
