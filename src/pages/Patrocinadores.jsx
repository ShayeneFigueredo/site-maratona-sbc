import React from "react";
import "../styles/Patrocinadores.css";

// Importações das imagens
import imgHuawei from "../assets/logos-patrocinador/huawei-edit.png";
import imgJetbrains from "../assets/logos-patrocinador/jetbrains-edit.png";
import imgIncognia from "../assets/logos-patrocinador/incognia-edit.png";
import imgStone from "../assets/logos-patrocinador/stone-edit.png";
import imgAlphabo from "../assets/logos-patrocinador/alphabot-edit.png";
import imgLineYellow from "../assets/line-yellowpt.png";
import imgLineOrange from "../assets/line-orangept.png";
import imgBaloes from "../assets/baloes.png";

export default function Patrocinadores() {
  return (
    <section className="patrocinadores-section">
      {/* Imagens Decorativas */}
      <img src={imgLineYellow} className="decor-item decor-line-yellowpt" alt="" aria-hidden="true" />
      <img src={imgLineOrange} className="decor-item decor-line-orangept" alt="" aria-hidden="true" />
      <img src={imgBaloes} className="decor-item decor-tres-baloes" alt="" aria-hidden="true" />
      
      <h1 className="page-title">Nossos Patrocinadores</h1>

      {/* --- PATROCINADOR MUNDIAL --- */}
      <div className="mundial-container">
        <div className="mundial-header">
          <h3>Patrocinador Mundial</h3>
          <span className="destaque-global">Destaque global</span>
        </div>
        <div className="mundial-logos">
          <a href="https://www.huawei.com/en/" target="_blank" rel="noopener noreferrer">
            <img src={imgHuawei} alt="Huawei" className="logo-mundial" />
          </a>
          <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgJetbrains} alt="Jetbrains" className="logo-mundial" />
          </a>
        </div>
      </div>

      <div className="other-tiers-container">
        {/* --- DIAMANTE --- */}
        <div className="tier-section tier-diamante">
          <div className="tier-badge">Diamante</div>
          <div className="tier-grid">
            <a href="https://www.incognia.com/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgIncognia} alt="Incognia" />
            </a>
          </div>
        </div>

        {/* --- PRATA --- */}
        <div className="tier-section tier-prata">
          <div className="tier-badge">Prata</div>
          <div className="tier-grid">
            <a href="https://www.stone.com.br/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgStone} alt="Stone" />
            </a>
          </div>
        </div>

        {/* --- BRONZE --- */}
        <div className="tier-section tier-bronze">
          <div className="tier-badge">Bronze</div>
          <div className="tier-grid">
            <a href="https://alphabot.com.br/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgAlphabo} alt="Alphabot" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}