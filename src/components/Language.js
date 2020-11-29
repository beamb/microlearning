import React from "react";
import { Link } from "react-router-dom";
// styling
import { IconContainer } from "../styling/Containers";
import { LanguageContainer } from "../styling/Containers";

const Language = ({ setLanguage }) => {
  const LanguageButton = (props) => {
    var icon = props.language;
    return (
      <Link to="/quiz" style={{ textDecoration: "none", color: "black" }}>
        <img
          alt={icon + " icon"}
          width="85"
          height="85"
          style={{ margin: "1em" }}
          onClick={() => {
            setLanguage(props.language);
          }}
          src={require("../components/images/" + icon + ".svg")}
        />
        <h2>
          {props.language.charAt(0).toUpperCase() + props.language.slice(1)}
        </h2>
      </Link>
    );
  };

  return (
    <LanguageContainer>
      <h1>Which language do you want me to test you in?</h1>
      <IconContainer>
        <LanguageButton language="java" />
        <LanguageButton language="javascript" />
        <LanguageButton language="python" />
      </IconContainer>
    </LanguageContainer>
  );
};

export default Language;
