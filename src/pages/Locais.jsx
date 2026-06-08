import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Locais.css";

// Substitua por fotos reais dos locais depois!
import imgSabiazinho from "../assets/locais/sabiazinho.webp";
import imgPortoMinas from "../assets/locais/portominas.jpg";
import imgParqueSabia from "../assets/locais/parquesabia.avif";

export default function Locais() {
  const locaisData = [
    {
      id: 1,
      nome: "Arena Sabiazinho",
      badge: "Local Principal",
      badgeClass: "badge-principal",
      endereco: "Av. Anselmo Alves dos Santos, 3415 - Tibery, Uberlândia - MG",
      site: "https://www.uberlandia.mg.gov.br/tags/arena-sabiazinho/",
      maps: "https://www.google.com/maps/search/?api=1&query=Arena+Sabiazinho+Uberlandia",
      img: imgSabiazinho
    },
    {
      id: 2,
      nome: "Hotel Porto Minas",
      badge: "Hospedagem",
      badgeClass: "badge-hospedagem",
      endereco: "Av. João Naves de Ávila, 3635 - Santa Mônica, Uberlândia - MG",
      site: "https://www.portominashotel.com.br/",
      maps: "https://www.google.com/maps/search/?api=1&query=Porto+Minas+Hotel+Uberlandia",
      img: imgPortoMinas
    },
    {
      id: 3,
      nome: "Parque do Sabiá",
      badge: "Cultura & Lazer",
      badgeClass: "badge-cultura",
      endereco: "R. Haia - Tibery, Uberlândia - MG",
      site: "https://www.uberlandia.mg.gov.br/parque-do-sabia/",
      maps: "https://www.google.com/maps/search/?api=1&query=Parque+do+Sabia+Uberlandia",
      img: imgParqueSabia
    }
  ];

  return (
    <section className="locais-page">
      <div className="locais-header">
        <h1 className="page-title">Local do Evento</h1>
        <p className="page-subtitle">Confira os locais onde acontecerá a Maratona de Programação</p>
      </div>

      <div className="locais-grid">
        {locaisData.map((local) => (
          <div key={local.id} className="local-card">
            
            {/* Imagem do Local */}
            <div className="local-img-container">
              {/* Se a imagem não carregar, vai ficar um fundo escuro elegante */}
              <img src={local.img} alt={local.nome} className="local-img" onError={(e) => e.target.style.display='none'} />
            </div>

            {/* Conteúdo do Card */}
            <div className="local-content">
              <div className="local-title-row">
                <a href={local.site} target="_blank" rel="noopener noreferrer" className="local-nome-link">
                  <h3>{local.nome} <FaExternalLinkAlt className="external-icon" /></h3>
                </a>
                <span className={`local-badge ${local.badgeClass}`}>{local.badge}</span>
              </div>

              <p className="local-endereco">
                <FaMapMarkerAlt className="pin-icon" />
                {local.endereco}
              </p>

              <a href={local.maps} target="_blank" rel="noopener noreferrer" className="btn-mapa">
                Ver no Mapa
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}