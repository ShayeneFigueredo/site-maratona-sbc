import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Logos from "./sections/logos-section";
import About from "./sections/About"; 
import Programacao from "./sections/programacao";
import Fotter from "./sections/Footer"; 
import FinalBrasileira from "./sections/FinalBrasileira";

import "./styles/App.css"; 

function App() {
  return (
    <div className="app-container">
      
      <Navbar />
      <Hero />
      <Logos/>
      <Stats />
      
      <div id="sobre">
        <About />
      </div>
      
      <div id="final2026">
        <FinalBrasileira />
      </div>
      
      <div id="programacao">
        <Programacao />
      </div>
      
      <Fotter />
      
    </div>
  );
}

export default App;