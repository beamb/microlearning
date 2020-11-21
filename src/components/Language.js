import React from "react";
import { Link } from "react-router-dom";
// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import { IconContainer } from "../styling/Containers";
import { LanguageContainer } from "../styling/Containers";

const Language = (props) => {
  const JavaButton = () => (
    <Link to="/quiz">
      <JavaIcon
        size="80"
        type="button"
        onClick={() => {
          props.handleLanguageSelect("java");
        }}
      >
        Java
      </JavaIcon>
    </Link>
  );

  const JSButton = () => (
    <Link to="/quiz">
      <JSIcon
        size="80"
        type="button"
        onClick={() => {
          props.handleLanguageSelect("javascript");
        }}
      >
        JavaScript
      </JSIcon>
    </Link>
  );

  const PythonButton = () => (
    <Link to="/quiz">
      <PythonIcon
        size="80"
        type="button"
        onClick={() => {
          props.handleLanguageSelect("python");
        }}
      >
        Python
      </PythonIcon>
    </Link>
  );

  return (
    <LanguageContainer>
      <h1>Which language do you want me to test you in?</h1>
      <br />
      <IconContainer>
        <JavaButton />
        <JSButton />
        <PythonButton />
      </IconContainer>
    </LanguageContainer>
  );
};

export default Language;
