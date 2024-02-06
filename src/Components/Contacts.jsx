import React from "react";
import ContactMeForm from "./ContactMeForm";

const Contacts = () => {
  return (
    <div id="contactMe">
      <div className="">
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
            <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Get In Touch
            </h1>

            <p
              class="mb-8 lg:mb-16 font-light text-center  sm:text-xl"
              style={{ color: "#FECACA" }}
            >
              Need a software developer, technical assistance, want to discuss
              project collaboration, or have inquiries about business
              development and tech support services? Feel free to reach out!
            </p>
            <div className="flex">
              <div className="lottiefile flex align-top w-1/2">
                <dotlottie-player
                  src="https://lottie.host/0150ad7b-6d8e-4323-ad88-a5d44867b606/pwxHiQrVrE.json"
                  background="transparent"
                  speed="1"
                  className="w-full"
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
              <div className="contactMe w-1/2">
                {" "}
                <ContactMeForm />
              </div>
            </div>
          </div>
        </section>
        <div>
          <p className="text-center bg-gray-900 text-white pt-8 pb-4">
            ©2023 MichelleMwangi All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
