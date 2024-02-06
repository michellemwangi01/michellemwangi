import React from "react";
import "../App.css";
import "../Input.scss";
import SkillsSlider from "./SkillsSlider";

const Skills = () => {
  return (
    <>
      <div id="whatCanIdo" className=" bg-gray-100 m-auto py-20">
        <h1 className="text-center p-4">What I Can Do</h1>
        <div
          className=" flex m-auto justify-center flex-wrap"
          style={{ width: "98%" }}
        >
          <main data-aos="flip-right">
            <div class="card">
              <img src="/Images/frontend_development.jpg " alt="" />
              <div class="card-content ">
                <h2>Front-end Development</h2>
                <p className="text-white">
                  As a skilled front-end developer, I bring proficiency in UI
                  frameworks like React to translate designs into user-friendly
                  and responsive web interfaces. I possess a strong
                  understanding of HTML, CSS, and JavaScript, enabling me to
                  build intuitive and accessible applications.
                </p>
                <a href="#" class="button">
                  View Projects
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </main>

          <main data-aos="flip-left">
            <div class="card">
              <img src="/Images/backend_development.png" alt="" />
              <div class="card-content">
                <h2>Back-end Development</h2>
                <p>
                  My expertise in back-end development lies in utilizing Python
                  and PHP and frameworks such as Flask & Django to provide
                  solutions by building robust and scalable web applications. I
                  am skilled in server-side programming, database integration,
                  and API development.
                </p>
                <a href="#" class="button">
                  View Projects
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </main>

          <main data-aos="flip-right">
            <div class="card">
              <img src="/Images/database-manageent.png" alt="" />
              <div class="card-content">
                <h2>Database Administration</h2>
                <p>
                  My passion for data management translates into a strong
                  background in database administration. I am proficient in SQL
                  and implement best practices for data security, integrity, and
                  performance optimization. I am committed to staying abreast of
                  the latest advancements which allows me to apply cutting-edge
                  techniques.
                </p>
                <a href="#" class="button">
                  View Projects
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </main>

          <main data-aos="flip-left">
            <div class="card">
              <img src="/Images/project-management.jpeg" alt="" />
              <div class="card-content">
                <h2>IT Project Management</h2>
                <p>
                  As a seasoned IT Project Manager, I excel at leading
                  cross-functional teams, effectively managing project
                  lifecycles, and consistently delivering results on time and
                  within budget. My experience in implementations projects has
                  honed my leadership, communication, and problem-solving
                  skills, ensuring smooth project execution and client
                  satisfaction.
                </p>
                <a href="#" class="button">
                  View Projects
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </main>

          <main data-aos="flip-right">
            <div class="card">
              <img src="/Images/technical-support.jpg" alt="" />
              <div class="card-content">
                <h2>IT Tech Support</h2>
                <p>
                  My expertise in IT systems support lies in providing efficient
                  and reliable technical assistance to users. I possess a deep
                  understanding of hardware, software, and network
                  troubleshooting, coupled with strong communication skills to
                  resolve issues quickly and effectively, delivering excellent
                  customer service and ensuring optimal system uptime.
                </p>
                <a href="#" class="button">
                  View Projects
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </main>

          <main data-aos="flip-left">
            <div class="card">
              <img src="/Images/bizdev.jpg" alt="" />
              <div class="card-content">
                <h2>Business Development</h2>
                <p>
                  My background in business development has equipped me with a
                  strong understanding of market dynamics, customer needs, and
                  effective sales strategies. I am skilled in building
                  relationships, identifying and generating leads, and
                  negotiating successful deals. I'm experienced in building
                  profitable partnerships and driving company growth.
                </p>
                <a href="#" class="button">
                  View Projects
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Skills;
