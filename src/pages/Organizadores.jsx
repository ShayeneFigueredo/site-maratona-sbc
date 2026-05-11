import React from "react";
import "../styles/Organizadores.css";

// Logos Principais
import sbcLogo from "../assets/sbc.webp"; // Ajuste o nome se necessário
import maratonaLogo from "../assets/logomaratona.png";
import facomLogo from "../assets/facom.png";
import ufuLogo from "../assets/logoufu.png";

// Imagem padrão para os membros
import peopleImg from "../assets/organizadores/people.webp";

export default function Organizadores() {
  const nacional = [
    { nome: "Carlos Eduardo Ferreira", cargo: "Diretor Geral" },
    { nome: "Rodolfo Azevedo", cargo: "Diretor de Sistemas" },
    { nome: "Bruno Ribas", cargo: "Diretor de Sistemas" },
    { nome: "Paulo Cezar Pereira Costa", cargo: "Diretor de Problemas e Chefe dos Juízes na AL" },
    { nome: "Vinicius Santos", cargo: "Diretor de Problemas no Brasil" },
    { nome: "Lucy Mari Tabuti", cargo: "Diretora de Patrocínios" },
    { nome: "Anderson Viçoso de Araujo", cargo: "Diretor de Operações da Final Brasileira" },
    { nome: "Emilio Wuerges", cargo: "Diretor de Transmissões" },
    { nome: "Rafael Crivellari Saliba Schouery", cargo: "Diretor da Escola de Verão" },
  ];

  const local = Array.from({ length: 10 }, (_, i) => ({
    nome: `Nome ${i + 1}`,
    cargo: "Organização Local",
  }));

  return (
    <section className="organizadores-page">
      <h1 className="page-title">Equipe</h1>
      <p className="page-subtitle">INSTITUIÇÕES & ORGANIZADORES</p>

      {/* --- SEÇÃO 1: REALIZAÇÃO / PROMOÇÃO / ORGANIZAÇÃO --- */}
      <div className="org-main-grid">
        <div className="main-card neon-blue">
            <span className="card-label">Realização</span>
            <img src={sbcLogo} alt="SBC" />
            <p>SBC</p>
        </div>
        <div className="main-card neon-purple">
            <span className="card-label">Promoção</span>
            <img src={maratonaLogo} alt="Maratona" />
            <p>MARATONA</p>
        </div>
        <div className="main-card neon-cyan">
            <span className="card-label">Organização</span>
            <div className="logos-row">
                <img src={facomLogo} alt="FACOM" />
                <img src={ufuLogo} alt="UFU" />
            </div>
            <p>FACOM-UFU</p>
        </div>
      </div>

      {/* --- SEÇÃO 2: NACIONAL --- */}
      <div className="staff-section">
        <h2 className="section-heading">Organização Nacional</h2>
        <div className="staff-grid">
          {nacional.map((pessoa, index) => (
            <div key={index} className="staff-card">
              <div className="avatar-wrapper">
                <img src={peopleImg} alt={pessoa.nome} />
              </div>
              <h3>{pessoa.nome}</h3>
              <p>{pessoa.cargo}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SEÇÃO 3: LOCAL --- */}
      <div className="staff-section">
        <h2 className="section-heading">Organização Local</h2>
        <div className="staff-grid">
          {local.map((pessoa, index) => (
            <div key={index} className="staff-card">
              <div className="avatar-wrapper">
                <img src={peopleImg} alt={pessoa.nome} />
              </div>
              <h3>{pessoa.nome}</h3>
              <p>{pessoa.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}