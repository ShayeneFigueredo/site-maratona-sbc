import React from "react";
import sbc from "../assets/sbc.webp";
import maratona from "../assets/maratona.png";
import facom from "../assets/facom.png"; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container"> 
        

        <div className="hero-text-col">
          <span className="badge"> O maior evento de programação competitiva da América Latina! </span>
          <h1> 31º MARATONA SBC DE <br/> PROGRAMAÇÃO 2026 </h1>
          
          <div className="hero-btns">
             <button className="btn-saiba-mais">
                Saiba mais
              </button>
          </div>

        </div>

       <div className="hero-logos-col">
  <div className="realizacao-container">
    
    <div className="realizacao-item">
              <img src={sbc} alt="SBC" />
              <span className="realizacao-label">REALIZAÇÃO</span>
              <span className="realizacao-nome">SBC</span>
            </div>

            <div className="realizacao-item">
              <img src={maratona} alt="Maratona SBC" />
              <span className="realizacao-label">PROMOÇÃO</span>
              <span className="realizacao-nome">MARATONA</span>
            </div>

            <div className="realizacao-item">
              <img src={facom} alt="FACOM UFU" />
              <span className="realizacao-label">ORGANIZAÇÃO</span>
              <span className="realizacao-nome">FACOM-UFU</span>
            </div>

  </div>
</div>

      </div>
    </section>
  );
}