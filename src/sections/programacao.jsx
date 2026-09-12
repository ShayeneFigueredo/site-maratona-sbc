import React, { useState } from "react";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaDownload, 
  FaPrint 
} from "react-icons/fa";
import "../styles/Programacao.css";

export default function Programacao() {
  const [toastMessage, setToastMessage] = useState("");

  const scheduleDays = [
    {
      id: "quinta",
      dayNumber: "05/11",
      dayOfWeek: "Quinta-feira",
      themeClass: "theme-cyan",
      subtitle: "Recepção, Credenciamento e Abertura Social",
      events: [
        {
          time: "09:00 - 12:00",
          title: "Recepção dos participantes, credenciamento, fotos dos times e entrega de materiais",
          location: "Hotel Porto Minas",
          category: "Credenciamento",
          categoryType: "logistica"
        },
        {
          time: "09:00 – 18:00",
          title: "Check-in dos times e coaches no hotel",
          location: "Hotel Porto Minas",
          category: "Logística",
          categoryType: "logistica"
        },
        {
          time: "14:00 – 17:00",
          title: "Atividade BTG – Patrocinador Premium",
          location: "Hotel Porto Minas",
          category: "Destaque",
          categoryType: "destaque",
          highlight: true
        },
        {
          time: "18:00 - 19:00",
          title: "Encontro das meninas da Maratona de Programação",
          location: "Hotel Porto Minas",
          category: "Integração",
          categoryType: "integracao",
          highlight: true
        },
        {
          time: "18:00 – 22:00",
          title: "Encontro de integração com patrocinadores",
          location: "Hotel Porto Minas",
          category: "Networking",
          categoryType: "integracao"
        },
        {
          time: "19:00 - 22:00",
          title: "Jantar de boas-vindas",
          location: "Hotel Porto Minas",
          category: "Social",
          categoryType: "integracao"
        },
        {
          time: "21:00 - 22:00",
          title: "Reunião do Comitê Diretor",
          location: "Hotel Porto Minas",
          category: "Oficial",
          categoryType: "oficial"
        }
      ]
    },
    {
      id: "sexta",
      dayNumber: "06/11",
      dayOfWeek: "Sexta-feira",
      themeClass: "theme-blue",
      subtitle: "Aquecimento (Warm-up), Fotos Oficiais e Integração",
      events: [
        {
          time: "06:00 - 08:00",
          title: "Café da manhã",
          location: "Hotel Porto Minas – Restaurante",
          category: "Alimentação",
          categoryType: "logistica"
        },
        {
          time: "07:00 - 08:30",
          title: "Deslocamento (Hotel Porto Minas para Arena Sabiazinho)",
          location: "Hotel Porto Minas – Rua lateral",
          category: "Transporte",
          categoryType: "logistica"
        },
        {
          time: "07:30 - 09:00",
          title: "Credenciamento tardio dos times e entrega de materiais",
          location: "Arena Sabiazinho",
          category: "Credenciamento",
          categoryType: "logistica"
        },
        {
          time: "09:00 - 11:30",
          title: "Recepção, abertura e palestras dos patrocinadores e apoiadores",
          location: "Arena Sabiazinho",
          category: "Abertura Oficial",
          categoryType: "oficial",
          highlight: true
        },
        {
          time: "11:30 - 13:00",
          title: "Almoço",
          location: "Estádio Parque do Sabia – Portão 06",
          category: "Alimentação",
          categoryType: "logistica"
        },
        {
          time: "12:30 – 13:30",
          title: "Encontro de integração com patrocinadores",
          location: "Arena Sabiazinho",
          category: "Networking",
          categoryType: "integracao"
        },
        {
          time: "13:30 – 14:00",
          title: "Chegada dos times e posicionamento para aquecimento (Warm-up)",
          location: "Arena Sabiazinho",
          category: "Preparação",
          categoryType: "competicao"
        },
        {
          time: "14:00 - 15:00",
          title: "Sessão aberta de treino - Aquecimento (Warm-up)",
          location: "Arena Sabiazinho",
          category: "Warm-up",
          categoryType: "competicao",
          highlight: true
        },
        {
          time: "15:30",
          title: "1ª Foto Oficial do evento com as camisetas oficiais e os times – Arquibancada Amarela Sabiazinho",
          location: "Arena Sabiazinho",
          category: "Foto Oficial",
          categoryType: "oficial",
          highlight: true
        },
        {
          time: "15:30 - 16:00",
          title: "Deslocamento para o Parque do Sabiá para atividades integradoras",
          location: "Parque do Sabiá",
          category: "Transporte",
          categoryType: "logistica"
        },
        {
          time: "16:00 - 16:30",
          title: "2ª Foto Oficial do evento com as camisetas oficiais e os times – Gramado do Parque do Sabia",
          location: "Parque do Sabiá",
          category: "Foto Oficial",
          categoryType: "oficial",
          highlight: true
        },
        {
          time: "16:30 – 19:00",
          title: "Atividades integradoras",
          location: "Parque do Sabiá",
          category: "Integração & Lazer",
          categoryType: "integracao"
        },
        {
          time: "19:00 – 19:30",
          title: "Deslocamento para Arena Sabiazinho",
          location: "Arena Sabiazinho",
          category: "Transporte",
          categoryType: "logistica"
        },
        {
          time: "19:30 - 22:00",
          title: "Jantar e atividades com patrocinadores",
          location: "Arena Sabiazinho",
          category: "Social & Networking",
          categoryType: "integracao"
        },
        {
          time: "22:00 – 23:30",
          title: "Deslocamento (Arena Sabiazinho para Hotel Porto Minas)",
          location: "Estádio Parque do Sabia – Portão 06",
          category: "Transporte",
          categoryType: "logistica"
        }
      ]
    },
    {
      id: "sabado",
      dayNumber: "07/11",
      dayOfWeek: "Sábado",
      themeClass: "theme-purple",
      subtitle: "A Grande Final Brasileira e Cerimônia de Premiação",
      events: [
        {
          time: "08:00 - 10:00",
          title: "Café da manhã",
          location: "Hotel Porto Minas – Restaurante",
          category: "Alimentação",
          categoryType: "logistica"
        },
        {
          time: "09:00 - 10:30",
          title: "Deslocamento (Hotel Porto Minas para Arena Sabiazinho)",
          location: "Hotel Porto Minas – Rua lateral",
          category: "Transporte",
          categoryType: "logistica"
        },
        {
          time: "09:30 – 11:30",
          title: "Integração entre os times e troca de figurinhas do álbum",
          location: "Arena Sabiazinho",
          category: "Integração",
          categoryType: "integracao"
        },
        {
          time: "10:00 - 11:00",
          title: "Sessão perguntas/respostas dos coaches com juízes/sistemas",
          location: "Arena Sabiazinho",
          category: "Sessão Técnica",
          categoryType: "oficial"
        },
        {
          time: "11:30 - 13:30",
          title: "Almoço",
          location: "Estádio Parque do Sabia – Portão 06",
          category: "Alimentação",
          categoryType: "logistica"
        },
        {
          time: "13:30 – 14:00",
          title: "Chegada dos times para competição principal",
          location: "Arena Sabiazinho",
          category: "Concentração",
          categoryType: "competicao"
        },
        {
          time: "14:00 - 19:00",
          title: "Final da Maratona SBC de Programação 2026",
          location: "Arena Sabiazinho",
          category: "Grande Final",
          categoryType: "destaque",
          highlight: true
        },
        {
          time: "19:00 - 19:30",
          title: "Deslocamento para encerramento e premiação",
          location: "Estádio Parque do Sabia – Portão 06",
          category: "Transporte",
          categoryType: "logistica"
        },
        {
          time: "19:30 - 23:30",
          title: "Jantar de encerramento e cerimônia de premiação",
          location: "Estádio Parque do Sabia – Portão 06",
          category: "Premiação Oficial",
          categoryType: "destaque",
          highlight: true
        },
        {
          time: "23:30 - 01:00",
          title: "Deslocamento (Arena Sabiazinho para Hotel Porto Minas)",
          location: "Estádio Parque do Sabia – Portão 06",
          category: "Transporte",
          categoryType: "logistica"
        }
      ]
    },
    {
      id: "domingo",
      dayNumber: "08/11",
      dayOfWeek: "Domingo",
      themeClass: "theme-orange",
      subtitle: "Check-out e Despedida das Delegações",
      events: [
        {
          time: "06:00 - 09:00",
          title: "Café da manhã",
          location: "Hotel Porto Minas – Restaurante",
          category: "Alimentação",
          categoryType: "logistica"
        },
        {
          time: "Até as 12:00",
          title: "Check-out dos times e retorno",
          location: "Hotel Porto Minas – Recepção",
          category: "Retorno & Encerramento",
          categoryType: "destaque",
          highlight: true
        }
      ]
    }
  ];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

  const handleDownloadICS = () => {
    let icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Maratona SBC de Programacao 2026//FACOM UFU//PT",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH"
    ];

    const year = 2026;
    const month = "11";

    scheduleDays.forEach(day => {
      const dayNum = day.dayNumber.split("/")[0].padStart(2, "0");
      
      day.events.forEach((ev, idx) => {
        let startTimeStr = "09:00";
        let endTimeStr = "10:00";

        if (ev.time.includes("-") || ev.time.includes("–")) {
          const parts = ev.time.split(/[-–]/).map(s => s.trim());
          if (parts[0] && parts[0].includes(":")) startTimeStr = parts[0];
          if (parts[1] && parts[1].includes(":")) endTimeStr = parts[1];
        } else if (ev.time.includes(":")) {
          startTimeStr = ev.time.trim();
          const [h, m] = startTimeStr.split(":");
          const endHour = (parseInt(h, 10) + 1).toString().padStart(2, "0");
          endTimeStr = `${endHour}:${m || "00"}`;
        }

        const [startH, startM] = startTimeStr.split(":");
        const [endH, endM] = endTimeStr.split(":");
        
        const dtStart = `${year}${month}${dayNum}T${(startH || "09").padStart(2, "0")}${(startM || "00").padStart(2, "0")}00`;
        const dtEnd = `${year}${month}${dayNum}T${(endH || "10").padStart(2, "0")}${(endM || "00").padStart(2, "0")}00`;

        icsContent.push(
          "BEGIN:VEVENT",
          `UID:maratona2026-${day.id}-${idx}@maratonasbc.ufu.br`,
          `DTSTAMP:${year}1101T000000Z`,
          `DTSTART:${dtStart}`,
          `DTEND:${dtEnd}`,
          `SUMMARY:${ev.title.replace(/,/g, "\\,")}`,
          `LOCATION:${ev.location.replace(/,/g, "\\,")}`,
          `DESCRIPTION:Maratona SBC de Programação 2026 (FACOM/UFU) - ${day.dayOfWeek} ${ev.time}`,
          "STATUS:CONFIRMED",
          "END:VEVENT"
        );
      });
    });

    icsContent.push("END:VCALENDAR");

    const blob = new Blob([icsContent.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "programacao-maratona-sbc-2026.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Calendário (.ics) gerado e baixado com sucesso!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="schedule-section" id="programacao">
      <div className="schedule-header">
        <div className="schedule-badge-top">
          <FaCalendarAlt /> Cronograma do Evento
        </div>
        <h2 className="schedule-title">Programação Oficial</h2>
        <p className="schedule-subtitle-lead">
          Final Maratona SBC de Programação (FACOM/UFU) 2026
        </p>
        <p className="schedule-subtitle-date">
          De 05 a 08 de novembro de 2026 • Uberlândia - MG
        </p>
        <p className="schedule-disclaimer">
          * Os horários e locais podem sofrer pequenos ajustes pela organização.
        </p>
      </div>

      {/* Grid 2x2: Quinta e Sexta lado a lado; Sábado e Domingo abaixo */}
      <div className="schedule-grid-2x2">
        {scheduleDays.map((day) => (
          <div key={day.id} className={`schedule-day-column ${day.themeClass}`}>
            
            {/* Header do Card do Dia */}
            <div className="day-column-header">
              <div className="day-title-row">
                <span className="day-date-badge">{day.dayNumber}</span>
                <h3 className="day-name">{day.dayOfWeek}</h3>
              </div>
              <div className="day-subtitle-pill">{day.subtitle}</div>
            </div>

            {/* Lista dos Eventos do Dia */}
            <div className="day-events-list">
              {day.events.map((ev, idx) => (
                <div 
                  key={idx} 
                  className={`event-item-card ${ev.highlight ? "highlight-card" : ""}`}
                >
                  <div className="event-time-row">
                    <FaClock className="time-icon" />
                    <span>{ev.time}</span>
                  </div>

                  <p className="event-title-text">{ev.title}</p>

                  {ev.category && (
                    <div className="event-badge-row">
                      <span className={`event-cat-badge cat-${ev.categoryType || 'logistica'}`}>
                        {ev.category}
                      </span>
                    </div>
                  )}

                  <div className="event-location-capsule" title={`Local: ${ev.location}`}>
                    <FaMapMarkerAlt className="loc-pin-icon" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Botões de Ação na base */}
      <div className="schedule-action-btns">
        <button className="btn-schedule-action btn-schedule-calendar" onClick={handleDownloadICS}>
          <FaDownload /> Baixar Calendário (.ics)
        </button>
        <button className="btn-schedule-action btn-schedule-pdf" onClick={handlePrint}>
          <FaPrint /> Imprimir / Salvar PDF
        </button>
      </div>

      {/* Toast de Feedback */}
      {toastMessage && (
        <div className="schedule-toast">
          {toastMessage}
        </div>
      )}
    </section>
  );
}