import React from "react";
import "../App.css";
import "../Input.scss";

const Skills = () => {
  return (
    <div id="whatCanIdo" className=" bg-gray-100 m-auto">
      <h1 className="text-center p-4">What Can I do?</h1>
      <div
        className=" flex m-auto justify-center flex-wrap"
        style={{ width: "98%" }}
      >
        <main>
          <div class="card">
            <img src="/Images/frontend_development.jpg" alt="" />
            <div class="card-content">
              <h2>Front-end Development</h2>
              <p>
                As a skilled front-end developer, I bring proficiency in UI
                frameworks like React to translate designs into user-friendly
                and responsive web interfaces. I possess a strong understanding
                of HTML, CSS, and JavaScript, enabling me to build intuitive and
                accessible applications.
              </p>
              <a href="#" class="button">
                View Projects
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </main>

        <main>
          <div class="card">
            <img src="/Images/backend_development.png" alt="" />
            <div class="card-content">
              <h2>Back-end Development</h2>
              <p>
                My expertise in back-end development lies in utilizing Python
                and PHP to build robust and scalable web applications. I am
                skilled in server-side programming, database integration, and
                API development.
              </p>
              <a href="#" class="button">
                View Projects
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </main>

        <main>
          <div class="card">
            <img src="/Images/project-management.jpeg" alt="" />
            <div class="card-content">
              <h2>IT Project Management</h2>
              <p>
                As a seasoned IT Project Manager, I excel at leading
                cross-functional teams, effectively managing project lifecycles,
                and consistently delivering results on time and within budget.
                My experience in implementations projects has honed my
                leadership, communication, and problem-solving skills, ensuring
                smooth project execution and client satisfaction.
              </p>
              <a href="#" class="button">
                View Projects
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </main>

        <main>
          <div class="card">
            <img src="/Images/Database-Management-System.jpg" alt="" />
            <div class="card-content">
              <h2>Database Administration</h2>
              <p>
                My passion for data management translates into a strong
                background in database administration. I am proficient in SQL
                and implement best practices for data security, integrity, and
                performance optimization.
              </p>
              <a href="#" class="button">
                View Projects
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </main>

        <main>
          <div class="card">
            <img src="/Images/technical_support.png" alt="" />
            <div class="card-content">
              <h2>IT Tech Support</h2>
              <p>
                My expertise in IT systems support lies in providing efficient
                and reliable technical assistance to users. I possess a deep
                understanding of hardware, software, and network
                troubleshooting, coupled with strong communication skills to
                resolve issues quickly and effectively. I am committed to
                delivering excellent customer service and ensuring optimal
                system uptime.
              </p>
              <a href="#" class="button">
                View Projects
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </main>

        <main>
          <div class="card">
            <img src="/Images/bizdev.jpg" alt="" />
            <div class="card-content">
              <h2>Business Development</h2>
              <p>
                My background in business development has equipped me with a
                strong understanding of market dynamics, customer needs, and
                effective sales strategies. I am skilled in building
                relationships, identifying and generating leads, and negotiating
                successful deals. My passion for building profitable
                partnerships and driving company growth makes me a valuable
                asset to any business-oriented role.
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
  );
};

export default Skills;

{
  /* <div className="bg-white border-white border-solid border-2 w-1/4 m-4 p-2 rounded-lg mt-12">
          <h3 className="mb-4 text-center">Front-end Development</h3>
          <div className="w-3/4 m-auto  object-cover ">
            <img
              src="/Images/frontend_development.jpg"
              alt=""
              className="mb-4"
              style={{ borderRadius: "50%", width: "" }}
            />
            <p>
              As a skilled front-end developer, I bring proficiency in UI
              frameworks like React to translate designs into user-friendly and
              responsive web interfaces. I possess a strong understanding of
              HTML, CSS, and JavaScript, enabling me to build intuitive and
              accessible applications.
            </p>
          </div>
        </div>
        <div className="bg-white w-1/4 m-4 p-2 rounded-lg mt-12">
          <h3 className="">Back-end Development</h3>
          <img
            src="/Images/backend_development.png"
            alt=""
            className="w-full rounded-full"
          />
          <p>
            My expertise in back-end development lies in utilizing Python and
            PHP to build robust and scalable web applications. I am skilled in
            server-side programming, database integration, and API development.
          </p>
        </div>
        <div className="bg-white w-1/4 m-4 p-2 rounded-lg mt-12">
          <h3 className="">Database Administration</h3>
          <img src="/Images/Database-Management-System.jpg" alt="" />
          <p>
            My passion for data management translates into a strong background
            in database administration. I am proficient in SQL and implement
            best practices for data security, integrity, and performance
            optimization.
          </p>
        </div>
        <div className="bg-white w-1/4 m-4 p-2 rounded-lg">
          <h3 className="">IT Project Management</h3>
          <img src="/Images/project_management.png" alt="" />
          <p>
            As a seasoned IT Project Manager, I excel at leading
            cross-functional teams, effectively managing project lifecycles, and
            consistently delivering results on time and within budget. My
            experience in implementations projects has honed my leadership,
            communication, and problem-solving skills, ensuring smooth project
            execution and client satisfaction.
          </p>
        </div>
        <div className="bg-white w-1/4 m-4 p-2 rounded-lg">
          <h3 className="">IT Systems Support</h3>
          <img src="/Images/technical_support.png" alt="" />
          <p>
            My expertise in IT systems support lies in providing efficient and
            reliable technical assistance to users. I possess a deep
            understanding of hardware, software, and network troubleshooting,
            coupled with strong communication skills to resolve issues quickly
            and effectively. I am committed to delivering excellent customer
            service and ensuring optimal system uptime.
          </p>
        </div>
        <div className="bg-white w-1/4 m-4 p-2 rounded-lg">
          <h3 className="">Business Development</h3>
          <img src="/Images/Business-Development.png" alt="" />
          <p>
            My background in business development has equipped me with a strong
            understanding of market dynamics, customer needs, and effective
            sales strategies. I am skilled in building relationships,
            identifying and generating leads, and negotiating successful deals.
            My passion for building profitable partnerships and driving company
            growth makes me a valuable asset to any business-oriented role.
          </p>
        </div> */
}
