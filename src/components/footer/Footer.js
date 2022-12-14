import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-container">
          <div className="py-5">
            <h2>Casas da Vila</h2>
          </div>
          <div className="footer-informations py-5">
            <div className="partners-footer p-3">
              <h5>Parceiros</h5>
              <span>
                <Link to="/iguarias-da-vila">Iguarias da Vila</Link>
              </span>
              <br />
              <span>
                <Link to="/organic">Organic</Link>
              </span>
              <br />
              <span>
                <Link to="/warriors-prophecy">Warrior's Prophecy</Link>
              </span>
            </div>
            <div className="reservation-footer p-3">
              <h5>Reservas</h5>
              <div className="reservation-links">
                <span>Faça uma Reserva</span>
              </div>
            </div>
            <div className="informations-footer p-3">
              <h5>Para mais Informações</h5>
              <div className="informations-links">
                <span>
                  <a href="tel:8594398453">54289754983</a>
                </span>
                <br />

                <span>
                  <a href="mailto:cenas@cenas.pt">cenas@cenas.pt</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <hr style={{ backgroundColor: "white" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="pb-2"
      >
        <span className="px-2">
          <Link>Politica de Privacidade</Link>
        </span>
        <span className="px-5">
          <Link>Cookies</Link>
        </span>
        <span className="px-2">
          <Link>Termos e Condições</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
