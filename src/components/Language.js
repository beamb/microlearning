import React from "react";
import { Link } from "react-router-dom";
// styling
import { IconContainer } from "../styling/Containers";
import { LanguageContainer } from "../styling/Containers";

const Language = ({ setLanguage }) => {
  const LanguageButton = (props) => {
    var icon = props.language;
    return (
      <Link to="/quiz">
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
