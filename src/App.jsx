import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Logos from "./sections/logos-section";
import About from "./sections/About"; 


import "./styles/App.css"; 

function App() {
  return (
    <div className="app-container">
      
      <Navbar />
      <Hero />
      <Logos/>
      <Stats />
      <About />
      
    </div>
  );
}

export default App;