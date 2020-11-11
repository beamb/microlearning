import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// styling
import { JavaIcon, PythonIcon, JSIcon } from "../styling/Icons";
import { IconContainer } from "../styling/Containers";

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
      value="java"
      onClick={this.props.handleOnChange}
    >
      Java
    </JavaIcon>
  ));

  const JSButton = withRouter(({ history }) => (
    <JSIcon
      size="80"
      type="button"
      value="javascript"
      onClick={this.props.handleOnChange}
      // history.push("/quiz");
    >
      JavaScript
    </JSIcon>
  ));

  const PythonButton = withRouter(({ history }) => (
    <PythonIcon
      size="80"
      type="button"
      value="python"
      onClick={this.props.handleOnChange}
      // history.push("/quiz");
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
