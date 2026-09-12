import React from "react";
import { FaExternalLinkAlt, FaEnvelope, FaCheckCircle, FaUsers, FaUserTie, FaUserFriends, FaClipboardList } from "react-icons/fa";
import logoPrincipal from "../assets/logomaratona.png";
import imgLineOrange from "../assets/line-orange.png";
import imgLineYellow from "../assets/line-yellow.png";
import imgBOrange from "../assets/b-orange.png";
import imgBVerde from "../assets/b-verde.png";
import imgBaloes from "../assets/baloes.png";
import imgbalao3 from "../assets/b-yellow.png";
import imgSabia from "../assets/sabia-voando.png";
import "../styles/Inscricoes.css";

export default function Inscricoes() {
  const categorias = [
    {
      id: 1,
      icon: <FaUsers />,
      titulo: "Equipes Café com Leite (CCL)",
      vagasLimitadas: true,
      valor: "R$ 750,00",
      valorPorPessoa: "por pessoa",
      theme: "cyan",
    },
    {
      id: 2,
      icon: <FaUserFriends />,
      titulo: "Participante não CCL (co-coach e convidados)",
      valor: "R$ 400,00",
      valorPorPessoa: "por pessoa",
      theme: "purple",
    },
    {
      id: 3,
      icon: <FaUserTie />,
      titulo: "Coach de equipes principais que desejam participar como CCL",
      valor: "R$ 200,00",
      valorPorPessoa: "por pessoa",
      theme: "orange",
    },
  ];

  const passos = [
    {
      num: "01",
      texto: "Acesse o sistema de inscrições da SBC.",
    },
    {
      num: "02",
      texto: "Faça login ou crie sua conta, caso ainda não possua cadastro.",
    },
    {
      num: "03",
      texto: "Selecione a categoria correspondente à sua participação.",
    },
    {
      num: "04",
      texto: "Preencha os dados solicitados e confira as informações antes de finalizar.",
    },
    {
      num: "05",
      texto: "Após a conclusão, aguarde o contato da equipe organizador para confirmar a inscrição e fazer o pagamento.",
    },
  ];

  return (
    <section className="inscricoes-page">

      {/* ── ELEMENTOS DECORATIVOS ── */}
      {/* Linha laranja no topo direito */}
      <img src={imgLineOrange} className="insc-decor insc-line-orange" alt="" aria-hidden="true" />
      {/* Linha amarela na seção do meio */}
      <img src={imgLineYellow} className="insc-decor insc-line-yellow" alt="" aria-hidden="true" />
      {/* Balão laranja flutuando à direita */}
      <img src={imgBOrange} className="insc-decor insc-balao-laranja" alt="" aria-hidden="true" />
      {/* Balão verde à esquerda */}
      <img src={imgBVerde} className="insc-decor insc-balao-verde" alt="" aria-hidden="true" />
      {/* Grupo de balões coloridos */}
      <img src={imgBaloes} className="insc-decor insc-grupo-baloes" alt="" aria-hidden="true" />
      {/* Balão amarelo */}
      <img src={imgbalao3} className="insc-decor insc-balao-amarelo" alt="" aria-hidden="true" />
      {/* Sabiá voando */}
      <img src={imgSabia} className="insc-decor insc-sabia" alt="" aria-hidden="true" />

      {/* Hero Header */}
      <div className="inscricoes-hero">
        <div className="inscricoes-hero-inner">
          <img src={logoPrincipal} alt="31ª Maratona SBC de Programação" className="inscricoes-hero-logo" />
          <h1 className="inscricoes-main-title">Inscrições</h1>
          <p className="inscricoes-hero-subtitle">
            As inscrições devem ser realizadas pelo sistema oficial da{" "}
            <strong>Sociedade Brasileira de Computação (SBC)</strong> — o ECOS.
          </p>
          <a
            id="btn-inscricao-ecos"
            href="https://centraldesistemas.sbc.org.br/ecos/finalmaratonasbc2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inscricao-primary"
          >
            Acessar Sistema ECOS <FaExternalLinkAlt className="btn-ext-icon" />
          </a>
        </div>
      </div>

      <div className="inscricoes-content">

        {/* Categorias */}
        <div className="inscricoes-section">
          <h2 className="section-heading">Categorias de Inscrição</h2>
          <p className="section-subheading">
            Antes de realizar sua inscrição, confira abaixo a categoria correspondente à sua participação.
          </p>
          <div className="categorias-grid">
            {categorias.map((cat) => (
              <div key={cat.id} className={`categoria-card theme-${cat.theme}`}>
                {cat.vagasLimitadas && (
                  <span className="categoria-vagas-badge">Vagas limitadas</span>
                )}
                <div className="categoria-icon">{cat.icon}</div>
                <p className="categoria-titulo">{cat.titulo}</p>
                <div className="categoria-valor-wrapper">
                  <span className="categoria-valor">{cat.valor}</span>
                  <span className="categoria-por-pessoa">{cat.valorPorPessoa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* O que está incluído */}
        <div className="inscricoes-section incluido-section">
          <div className="incluido-card">
            <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>O que está incluído?</h2>
            <ul className="incluido-lista">
              <li>
                <FaCheckCircle className="check-icon" />
                <span>Alimentação durante <strong>todos os dias</strong> do evento</span>
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                <span>Participação nas demais <strong>atividades destinadas aos inscritos</strong>, conforme a programação oficial</span>
              </li>
            </ul>
            <div className="aviso-hospedagem">
              <span>A <strong>hospedagem não está incluída</strong> no valor da inscrição.</span>
            </div>
          </div>
        </div>

        {/* Como realizar */}
        <div className="inscricoes-section">
          <h2 className="section-heading">Como realizar a inscrição</h2>

          <div className="como-grid">

            {/* Card: Equipes Classificadas */}
            <div className="como-card">
              <div className="como-card-header cyan-header">
                <FaUsers className="como-card-icon" />
                <h3>Equipes Classificadas</h3>
              </div>
              <div className="como-card-body">
                <p>
                  As equipes classificadas para a Final Brasileira{" "}
                  <strong>não precisam</strong> ser inscritas no sistema ECOS.
                </p>
                <p>
                  Os(as) coaches receberão orientações da organização para preenchimento de um formulário com dados das equipes finalistas.
                </p>
              </div>
            </div>

            {/* Card: CCL, Co-coaches e Convidados */}
            <div className="como-card">
              <div className="como-card-header purple-header">
                <FaUserFriends className="como-card-icon" />
                <h3>CCL, Co-coaches e Convidados</h3>
              </div>
              <div className="como-card-body">
                <p>
                  Os participantes <strong>CCL, co-coaches e convidados</strong> deverão realizar{" "}
                  <strong>sua própria inscrição</strong>, acessando o sistema oficial e
                  selecionando a categoria correspondente.
                </p>
                <a
                  id="btn-inscricao-cocoach"
                  href="https://centraldesistemas.sbc.org.br/ecos/finalmaratonasbc2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link-card purple"
                >
                  Acessar Sistema ECOS <FaExternalLinkAlt />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Passo a Passo */}
        <div className="inscricoes-section">
          <h2 className="section-heading">
            <FaClipboardList style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
            Procedimento
          </h2>
          <div className="passos-lista">
            {passos.map((passo, i) => (
              <div key={i} className="passo-item">
                <div className="passo-num">{passo.num}</div>
                <div className="passo-linha-container">
                  {i < passos.length - 1 && <div className="passo-connector" />}
                </div>
                <div className="passo-texto">
                  {passo.texto}
                  {i === 0 && (
                    <>
                      {" "}
                      <a
                        href="https://centraldesistemas.sbc.org.br/ecos/finalmaratonasbc2026/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="passo-link"
                      >
                        centraldesistemas.sbc.org.br/ecos/finalmaratonasbc2026/
                        <FaExternalLinkAlt className="passo-ext" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dúvidas */}
        <div className="inscricoes-section">
          <div className="duvidas-card">
            <div className="duvidas-header">
              <FaEnvelope className="duvidas-icon" />
              <h2>Dúvidas?</h2>
            </div>
            <p className="duvidas-texto">
              Em caso de dúvidas sobre as categorias, procedimentos de inscrição ou
              pagamento, entre em contato com a organização da{" "}
              <strong>31ª Maratona SBC de Programação – Final Brasileira</strong>:
            </p>
            <div className="duvidas-emails">
              <a href="mailto:maratonasbc@facom.ufu.br" className="duvidas-email-link" id="email-ufu">
                <FaEnvelope /> maratonasbc@facom.ufu.br
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
