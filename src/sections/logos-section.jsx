import React from "react";
import huawei from "../assets/logos-patrocinador/huawei.webp";
import jetbrains from "../assets/logos-patrocinador/jetbrains.webp";
import incognia from "../assets/logos-patrocinador/incognia.webp";
import stone from "../assets/logos-patrocinador/stone.png";
import alphabo from "../assets/logos-patrocinador/alphabot.avif";
import imgSabia from "../assets/sabia-voando.png";

export default function Logos() {
  return (
    <section className="logos-section">

      <img src={imgSabia} className="decor-item decor-sabia" alt="" aria-hidden="true" />
      
      <p className="logos-title">Patrocinadores Oficiais</p>

      <div className="logos-carousel">
        <div className="logos-track">
          {/* --- PRIMEIRA SEQUÊNCIA --- */}
          <a href="https://www.huawei.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={huawei} alt="Huawei" />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            <img src={jetbrains} alt="JetBrains" />
          </a>
          <a href="https://www.incognia.com/" target="_blank" rel="noopener noreferrer">
            <img src={incognia} alt="Incognia" />
          </a>
          <a href="https://www.stone.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={stone} alt="Stone" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={alphabo} alt="Alphabo" />
          </a>

          {/* --- SEGUNDA SEQUÊNCIA (Para o efeito infinito contínuo) --- */}
          <a href="https://www.huawei.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={huawei} alt="Huawei" />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            <img src={jetbrains} alt="JetBrains" />
          </a>
          <a href="https://www.incognia.com/" target="_blank" rel="noopener noreferrer">
            <img src={incognia} alt="Incognia" />
          </a>
          <a href="https://www.stone.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={stone} alt="Stone" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={alphabo} alt="Alphabo" />
          </a>
          
          {/* --- TERCEIRA SEQUÊNCIA (Garante que telas largas não quebrem) --- */}
          <a href="https://www.huawei.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={huawei} alt="Huawei" />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            <img src={jetbrains} alt="JetBrains" />
          </a>
          <a href="https://www.incognia.com/" target="_blank" rel="noopener noreferrer">
            <img src={incognia} alt="Incognia" />
          </a>
          <a href="https://www.stone.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={stone} alt="Stone" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={alphabo} alt="Alphabo" />
          </a>
        </div>
      </div>
    </section>
  );
}