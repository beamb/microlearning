import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import Quiz from "./Quiz";

function Language() {
  const [langugage, setLanguage] = useState("");
  console.log(langugage);

  // sets the language in state to java
  function handleJavaClick(e) {
    // e.preventDefault();
    console.log("The link was clicked.");
    setLanguage("java");
  }

  // sets the language in state to javascript
  function handleJSClick(e) {
    // e.preventDefault();
    console.log("The link was clicked.");
    setLanguage("javascript");
  }

  // sets the language in state to python
  function handlePythonClick(e) {
    // e.preventDefault();
    console.log("The link was clicked.");
    setLanguage("python");
  }

  const JavaButton = withRouter(({ history }) => (
    <button
      type="button"
      onClick={() => {
        handleJavaClick();
        history.push("/quiz");
      }}
    >
      Java
    </button>
  ));

  const JSButton = withRouter(({ history }) => (
    <button
      type="button"
      onClick={() => {
        handleJSClick();
        history.push("/quiz");
      }}
    >
      JavaScript
    </button>
  ));

  const PythonButton = withRouter(({ history }) => (
    <button
      type="button"
      onClick={() => {
        handlePythonClick();
        history.push("/quiz");
      }}
    >
      Python
    </button>
  ));

  return (
    <div>
      <p>Which language do you prefer?</p>
      <JavaButton />
      <JSButton />
      <PythonButton />
    </div>
  );
}

export default Language;
