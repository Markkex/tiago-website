import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SpaIcon from "@mui/icons-material/Spa";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import HeroContainer from "../../components/HeroContainer";
import { Link } from "react-router-dom";

import "./index.css";
import ResponsiveAppBar from "../../components/Menu";
import { Container } from "@mui/system";

const Home = () => {
  const [residenceOn, setResidenceOn] = useState(true);
  const [restaurantOn, setRestaurantOn] = useState(false);
  const [organicOn, setOrganicOn] = useState(false);
  const [localsOn, setLocalsOn] = useState(false);
  const [experiencesOn, setExperiencesOn] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  var myScrollFunc = function () {
    var y = window.scrollY;

    if (y >= 1000) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  };

  window.addEventListener("scroll", myScrollFunc);

  return (
    <div>
      {isMenu && <ResponsiveAppBar />}
      <div className="tabbed-hero">
        <div className="hero-logoContainer font-hero-color">
          <div className="hero-menu">
            <h1>Villa Imperium</h1>
            <Button className="reservation-button">Reservar</Button>
          </div>
        </div>
        {residenceOn && (
          <HeroContainer
            textH1="Uma terra repleta de experiências."
            textH3="Reserve já o seu quarto para as suas férias."
            cssClass="background-image-housing"
          />
        )}
        {restaurantOn && (
          <HeroContainer
            textH1="O melhor do Algarve na sua mesa."
            textH3=""
            cssClass="background-image-restaurant"
          />
        )}
        {organicOn && (
          <HeroContainer
            textH1="Uraraka."
            textH3="Xibata."
            cssClass="background-image-organic"
          />
        )}
        {localsOn && (
          <HeroContainer
            textH1="O ginásio na sua terra."
            textH3="Reserve já o seu quarto para as suas férias."
            cssClass="background-image-gym"
          />
        )}
        {experiencesOn && (
          <HeroContainer
            textH1="Uma terra repleta de experiências."
            textH3="Reserve já o seu quarto para as suas férias."
            cssClass="background-image-experiences"
          />
        )}

        <div className="tabbedHero-menu">
          <div
            style={{ textAlign: "center" }}
            onMouseEnter={() => {
              setResidenceOn(true);
              setRestaurantOn(false);
              setOrganicOn(false);
              setLocalsOn(false);
              setExperiencesOn(false);
            }}
          >
            <Link to={"casas-da-vila"}>
              <HouseSidingIcon fontSize="large" />
              <h2 className="font-hero-color">Alojamento Local</h2>
            </Link>
          </div>
          <div
            style={{ textAlign: "center" }}
            onMouseEnter={() => {
              setResidenceOn(false);
              setRestaurantOn(true);
              setOrganicOn(false);
              setLocalsOn(false);
              setExperiencesOn(false);
            }}
          >
            <Link to={"iguarias-da-vila"}>
              <RestaurantMenuIcon fontSize="large" />
              <h2 className="font-hero-color">Iguarias da Vila</h2>
            </Link>
          </div>
          <div
            style={{ textAlign: "center" }}
            onMouseEnter={() => {
              setResidenceOn(false);
              setRestaurantOn(false);
              setOrganicOn(true);
              setLocalsOn(false);
              setExperiencesOn(false);
            }}
          >
            <Link to={"organic"}>
              <SpaIcon fontSize="large" />
              <h2 className="font-hero-color">Organic</h2>
            </Link>
          </div>
          <div
            style={{ textAlign: "center" }}
            onMouseEnter={() => {
              setResidenceOn(false);
              setRestaurantOn(false);
              setOrganicOn(false);
              setLocalsOn(true);
              setExperiencesOn(false);
            }}
          >
            <Link to={"warriors-prophecy"}>
              <FitnessCenterIcon fontSize="large" />
              <h2 className="font-hero-color">Warrior's Prophecy</h2>
            </Link>
          </div>

          <Link to={"descubra-a-fuseta"}>
            <div
              style={{ textAlign: "center" }}
              onMouseEnter={() => {
                setResidenceOn(false);
                setRestaurantOn(false);
                setOrganicOn(false);
                setLocalsOn(false);
                setExperiencesOn(true);
              }}
            >
              <KitesurfingIcon fontSize="large" />
              <h2 className="font-hero-color">Experiências</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="my-5 side-content">
        <Container>
          <div className="py-5">
            <h3>CASAS DA VILA</h3>
            <div>Casas da Vila</div>
          </div>

          <div>Casas da Vila Text</div>

          <div>image</div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
