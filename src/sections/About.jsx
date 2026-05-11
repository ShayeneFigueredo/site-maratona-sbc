import React from "react";
import { BsBalloonFill } from "react-icons/bs"; 

// Importações das imagens
import imgbalao2 from "../assets/imgbalao2.png";
import imgBOrange from "../assets/b-orange.png";
import imgBaloes from "../assets/baloes.png";
import imgbalao3 from "../assets/b-yellow.png";
import imgLineOrange from "../assets/line-orange.png";
import imgSabia from "../assets/sabia-voando.png"; 

export default function SobreMaratona() {
  return (
    <section className="sobre-section">
      
      {/* ELEMENTOS DECORATIVOS DE FUNDO */}
      <img src={imgLineOrange} className="decor-item decor-line-orange" alt="" aria-hidden="true" />
      <img src={imgBOrange} className="decor-item decor-balao-laranja" alt="" aria-hidden="true" />
      <img src={imgBaloes} className="decor-item decor-grupo-baloes" alt="" aria-hidden="true" />
      <img src={imgbalao3} className="decor-item decor-balao3" alt="" aria-hidden="true" />
      <img src={imgSabia} className="decor-sabia" alt="" aria-hidden="true" />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="sobre-header">
        <div className="titulo-container">
          <BsBalloonFill className="icone-balao" />
          <h2>Sobre a Maratona</h2>
        </div>
      </div>

      <div className="sobre-conteudo">
        
        <div className="sobre-linha-superior">
          <div className="paragrafo-principal">
            
            <p>
              Pela primeira vez na história, a Final Brasileira da Maratona SBC de Programação 
              chega à cidade de Uberlândia e, com muita honra, recebemos a 31ª MARATONA SBC DE 
              PROGRAMAÇÃO 2026, realizada pela FACOM-UFU e promovida pela Sociedade Brasileira 
              de Computação (SBC).
            </p>
            
            <p>
              A Maratona SBC de Programação, promovida pela Sociedade Brasileira de Computação (SBC), 
              é uma competição nacional que reúne estudantes de Computação em uma batalha contra o 
              tempo para resolver problemas complexos com criatividade, estratégia e trabalho em equipe.
            </p>
            <p>
              Várias instituições de ensino superior do Brasil desenvolvem competições locais para escolher 
              seus melhores times. Os melhores na Final Nacional (regional latino-americana) são 
              selecionados para participarem das Finais Latino-Americanas do evento, a "Programadores de 
              América", onde são selecionados os times que representam a América Latina nas finais mundiais 
              do ICPC.
            </p>
            <p>
              Na América Latina já tivemos mais de 100.000 participações de estudantes na regional, dos quais aproximadamente 
              um terço são brasileiros. Os times são compostos por três estudantes, que tentarão resolver 
              durante cinco horas o maior número possível dos dez ou mais problemas fornecidos.
            </p>
            <p>
              Os competidores devem colaborar para descobrir os problemas mais 
              fáceis, projetar os testes e construir as soluções que sejam aprovadas pelos juízes. Certos 
              problemas requerem apenas compreensão, outros conhecimentos de técnicas mais sofisticadas, 
              e alguns podem ser realmente muito difíceis de serem resolvidos.
            </p>
          </div>
        </div>

        <img 
          src={imgbalao2} 
          alt="Grupo de participantes da Maratona" 
          className="img-turma-horizontal-larga" 
        />
      </div>
      
    </section>
  );
}