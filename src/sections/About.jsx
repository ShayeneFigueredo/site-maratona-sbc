import React from "react";
import { BsBalloonFill } from "react-icons/bs"; 

import imgbalao1 from "../assets/imgbalao1.png"; 
import imgbalao2 from "../assets/imgbalao2.png";

export default function SobreMaratona() {
  return (
    <section className="sobre-section">
      
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
              Várias instituições de ensino superior do Brasil desenvolvem competições locais para escolher 
              seus melhores times. Os melhores na Final Nacional (regional latino-americana) são 
              selecionados para participarem das Finais Latino-Americanas do evento, a "Programadores de 
              América", onde são selecionados os times que representam a América Latina nas finais mundiais 
              do ICPC. O ICPC conta com mais de 400.000 alumni, e nos últimos anos reúne participantes de 
              mais de 100 países, 3.500 universidades e 75.000 competidores e voluntários. Na América Latina 
              já tivemos mais de 100.000 participações de estudantes na regional, dos quais aproximadamente 
              um terço são brasileiros. Os times são compostos por três estudantes, que tentarão resolver 
              durante cinco horas o maior número possível dos dez ou mais problemas fornecidos. Eles têm à 
              sua disposição apenas um computador e material impresso, para vencer a batalha contra o 
              relógio e a prova proposta. Os competidores devem colaborar para descobrir os problemas mais 
              fáceis, projetar os testes e construir as soluções que sejam aprovadas pelos juízes. Certos 
              problemas requerem apenas compreensão, outros conhecimentos de técnicas mais sofisticadas, 
              e alguns podem ser realmente muito difíceis de serem resolvidos.
            </p>
          </div>
          
          <img 
            src={imgbalao1} 
            alt="Estudantes competindo na Maratona" 
            className="img-competicao-vertical" 
          />
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