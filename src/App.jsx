import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
// Vamos comentar as que estão vazias por enquanto:
// import About from "./sections/About";
// import Services from "./sections/Services";
// import Team from "./sections/Team";
// import Footer from "./sections/Footer";

import "./styles/App.css"; 

function App() {
  return (
    <div className="app-container">
      {/* Teste de cor para ver se o texto aparece */}
      <h1 style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
        🚀 O App está vivo!
      </h1>
      
      <Navbar />
      <Hero />
      <Stats />
      
      {/* <About />
      <Services />
      <Team />
      <Footer /> 
      */}
    </div>
  );
}

export default App;