import React from "react";
import "../styles/App.css"; 

import imgHuawei from "../assets/logos-patrocinador/huawei-edit.png";
import imgJetbrains from "../assets/logos-patrocinador/jetbrains-edit.png";
import imgIncognia from "../assets/logos-patrocinador/incognia-edit.png";
import imgStone from "../assets/logos-patrocinador/stone-edit.png";
import imgAlphabo from "../assets/logos-patrocinador/alphabot-edit.png";
import imgSabia from "../assets/sabia-voando.png"; 



export default function LogosSection() {
  return (
    <section className="logos-section">
      <h2 className="logos-title">Nossos Patrocinadores</h2>

      <div className="logos-carousel">
        <div className="logos-track">
          
          
          <a href="https://www.huawei.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={imgHuawei} alt="Huawei" />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgJetbrains} alt="Jetbrains" />
          </a>
          <a href="https://www.incognia.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgIncognia} alt="Incognia" />
          </a>
          <a href="https://www.stone.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgStone} alt="Stone" />
          </a>
          <a href="https://alphabot.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgAlphabo} alt="Alphabot" />
          </a>

         
          <a href="https://www.huawei.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={imgHuawei} alt="Huawei" />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgJetbrains} alt="Jetbrains" />
          </a>
          <a href="https://www.incognia.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgIncognia} alt="Incognia" />
          </a>
          <a href="https://www.stone.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgStone} alt="Stone" />
          </a>
          <a href="https://alphabot.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgAlphabo} alt="Alphabot" />
          </a>
          
        </div>
      </div>
    </section>
  );
}