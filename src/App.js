import "./App.css";
import "./Input.scss";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import SkillsSlider from "./Components/SkillsSlider";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 3000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
  });
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <Skills />
      <SkillsSlider />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
