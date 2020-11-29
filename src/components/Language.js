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
          //type="image"
          width="85"
          height="85"
          onClick={() => {
            setLanguage(props.language);
          }}
          src={require("../images/" + icon + ".svg")}
        />
      </Link>
    );
  };

  return (
    <LanguageContainer>
      <h1>Which language do you want me to test you in?</h1>
      <br />
      <IconContainer>
        <LanguageButton language="java" />
        <LanguageButton language="javascript" />
        <LanguageButton language="python" />
      </IconContainer>
    </LanguageContainer>
  );
};

export default Language;
