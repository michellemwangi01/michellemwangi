import React from "react";
import { TypeAnimation } from "react-type-animation";

const MyNameAnimation = () => {
  return (
    <div className="min-w-100 md:whitespace-normal whitespace-nowrap md:text-4xl text-2xl md:text-center text-start my-6 ">
      <TypeAnimation
        sequence={
          //   [
          //   // Same substring at the start will only be typed out once, initially
          //   "I am ",
          //   1000, // wait in milli seconds before replacing new words
          //   "I am a Software Engineer.",
          //   1000,
          //   "I am a Fullstack Developer.",
          //   1000,
          //   "I am a Database Administrator.",
          //   1000,
          //   "I am an Implementations Project Manager.",
          //   1000,
          // ]
          [
            // Same substring at the start will only be typed out once, initially
            // "I am a ",
            // 1000, // wait in milli seconds before replacing new words
            "I am a Problem Solver.",
            1000,
            "I am a Creative Thinker.",
            1000,
            "I am a Fast Learner.",
            1000,
            "I am a Challenge Seeker.",
            1000,
            "And most importantly, a Lover of Life :)",
            3000,
          ]
        }
        wrapper="span"
        speed={50}
        style={{
          fontFamily: "Amita",
          color: "pink",
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default MyNameAnimation;
