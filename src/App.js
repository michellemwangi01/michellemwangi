import "./App.css";
import "./Input.scss";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Socials from "./Components/Socials";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <Skills />
    </div>
  );
}

export default App;
