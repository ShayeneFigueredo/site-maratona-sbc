import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Contato.css"; 

export default function Contato() {
  return (
    <section className="contato-page">
      <div className="contato-card">
        
        <h1 className="contato-title">Entre em Contato</h1>
        <p className="contato-subtitle">Ficou com alguma dúvida sobre a Final Brasileira? Mande uma mensagem para a nossa equipe!</p>
        
        <div className="email-container">
          <FaEnvelope className="email-icon" />
          {/* O href="mailto:..." faz com que o app de email do usuário abra automaticamente ao clicar! */}
          <a href="mailto:lucymari@gmail.com" className="email-link">
            lucymari@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}