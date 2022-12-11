import React from "react";

import ResponsiveAppBar from "../../components/Menu";
import Footer from "../../components/footer/Footer";
import "./index.css";
import { Container } from "@mui/system";

import PeopleIcon from "@mui/icons-material/People";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HouseCard from "../../components/card/HouseCard";
import middleHouse from "../../assets/middle-house.png";

const Houses = ({ house }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <div
        className="house-header"
        style={{ backgroundImage: `url(${house[0].header})` }}
      />
      <Container>
        <div className="house-details py-5">
          <h1 className="primary-text-color">{house[0].name}</h1>
          <div
            className="py-3"
            style={{
              display: "flex",
            }}
          >
            <div className="px-4">
              <PeopleIcon fontSize="large" style={{ color: "#579C9E" }} />
              <span style={{ marginLeft: "10px" }}>
                <b>{house[0].numberOfPersons}</b>
              </span>
            </div>
            <div>
              <ZoomInMapIcon fontSize="large" style={{ color: "#579C9E" }} />
              <span style={{ marginLeft: "10px" }}>
                <b>T{house[0].houseTypology}</b>
              </span>
            </div>
          </div>
          <div className="house-text py-5">
            <p>{house[0].textOne}</p>
            <p>{house[0].textTwo}</p>
          </div>
          <Button size="large" className="button-reservation">
            <Link
              style={{ color: "white" }}
              to="/bookings"
              rel="noopener noreferrer"
            >
              Reservar
            </Link>
          </Button>
        </div>
      </Container>
      <div className="carousel">
        <Carousel>
          {house[0].images.map((image) => {
            return (
              <Carousel.Item interval={5000}>
                <img className="d-block w-100" src={image} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <Container>
        <div className="house-location py-5">
          <h1 style={{ textTransform: "uppercase", margin: "auto" }}>
            Como chegar até nós
          </h1>
          <iframe
            src={house[0].iframeLocation}
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="house-options py-5">
          <h1 style={{ textTransform: "uppercase", margin: "auto" }}>
            Veja também as outras casas
          </h1>
          <div className="options" style={{ display: "flex" }}>
            <div className="px-5">
              <HouseCard
                cardTitle="Casa 1"
                cardImage={middleHouse}
                numberOfPeople="2"
                tipology={4}
                cardDescription="Lorem Ipsum dolor sit amet."
                cardLink="/casa-1"
                cssAnimation="animate__animated animate__bounceInLeft animate__slow"
              />
            </div>
            <div className="px-5">
              <HouseCard
                cardTitle="Casa 1"
                cardImage={middleHouse}
                numberOfPeople="2"
                tipology={4}
                cardDescription="Lorem Ipsum dolor sit amet."
                cardLink="/casa-1"
                cssAnimation="animate__animated animate__bounceInLeft animate__slow"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Houses;
