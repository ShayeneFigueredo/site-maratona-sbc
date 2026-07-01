import React from "react";
import "../styles/App.css"; 

import imgHuawei from "../assets/logos-patrocinador/huawei-edit.png";
import imgJetbrains from "../assets/logos-patrocinador/jetbrains-edit.png";
import imgIncognia from "../assets/logos-patrocinador/incognia-edit.png";
import imgStone from "../assets/logos-patrocinador/StoneLogotipoVerde.png";
import imgAlphabo from "../assets/logos-patrocinador/alphabot-edit.png";
import imgBtg from "../assets/logos-patrocinador/btgpactual.png";
import imgUnder from "../assets/logos-patrocinador/under.png";
import imgVtex from "../assets/logos-patrocinador/vtex.png";
import imgPax from "../assets/logos-patrocinador/pax.png";
import imgGoogle from "../assets/logos-patrocinador/google.png";
import imgMandelics from "../assets/logos-patrocinador/mandelics.png";


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
          <a href="https://www.btgpactual.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgBtg} alt="BTG Pactual" />
          </a>
          <a href="https://under.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgUnder} alt="Under" />
          </a>
          <a href="https://vtex.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgVtex} alt="VTEX" />
          </a>
          <a href="https://www.pax.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgPax} alt="PAX" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgGoogle} alt="Google" />
          </a>
          <a href="https://mendelics.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgMandelics} alt="Mendelics" />
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
          <a href="https://www.btgpactual.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgBtg} alt="BTG Pactual" />
          </a>
          <a href="https://under.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgUnder} alt="Under" />
          </a>
          <a href="https://vtex.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgVtex} alt="VTEX" />
          </a>
          <a href="https://www.pax.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgPax} alt="PAX" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgGoogle} alt="Google" />
          </a>
          <a href="https://mendelics.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={imgMandelics} alt="Mendelics" />
          </a>

        </div>
      </div>
    </section>
  );
}