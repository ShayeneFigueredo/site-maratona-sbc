import React from "react";
import "../styles/Patrocinadores.css";

// Importações das imagens (Patrocinadores)
import imgHuawei from "../assets/logos-patrocinador/huawei-edit.png";
import imgJetbrains from "../assets/logos-patrocinador/jetbrains-edit.png";
import imgIncognia from "../assets/logos-patrocinador/incognia-edit.png";
import imgStone from "../assets/logos-patrocinador/stone-edit.png";
import imgAlphabo from "../assets/logos-patrocinador/alphabot-edit.png";
import imgVtex from "../assets/logos-patrocinador/vtex.png";
import imgGoogle from "../assets/logos-patrocinador/google.png";
import imgPrefeitura from "../assets/logos-patrocinador/prefeitura.png";
import imgFutel from "../assets/logos-patrocinador/futel.png";
import imgPortoMinas from "../assets/logos-patrocinador/portominas.png";
import imgCapes from "../assets/logos-patrocinador/capes.png";
import imgCnpq from "../assets/logos-patrocinador/cnpq.png";
import imgBtg from "../assets/logos-patrocinador/btgpactual.png";
import imgUnder from "../assets/logos-patrocinador/under.png";

// Importações Decorativas
import imgLineYellow from "../assets/line-yellowpt.png";
import imgLineOrange from "../assets/line-orangept.png";
import imgBaloes from "../assets/baloes.png";

export default function Patrocinadores() {
  return (
    <section className="patrocinadores-section">
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
            <a href="https://vtex.com/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgVtex} alt="VTEX" />
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
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgGoogle} alt="Google" />
            </a>
          </div>
        </div>

        {/* ========================================= */}
        {/* NOVAS SEÇÕES DE APOIO           */}
        {/* ========================================= */}

        {/* --- APOIO INSTITUCIONAL (Prefeitura) --- */}
        <div className="tier-section tier-infra">
          <div className="tier-badge badge-infra">Apoio Institucional</div>
          <div className="tier-grid">
            <a href="https://www.uberlandia.mg.gov.br/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgPrefeitura} alt="Prefeitura de Uberlândia" />
            </a>
          </div>
        </div>

        {/* --- APOIO LOGÍSTICO (FUTEL) --- */}
        <div className="tier-section tier-logistico">
          <div className="tier-badge badge-logistico">Apoio Logístico</div>
          <div className="tier-grid">
            <a href="https://www.uberlandia.mg.gov.br/prefeitura/orgaos-municipais/futel/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgFutel} alt="FUTEL" />
            </a>
          </div>
        </div>

        {/* --- APOIO EM HOSPEDAGEM (Hotel Porto Minas) --- */}
        <div className="tier-section tier-hospedagem">
          <div className="tier-badge badge-hospedagem">Apoio em Hospedagem</div>
          <div className="tier-grid">
            <a href="https://www.portominashotel.com.br/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgPortoMinas} alt="Hotel Porto Minas" />
            </a>
          </div>
        </div>

        {/* --- PARCEIRAS (Capes, CNPq, Fapemig) --- */}
        <div className="tier-section tier-parceiras">
          <div className="tier-badge badge-parceiras">Parceiras</div>
          <div className="tier-grid">
            <a href="https://www.gov.br/capes/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgCapes} alt="CAPES" />
            </a>
            <a href="https://www.gov.br/cnpq/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgCnpq} alt="CNPq" />
            </a>
          </div>
        </div>

        {/* --- PATROCINADOR PREMIUM (BTG Pactual) --- */}
        <div className="tier-section tier-premium">
          <div className="tier-badge badge-premium">Patrocinador Premium</div>
          <div className="tier-grid">
            <a href="https://www.btgpactual.com/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgBtg} alt="BTG Pactual" />
            </a>
          </div>
        </div>

        {/* --- PATROCINADOR NUVEM (Under) --- */}
        <div className="tier-section tier-nuvem">
          <div className="tier-badge badge-nuvem">Patrocinador Nuvem</div>
          <div className="tier-grid">
            <a href="https://under.com.br/" target="_blank" rel="noopener noreferrer" className="sponsor-card-small">
              <img src={imgUnder} alt="Under" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}