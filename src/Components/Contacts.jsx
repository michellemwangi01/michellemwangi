import React from "react";

const Contacts = () => {
  return (
    <div>
      {/* <h1 className="text-center"></h1> */}
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
                <form action="#" class="space-y-8">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 font-medium text-base  font-serif"
                      style={{ color: "#FECACA" }}
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@mail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="subject"
                      class="block mb-2 text-base font-medium  font-serif"
                      style={{ color: "#FECACA" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      class="block mb-2 text-base font-medium font-serif"
                      style={{ color: "#FECACA" }}
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="py-3 px-5 text-lg  font-serif text-center text-white rounded-lg bg-red-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
