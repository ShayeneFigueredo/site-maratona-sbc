import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Logos from "./sections/logos-section";
import About from "./sections/About"; 
import Programacao from "./sections/programacao";
import Fotter from "./sections/Footer"; 
import FinalBrasileira from "./sections/FinalBrasileira";
import Patrocinadores from "./pages/Patrocinadores";
import Organizadores from "./pages/Organizadores";
import Contato from "./pages/Contato";
import Locais from "./pages/Locais";

import "./styles/App.css"; 

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
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

      {/* Eles aparecem na rolagem da Home */}
      <div id="patrocinadores">
        <Patrocinadores />
      </div>
      
      <div id="contato">
        <Contato />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/site-maratona-sbc">
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Eles TAMBÉM existem como páginas separadas nas rotas! */}
          <Route path="/patrocinadores" element={<Patrocinadores />} />
          <Route path="/contato" element={<Contato />} />
          
          <Route path="/organizadores" element={<Organizadores />} />
          <Route path="/locais" element={<Locais />} />
        </Routes>
        <Fotter />
      </div>
    </BrowserRouter>
  );
}

export default App;