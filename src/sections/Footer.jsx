import React from "react";
import maratona from "../assets/maratona.png"; 

import { FaInstagram, FaGlobe, FaYoutube } from "react-icons/fa";
import { BsBalloonFill } from "react-icons/bs"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COLUNA 1: LOGO E DESCRIÇÃO */}
        <div className="footer-column about">
          <img src={maratona} alt="Maratona SBC" className="footer-logo" />
          <p>
            A Maratona de Programação da SBC é um evento que desafia o talento, 
            a lógica e a inovação de estudantes em todo o Brasil.
          </p>
        </div>

        {/* COLUNA 2: INFORMAÇÕES */}
        <div className="footer-column">
          <div className="title-group-footer">
            <BsBalloonFill className="icone-balao" />
            <h3>INFORMAÇÕES</h3>
          </div>
          <ul>
            <li><a href="#regulamento">Regulamento</a></li>
            <li><a href="#edicoes">Edições Anteriores</a></li>
            <li><a href="/organizadores">Equipe Organizadora</a></li>
            <li><a href="#manual">Manual do Diretor</a></li>
          </ul>
        </div>

        {/* COLUNA 3: LINKS RÁPIDOS */}
        <div className="footer-column">
          <div className="title-group-footer">
            <BsBalloonFill className="icone-balao" />
            <h3>LINKS RÁPIDOS</h3>
          </div>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#programacao">Programação</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        {/* COLUNA 4: REDES SOCIAIS (Agora sem o WhatsApp) */}
        <div className="footer-column newsletter">
          <div className="title-group-footer">
            <BsBalloonFill className="icone-balao" />
            <h3>REDES SOCIAIS</h3>
          </div>
          
          <div className="social-icons">
            <a href="https://www.instagram.com/maratonadeprogramacao/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://maratona.sbc.org.br/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Website"><FaGlobe /></a>
            <a href="https://www.youtube.com/@MaratonaSBC" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Youtube"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MARATONA-SBC DE PROGRAMAÇÃO. TODOS OS DIREITOS RESERVADOS.</p>
        <span className="dev-credit">
          ESTE SITE FOI DESENVOLVIDO POR 
          <a href="https://www.linkedin.com/in/samuelfamorim/" target="_blank" rel="noopener noreferrer" className="dev-link">
            <strong>   SAMUEL AMORIM</strong>
          </a> E 
          <a href="https://www.linkedin.com/in/shayene-figueredo/" target="_blank" rel="noopener noreferrer" className="dev-link">
            <strong>   SHAYENE FIGUEREDO</strong>
          </a>
        </span>
      </div>
    </footer>
  );
}