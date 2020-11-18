import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Java } from "@styled-icons/fa-brands/Java";
import { Python } from "@styled-icons/simple-icons/Python";
import Quiz from "./Quiz";

//Style
const Container = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 4rem;
  background: white;
  color: black;
  text-align: center;
  width: 500px;
  height: 400px;
`;

const JavaIcon = styled(Java)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
`;

const PythonIcon = styled(Python)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
`;

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

  // const JSButton = withRouter(({ history }) => (
  //   <button
  //     type="button"
  //     onClick={() => {
  //       handleJSClick();
  //       history.push("/quiz");
  //     }}
  //   >
  //     JavaScript
  //   </button>
  // ));

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
    <Container>
      <h3>Which language do you prefer?</h3>
      <div>
        <JavaButton />
        {/* <JSButton /> */}
        <PythonButton />
      </div>
    </Container>
  );
}

export default Language;
