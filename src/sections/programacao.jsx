import React from "react";
import { BsLockFill } from "react-icons/bs";

export default function Programacao() {
  const dadosProgramacao = [
    {
      date: "05/11 - Quarta-feira (Chegada)",
      time: "10:00 - 22:00",
      description: "Recepção das delegações e credenciamento oficial.",
    },
    {
      date: "06/11 - Quinta-feira (Aquecimento)",
      time: "08:30 - 19:30",
      description: "Sessão de aquecimento e teste dos sistemas de competição.",
    },
    {
      date: "07/11 - Sexta-feira (Competição)",
      time: "09:00 - 24:00",
      description: "Grande Final da Maratona de Programação 2026.",
    },
    {
      date: "08/11 - Sábado (Retorno)",
      time: "Manhã",
      description: "Cerimônia de encerramento e logística de retorno.",
    }
  ];

  return (
    <section className="schedule-section">
      <div className="container">
        <h2 className="schedule-title">Programação da Maratona</h2>
        <p className="schedule-subtitle">Esta é uma previsão. Fique atento: os horários podem sofrer alterações.</p>

        <div className="schedule-grid">
          {dadosProgramacao.map((item, index) => (
            <div key={index} className="schedule-card teaser-mode">
              
              {/* 1. CABEÇALHO (VISÍVEL E NÍTIDO) */}
              <div className="card-header-visible">
                <span className="card-date-visible">{item.date}</span>
                <span className="card-time-visible">{item.time}</span>
              </div>

              {/* 2. ÁREA DO CONTEÚDO BLOQUEADO (RELATIVO) */}
              <div className="locked-content-area">
                
                {/* CONTEÚDO OBSCURECIDO (BLUR) */}
                <div className="card-body-blurred">
                  <p className="card-description-blurred">
                    {item.description}
                  </p>
                  <button className="btn-mais-info-fake">Mais informações</button>
                </div>

                {/* CAMADA DO CADEADO (GLASS SOBRE O BODY) */}
                <div className="lock-overlay-teaser">
                  <BsLockFill className="lock-icon-teaser" />
                  <span className="coming-soon-text-teaser">EM BREVE</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="schedule-action-btns">
          <button className="btn-pdf-fake">Gerar PDF do itinerário</button>
          <button className="btn-agenda-fake">Adicionar todos à Google Agenda</button>
        </div>

      </div>
    </section>
  );
}