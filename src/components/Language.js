import React from "react";
// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import { IconContainer } from "../styling/Containers";

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
    <IconContainer>
      <JavaButton />
      <JSButton />
      <PythonButton />
    </IconContainer>
  );
};

export default Language;
