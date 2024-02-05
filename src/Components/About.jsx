import React from "react";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="h-100 text-geay-700 bg-white justify-evenly align-middle">
      <h1 className="text-center mt-8">Who I Am</h1>
      <p className="text-xl w-2/3 text-center m-auto my-4">
        Hi there and welcome! My name is Michelle mwangi and I am a curious tech
        enthusiast. In my 8 year career, I've embraced diverse roles in and
        outside of the tech space, from software development and engineering to
        enterprise software implementation and database administration to
        project management in IT. This journey has instilled in me a deep love
        for growth and learning, leading me to pursue a degree in CS,
        certifications in Software engineering and rediscover my passion for
        creating solutions through software development.
      </p>
      <div>
        <div className="flex w-5/6 m-auto justify-center my-16  flex-wrap md:flex-row flex-col">
          <div className="lottieContainer w-1/3 h-100 m-auto">
            <dotlottie-player
              src="https://lottie.host/64eb6698-5f20-4ba7-8f75-95da6a05e7a3/tM0BospUdW.json"
              background="transparent"
              speed="1"
              className="w-full"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div id="whoamI" className="  w-2/3 my-4 text-center m-auto">
            {/* <h4> Personality and Traits</h4> */}
            <div className="my-6">
              <div className="bg-red-200 p-2 py-4 m-2 my-4 rounded-xl text-xl ">
                <p>
                  I am highly intelligent and a fast learner: I grasp concepts
                  quickly and apply them to improve processes and drive positive
                  change.
                </p>
              </div>
              <div className="bg-red-200 p-2 py-4 m-2 my-4 rounded-xl text-xl ">
                <p>
                  {" "}
                  I'm driven by efficiency and reliability: I consistently
                  deliver high-quality work with honesty and integrity.
                </p>
              </div>
              <div className="bg-red-200 p-2 py-4 m-2 my-4 rounded-xl text-xl ">
                <p>
                  {" "}
                  I'm dedicated and diligent: My previous employers will attest
                  to my commitment and willingness to go the extra mile.
                </p>
              </div>
              <div className="bg-red-200 p-2 py-4 m-2 my-4 rounded-xl text-xl ">
                <p>
                  {" "}
                  I'm a team player: I thrive in collaborative environments and
                  excel at communication and problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
