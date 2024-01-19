import "./App.css";
import "./Input.scss";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Socials from "./Components/Socials";

function App() {
  return (
    <>
      <div className="bg-gray-700">
        <Banner />
        <About />
      </div>

      <button className="hover:text-2xl bg-white">test button</button>
    </>
  );
}

export default App;
