import React, { useEffect } from "react";
import discoverFuseta from "../../assets/discover-fuseta.png";
import SideContent from "../../components/side-content/SideContent";
import "./index.css";
import image1 from "../../assets/aereo-delicioso-por-do-sol-sobre-a-vila-portuguesa-da-fuzeta-tavira_170896-1670 1.png";
import ReverseSideContent from "../../components/reverse-side-content/ReverseSideContent";
import Footer from "../../components/footer/Footer";
import ResponsiveAppBar from "../../components/Menu";

const DiscoverFuseta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ResponsiveAppBar />
      <div className="container-position-relative">
        <img src={discoverFuseta} width="100%" />
        <div className="container-position-absolute header-position">
          <h1 className="header-font">Descobrir a Fuzeta</h1>
          <h3 className="subheader-font helper-text">
            Siga o nosso guia para desfrutar ao máximo da Fuzeta
          </h3>
        </div>
      </div>
      <SideContent
        titleText="Conheça a Vila da Fuseta"
        titleDescription="A vila da Branca Noiva do Mar"
        textOne="Tipica pelas suas casas de forma cúbica e com açoteia (terraço), com quilometros de areal que se extende pela ria formosa adentro esta vila piscatória tem toda a tranquilidade que procura para as suas férias."
        textTwo="Com um mar cheio de cores vivas devido à grande afluência de barcos de pescadores ao peixe mais fresco que é servido na restauração."
        textThree="Se procura um destino balnear a Fuzeta oferece a praia e ilha, com atividades que não acabam. Com canoagem, kitesurf, windsurf, padel. Passeios para ver os golfinhos, ver a fauna da ria formosa e a vida maritima que ela oferece."
        textFour="Reconhecida por ser as Maldivas do Algarve, esta terra piscatória tem o melhor do que a terra e o mar podem oferecer. "
        imageUrl={image1}
      />
      <div className="py-5">
        <ReverseSideContent
          titleText="Conheça a Vila da Fuseta"
          titleDescription="A vila da Branca Noiva do Mar"
          textOne="Tipica pelas suas casas de forma cúbica e com açoteia (terraço), com quilometros de areal que se extende pela ria formosa adentro esta vila piscatória tem toda a tranquilidade que procura para as suas férias."
          textTwo="Com um mar cheio de cores vivas devido à grande afluência de barcos de pescadores ao peixe mais fresco que é servido na restauração."
          textThree="Se procura um destino balnear a Fuzeta oferece a praia e ilha, com atividades que não acabam. Com canoagem, kitesurf, windsurf, padel. Passeios para ver os golfinhos, ver a fauna da ria formosa e a vida maritima que ela oferece."
          textFour="Reconhecida por ser as Maldivas do Algarve, esta terra piscatória tem o melhor do que a terra e o mar podem oferecer. "
          imageUrl={image1}
        />
      </div>
      <div className="py-5">
        <SideContent
          titleText="Conheça a Vila da Fuseta"
          titleDescription="A vila da Branca Noiva do Mar"
          textOne="Tipica pelas suas casas de forma cúbica e com açoteia (terraço), com quilometros de areal que se extende pela ria formosa adentro esta vila piscatória tem toda a tranquilidade que procura para as suas férias."
          textTwo="Com um mar cheio de cores vivas devido à grande afluência de barcos de pescadores ao peixe mais fresco que é servido na restauração."
          textThree="Se procura um destino balnear a Fuzeta oferece a praia e ilha, com atividades que não acabam. Com canoagem, kitesurf, windsurf, padel. Passeios para ver os golfinhos, ver a fauna da ria formosa e a vida maritima que ela oferece."
          textFour="Reconhecida por ser as Maldivas do Algarve, esta terra piscatória tem o melhor do que a terra e o mar podem oferecer. "
          imageUrl={image1}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DiscoverFuseta;
