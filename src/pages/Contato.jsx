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
          
          {/* Card 1 */}
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <a href="mailto:luiz.theodoro@ufu.br" className="email-link">
              luiz.theodoro@ufu.br
            </a>
          </div>

          {/* Card 2 */}
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <a href="mailto:ronaldo.co@ufu.br" className="email-link">
              ronaldo.co@ufu.br
            </a>
          </div>

          {/* Card 3 */}
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <a href="mailto:rafael.araujo@ufu.br" className="email-link">
              rafael.araujo@ufu.br
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}