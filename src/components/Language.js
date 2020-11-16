import React from "react";
import { withRouter } from "react-router-dom";

// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import { IconContainer } from "../styling/Containers";

function Language(props) {
  const JavaButton = withRouter(({ history }) => (
    <JavaIcon
      size="80"
      type="button"
      onClick={() => {
        props.handleLanguageSelect("java");
      }}
    >
      Java
    </JavaIcon>
  ));

  const JSButton = withRouter(({ history }) => (
    <JSIcon
      size="80"
      type="button"
      onClick={() => {
        props.handleLanguageSelect("javascript");
      }}
    >
      JavaScript
    </JSIcon>
  ));

  const PythonButton = withRouter(({ history }) => (
    <PythonIcon
      size="80"
      type="button"
      onClick={() => {
        props.handleLanguageSelect("python");
      }}
    >
      Python
    </PythonIcon>
  ));

  return (
    <IconContainer>
      <JavaButton />
      <JSButton />
      <PythonButton />
    </IconContainer>
  );
}

export default Language;
