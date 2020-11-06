import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import Quiz from "./Quiz";

// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import { MainContainer } from "../styling/Containers";

function Language() {
  const [langugage, setLanguage] = useState("");
  console.log(langugage);

  // sets the language in state to java
  function handleJavaClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setLanguage("java");
  }

  // sets the language in state to javascript
  function handleJSClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setLanguage("javascript");
  }

  // sets the language in state to python
  function handlePythonClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setLanguage("python");
  }

  const JavaButton = withRouter(({ history }) => (
    <JavaIcon
      size="80"
      type="button"
      onClick={() => {
        handleJavaClick();
        history.push("/quiz");
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
        handleJSClick();
        history.push("/quiz");
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
        handlePythonClick();
        history.push("/quiz");
      }}
    >
      Python
    </PythonIcon>
  ));

  return (
    <MainContainer>
      <h3>Which language do you prefer?</h3>
      <div>
        <JavaButton />
        <JSButton />
        <PythonButton />
      </div>
    </MainContainer>
  );
}

export default Language;
