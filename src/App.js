import "./App.css";
import "./Input.scss";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import SkillsSlider from "./Components/SkillsSlider";

function App() {
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
