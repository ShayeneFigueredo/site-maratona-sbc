import React from "react";
import imgFacom from "../assets/facom.png";
import imgSbc from "../assets/sbc.webp"; 

export default function FinalBrasileira() {
  return (
    <section className="final-section">
      <div className="final-header">
        <h2>Final Brasileira 2026</h2>
        <div className="underline"></div>
        <p>
          Com muita honra, a cidade de Uberlândia recebe a <strong>31ª MARATONA SBC DE PROGRAMAÇÃO</strong>, 
          realizada pela <strong>FACOM</strong> e promovida pela <strong>Sociedade Brasileira de Computação (SBC)</strong>. 
          São mais de 30 anos promovendo o desenvolvimento da comunidade voltada para a computação em todo o território nacional, 
          com dezenas de times representando todos os estados do Brasil e diversas Instituições de Ensino Superior.
        </p>
      </div>

      <div className="cards-container">
        {/* Card FACOM */}
        <div className="info-card">
          <div className="card-image-container">
            <img src={imgFacom} alt="Fachada da FACOM UFU" className="card-img" />
          </div>
          <div className="card-content">
            <h3>Sobre a FACOM</h3>
            <p>
              A <strong>Faculdade de Computação (FACOM)</strong> da Universidade Federal de Uberlândia (UFU) 
              é a realizadora desta edição. Reconhecida por sua excelência acadêmica, a faculdade é um 
              polo de inovação e pesquisa, oferecendo cursos de destaque nas áreas de Sistemas de Informação, 
              Ciência da Computação e Engenharia de Computação.
            </p>
          </div>
        </div>

        {/* Card SBC */}
        <div className="info-card">
          <div className="card-image-container">
            <img src={imgSbc} alt="Logo da Sociedade Brasileira de Computação" className="card-img" />
          </div>
          <div className="card-content">
            <h3>Sobre a SBC</h3>
            <p>
              A <strong>Sociedade Brasileira de Computação (SBC)</strong> é a promotora oficial da Maratona de Programação. 
              Fundada em 1978, é a principal entidade científica e profissional na área de Computação no Brasil, 
              fomentando o desenvolvimento tecnológico e coordenando eventos nacionais e internacionais.
            </p>
          </div>
        </div>
      </div>
      
      <div className="final-action">
        <button className="btn-primary">Ver conteúdo completo no site da SBC</button>
      </div>
    </section>
  );
}