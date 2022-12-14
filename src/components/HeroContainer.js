import React from "react";

const HeroContainer = ({ textH1, textH3, cssClass }) => {
  return (
    <div className="hero-content">
      <div className="hero-tab">
        <div className={`background-image ${cssClass}`}></div>
        <div className="text-shadow hero-tab-container" data-aos="fade-right">
          <h1 className="header-font">{textH1}</h1>
          <h3 className="subheader-font">{textH3}</h3>
        </div>
        <div className="hero-tab-gradient"></div>
      </div>
    </div>
  );
};

export default HeroContainer;
