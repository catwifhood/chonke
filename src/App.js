import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";
import About from "./components/About";

function App() {
  return (
    <div className="text-white">
      <div className="relative">
        <img src="/bg.png" className="w-full h-full absolute top-0" />
        <div className="bg-[#B92B2A] bg-opacity-60 relative">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="bg-[#B92B2A]">
        <About />
        <Gallery />
        <Tokenomics />
        <HowToBuy />
      </div>
    </div>
  );
}

export default App;
