import "./App.css";
import "./Input.scss";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Socials from "./Components/Socials";

function App() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      {/*  <button className="hover:text-2xl bg-white">test button</button> */}
    </div>
  );
}

export default App;
