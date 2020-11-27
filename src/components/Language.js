import React from "react";
import { Link } from "react-router-dom";
// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import { IconContainer } from "../styling/Containers";
import { LanguageContainer } from "../styling/Containers";

const Language = ({ setLanguage }) => {
  const LanguageButton = (props) => {
    if (props.language === "java") {
      return (
        <Link to="/quiz">
          <JavaIcon
            size="80"
            type="button"
            onClick={() => {
              setLanguage(props.language);
            }}
          />
        </Link>
      );
    } else if (props.language === "javascript") {
      return (
        <Link to="/quiz">
          <JSIcon
            size="80"
            type="button"
            onClick={() => {
              setLanguage(props.language);
            }}
          />
        </Link>
      );
    } else {
      return (
        <Link to="/quiz">
          <PythonIcon
            size="80"
            type="button"
            onClick={() => {
              setLanguage(props.language);
            }}
          />
        </Link>
      );
    }
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
