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
import towel from "../../assets/towel.png";
import fuseta from "../../assets/ilha-da-fuzeta 1.png";
import middleHouse from "../../assets/middle-house.png";
import SideContent from "../../components/side-content/SideContent";
import HouseCard from "../../components/card/HouseCard";
import Footer from "../../components/footer/Footer";

import FusetaImage from "../../assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg";
//images

const Home = () => {
  const [residenceOn, setResidenceOn] = useState(true);
  const [restaurantOn, setRestaurantOn] = useState(false);
  const [organicOn, setOrganicOn] = useState(false);
  const [localsOn, setLocalsOn] = useState(false);
  const [experiencesOn, setExperiencesOn] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  var myScrollFunc = function () {
    var y = window.scrollY;

    if (y >= 700) {
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
            <h1 className="header-font">Casas da Vila</h1>
            <Button className="button-reservation">Reservar</Button>
          </div>
        </div>
        {residenceOn && (
          <HeroContainer
            textH1="Uma terra repleta de experiências."
            textH3="Reserve já o seu quarto para as suas férias."
            cssClass="background-image-housing"
            image={FusetaImage}
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

        <div className="tabbedHero-menu animate__animated animate__bounceInDown">
          <div
            style={{ textAlign: "center" }}
            onMouseEnter={() => {
              setResidenceOn(true);
              setRestaurantOn(false);
              setOrganicOn(false);
              setLocalsOn(false);
              setExperiencesOn(false);
            }}
            className={residenceOn ? `cenas menu-stick` : ""}
          >
            <Link to={"casas-da-vila"}>
              <HouseSidingIcon fontSize="large" />
              <p className="font-hero-color">Alojamento Local</p>
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
            className={restaurantOn ? `cenas menu-stick` : ""}
          >
            <Link to={"iguarias-da-vila"}>
              <RestaurantMenuIcon fontSize="large" />
              <p className="font-hero-color">Iguarias da Vila</p>
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
            className={organicOn ? `cenas menu-stick` : ""}
          >
            <Link to={"organic"}>
              <SpaIcon fontSize="large" />
              <p className="font-hero-color">Organic</p>
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
            className={localsOn ? `cenas menu-stick` : ""}
          >
            <Link to={"warriors-prophecy"}>
              <FitnessCenterIcon fontSize="large" />
              <p className="font-hero-color">Warrior's Prophecy</p>
            </Link>
          </div>

          <div
            style={{ textAlign: "center" }}
            onMouseEnter={() => {
              setResidenceOn(false);
              setRestaurantOn(false);
              setOrganicOn(false);
              setLocalsOn(false);
              setExperiencesOn(true);
            }}
            className={experiencesOn ? `cenas menu-stick` : ""}
          >
            <Link to={"descubra-a-fuseta"}>
              <KitesurfingIcon fontSize="large" />
              <p className="font-hero-color">Experiências</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-5">
        <SideContent
          titleText={"Casas da Vila"}
          titleDescription={
            "O AGRUPAMENTO IDEAL PARA DIAS DE TRANQUILIDADE EM FUZETA"
          }
          textOne={`Casas da Vila é um agrupamento de casas com destino a arrendamento em Fuseta, no Algarve.`}
          textTwo={`A 2 minutos da praia e ilha da Fuzeta esta é uma localização
                priveligiada sobre o Parque Natural da Ria Formosa, eleita uma
                das 7 Maravilhas Naturais de Portugal, estes alojamentos são o
                local ideal para umas férias em familia e ficar a conhecer o
                sotavento algarvio.`}
          textThree={`Localizado no centro da vila da Fuzeta, estamos completamente
                equipados para a sua estadia conosco. Ao reservar conosco também
                tem direito a descontos com os nossos parceiros.`}
          textFour={`As Casas da Vila encontram-se a 20km da cidade de Faro e da
                cidade de Tavira, sendo o sitio perfeito para os grandes polos
                do sotavento algarvio.`}
          imageUrl={towel}
        />
      </div>
      <div className="houses-card py-5">
        <Container>
          <h1 className="pt-3 header-font" style={{ textAlign: "center" }}>
            AS NOSSAS CASAS
          </h1>
          <div className="row">
            <div
              className="col-sx-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center"
              data-aos="fade-right"
            >
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
            <div
              className="col-sx-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center"
              data-aos="fade-up"
            >
              <HouseCard
                cardTitle="Casa 2"
                cardImage={middleHouse}
                numberOfPeople="2"
                tipology={4}
                cardDescription="Lorem Ipsum dolor sit amet."
                cardLink="/casa-1"
                cssAnimation="animate__animated animate__bounceInUp animate__slow"
              />
            </div>
            <div
              className="col-sx-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center"
              data-aos="fade-left"
            >
              <HouseCard
                cardTitle="Casa 3"
                cardImage={middleHouse}
                numberOfPeople="2"
                tipology={4}
                cardDescription="Lorem Ipsum dolor sit amet."
                cardLink="/casa-1"
                cssAnimation="animate__animated animate__bounceInLeft animate__slow"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="partners-container py-5">
        <Container>
          <h1 style={{ textAlign: "center" }} className="header-font">
            EXPLORE A FUZETA CONOSCO
          </h1>
          <h5 style={{ textAlign: "center" }} className="subheader-font">
            Ao reservar conosco tem descontos nos seguintes parceiros:
          </h5>
          <div className="partners pt-5">
            <div
              className="iguarias-partner container-opacity"
              data-aos="fade-right"
            >
              <div className=" iguarias-container container-position-relative">
                <h3 className="container-position-absolute">
                  Iguarias da Vila
                </h3>
              </div>
            </div>
            <div
              className="partners-width "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                className="container-opacity container-top container-position-relative"
                data-aos="fade-left"
              >
                <h3 className=" container-position-absolute">Organic</h3>
              </div>
              <div
                className="container-opacity container-middle container-position-relative"
                data-aos="fade-right"
              >
                <h3 className=" container-position-absolute">
                  Warrior's Prophecy
                </h3>
              </div>
              <div
                className="container-opacity container-bottom container-position-relative"
                data-aos="fade-left"
              >
                <h3 className="container-position-absolute">
                  Passeios Ria Formosa
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="guide-container py-5 "
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Container>
          <div className="container-position-relative">
            <img src={fuseta} width="100%" />
            <div className="container-position-absolute">
              <span>A BRANCA NOIVA DO MAR E A BELEZA DA RIA FORMOSA</span>
              <br />
              <span>DESCUBRA MAIS</span>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
