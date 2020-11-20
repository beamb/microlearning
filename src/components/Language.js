import React from "react";
// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import { IconContainer } from "../styling/Containers";
import { LanguageContainer } from "../styling/Containers";

const Language = (props) => {
  const JavaButton = () => (
    <JavaIcon
      size="80"
      type="button"
      onClick={() => {
        props.handleLanguageSelect("java");
      }}
    >
      Java
    </JavaIcon>
  );

  const JSButton = () => (
    <JSIcon
      size="80"
      type="button"
      onClick={() => {
        props.handleLanguageSelect("javascript");
      }}
    >
      JavaScript
    </JSIcon>
  );

  const PythonButton = () => (
    <PythonIcon
      size="80"
      type="button"
      onClick={() => {
        props.handleLanguageSelect("python");
      }}
    >
      Python
    </PythonIcon>
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
