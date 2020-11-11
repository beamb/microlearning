import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import LanguageDataContainer from "./LanguageDataContainer";

// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import {
  MainContainer,
  LanguageContainer,
  IconContainer,
} from "../styling/Containers";

function Language(props) {
  // const [language, setLanguage] = useState("");
  // console.log(language);

  // function handleLanguageSelect(selected) {
  //   console.log(`The link was clicked for "${selected}"`);
  //   setLanguage(selected);
  // }

  const JavaButton = withRouter(({ history }) => (
    <JavaIcon
      size="80"
      type="button"
      onClick={() => {
        props.handleLanguageSelect("java");
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
        props.handleLanguageSelect("javascript");
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
        props.handleLanguageSelect("python");
        history.push("/quiz");
      }}
    >
      Python
    </PythonIcon>
  ));

  return (
    <MainContainer>
      <LanguageContainer>
        <p>Which language do you want me to test you in?</p>
        <IconContainer>
          <JavaButton />
          <JSButton />
          <PythonButton />
        </IconContainer>
      </LanguageContainer>
    </MainContainer>
  );
}

export default Language;
