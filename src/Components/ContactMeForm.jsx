import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMeForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_qqiovkg", "template_anbk7dx", form.current, {
        publicKey: "Et-gQwpscuzgDG164",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form action="#" class="space-y-8" ref={form} onSubmit={sendEmail}>
      <div>
        <label
          for="subject"
          class="block mb-2 text-base font-medium  font-serif"
          style={{ color: "#FECACA" }}
        >
          Your Name
        </label>
        <input
          type="text"
          id="subject"
          name="user_name"
          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let me know how I can help you"
          required
        />
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 font-medium text-base  font-serif"
          style={{ color: "#FECACA" }}
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@mail.com"
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
          name="message"
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
  );
};

export default ContactMeForm;
