import React from "react";
import "../styles/Organizadores.css";

// Logos Principais
import sbcLogo from "../assets/sbc.webp"; // Ajuste o nome se necessário
import maratonaLogo from "../assets/logomaratona.png";
import facomLogo from "../assets/facom.png";
import ufuLogo from "../assets/logoufu.png";

// Importações dinâmicas seguindo a regra: nome-primeiraletrasobrenome.webp
import carlosF from "../assets/organizadores/nacional/carlos-f.webp";
import rodolfoA from "../assets/organizadores/nacional/rodolfo-a.webp";
import pauloC from "../assets/organizadores/nacional/paulo-c.webp";
import viniciusS from "../assets/organizadores/nacional/vinicius-s.webp";
import brunoR from "../assets/organizadores/nacional/bruno-r.webp";
import lucyT from "../assets/organizadores/nacional/lucy-t.webp";
import andersonA from "../assets/organizadores/nacional/anderson-a.webp";
import rafaelS from "../assets/organizadores/nacional/rafael-s.webp";
import emilioW from "../assets/organizadores/nacional/emilio-w.webp";

// Fotos da organização local
// Quem ainda não tem foto usa o peopleImg de fallback
import rafaelA from "../assets/organizadores/local/rafael-a.GIF";
import ronaldoO from "../assets/organizadores/local/ronaldo-o.jpeg";
import samuelA from "../assets/organizadores/local/samuel-a.jpg";
import shayeneF from "../assets/organizadores/local/shayene-f.jpg";

// Imagem padrão para os membros
import peopleImg from "../assets/organizadores/people.webp";

export default function Organizadores() {
  const nacional = [
  { nome: "Carlos E. Ferreira", cargo: "Direção Geral", foto: carlosF },
  { nome: "Rodolfo Azevedo", cargo: "Direção Geral", foto: rodolfoA },
  { nome: "Paulo Cezar Pereira Costa", cargo: "Diretor de Problemas e Chefe dos Juízes na AL", foto: pauloC },
  { nome: "Vinicius Santos", cargo: "Diretor de Problemas no Brasil", foto: viniciusS },
  { nome: "Bruno Ribas", cargo: "Diretor de Sistemas", foto: brunoR },
  { nome: "Lucy Mari Tabuti", cargo: "Diretora de Patrocínios", foto: lucyT },
  { nome: "Anderson Viçoso de Araujo", cargo: "Diretor de Operações da Final Brasileira", foto: andersonA },
  { nome: "Rafael Crivellari Saliba Schouery", cargo: "Diretor da Escola de Verão", foto: rafaelS },
  { nome: "Emilio Wuerges", cargo: "Diretor de Transmissões", foto: emilioW }
];

  const local = [
    { nome: "Luiz Cláudio Theodoro", cargo: "Diretor da Final Brasileira" },
    { nome: "Rafael Dias Araújo", cargo: "Diretor da Final Brasileira", foto: rafaelA },
    { nome: "Ronaldo Castro de Oliveira", cargo: "Diretor da Final Brasileira", foto: ronaldoO },
    { nome: "Samuel Amorim", cargo: "Desenvolvedor Web / Transmissão", foto: samuelA },
    { nome: "Shayene Figueredo", cargo: "Desenvolvedora Web / Transmissão", foto: shayeneF },
    { nome: "Mariana Martins", cargo: "Designer" },
  ];

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
                {/* se não carregar a foto, ele tenta mostrar o peopleImg de fallback */}
                <img src={pessoa.foto || peopleImg} alt={pessoa.nome} onError={(e) => e.target.src = peopleImg} />
              </div>
              <h3>{pessoa.nome}</h3>
              <p>{pessoa.cargo}</p>
              {/* ssó mostra a instituição se ela existir no array */}
              {pessoa.inst && <span className="staff-inst">{pessoa.inst}</span>}
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
                {/* se não carregar a foto, ele tenta mostrar o peopleImg de fallback */}
                <img src={pessoa.foto || peopleImg} alt={pessoa.nome} onError={(e) => e.target.src = peopleImg} />
              </div>
              <h3>{pessoa.nome}</h3>
              <p>{pessoa.cargo}</p>
              {/* só mostra a instituição se ela existir no array */}
              {pessoa.inst && <span className="staff-inst">{pessoa.inst}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}