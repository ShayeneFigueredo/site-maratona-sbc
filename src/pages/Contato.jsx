import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Contato.css"; 

export default function Contato() {
  return (
    <section className="contato-page">
      <div className="contato-card">
        
        <h1 className="contato-title">Entre em Contato</h1>
        <p className="contato-subtitle">Ficou com alguma dúvida sobre a Final Brasileira? Mande uma mensagem para a nossa equipe!</p>
        
        {/* Nova div que empilha os cards */}
        <div className="emails-wrapper">
          
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <a href="mailto:maratonasbc@facom.ufu.br" className="email-link">
              maratonasbc@facom.ufu.br
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}