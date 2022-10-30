import { Container } from "@mui/material";
import React from "react";
import "./index.css";

const SideContent = ({
  titleText,
  titleDescription,
  textOne,
  textTwo,
  textThree,
  textFour,
  imageUrl,
}) => {
  return (
    <div className="my-5 side-content">
      <Container>
        <div className="inside-content">
          <div className="py-5" style={{ width: "50%" }}>
            <h3 style={{ textTransform: "uppercase" }}>{titleText}</h3>
            <div
              className="primary-text-color"
              style={{ textTransform: "uppercase" }}
            >
              {titleDescription}
            </div>

            <div className="py-3">
              {textOne !== null && <p>{textOne}</p>}
              {textTwo !== null && <p>{textTwo}</p>}
              {textThree !== null && <p>{textThree}</p>}
              {textFour !== null && <p>{textFour}</p>}
            </div>
          </div>

          <div className="py-5 px-3" style={{ width: "50%" }}>
            <img src={imageUrl} alt="towel" width="100%" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SideContent;
