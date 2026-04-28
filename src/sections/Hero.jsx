import React from "react";
import sbc from "../assets/sbc.webp";
import maratona from "../assets/maratona.png";
import facom from "../assets/facom.png";
import ufu from "../assets/logoufu.png";
import logoPrincipal from "../assets/logomaratona.png"; // A logo que substituirá o texto

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container"> 
        <div className="hero-text-col">
          <span className="badge"> O maior evento de programação competitiva da América Latina! </span>
          
          {/* Logo Principal substituindo o texto */}
          <div className="hero-main-logo">
            <img src={logoPrincipal} alt="31ª Maratona SBC de Programação" />
          </div>
          
          <div className="hero-btns">
             <button className="btn-saiba-mais">Saiba mais</button>
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

            {/* Container das logos FACOM e UFU */}
            <div className="realizacao-item">
              <div className="org-logos-grid">
                <img src={facom} alt="FACOM UFU" />
                <img src={ufu} alt="UFU" />
              </div>
              <span className="realizacao-label">ORGANIZAÇÃO</span>
              <span className="realizacao-nome">FACOM-UFU</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}