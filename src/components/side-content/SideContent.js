import { Container } from "@mui/material";
import React from "react";

const SideContent = () => {
  return (
    <div className="my-5 side-content">
      <Container>
        <div className="inside-content">
          <div className="py-5" style={{ width: "50%" }}>
            <h3>CASAS DA VILA</h3>
            <div className="primary-text-color">
              O AGRUPAMENTO IDEAL PARA DIAS DE TRANQUILIDADE EM FUZETA
            </div>

            <div className="py-3">
              <p>
                Casas da Vila é um agrupamento de casas com destino a
                arrendamento em Fuseta, no Algarve.
              </p>
              <p>
                A 2 minutos da praia e ilha da Fuzeta esta é uma localização
                priveligiada sobre o Parque Natural da Ria Formosa, eleita uma
                das 7 Maravilhas Naturais de Portugal, estes alojamentos são o
                local ideal para umas férias em familia e ficar a conhecer o
                sotavento algarvio.
              </p>
              <p>
                Localizado no centro da vila da Fuzeta, estamos completamente
                equipados para a sua estadia conosco. Ao reservar conosco também
                tem direito a descontos com os nossos parceiros.
              </p>
              <p>
                As Casas da Vila encontram-se a 20km da cidade de Faro e da
                cidade de Tavira, sendo o sitio perfeito para os grandes polos
                do sotavento algarvio.
              </p>
            </div>
          </div>

          <div className="py-5 px-3" style={{ width: "50%" }}>
            <img src={towel} alt="towel" width="100%" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SideContent;
