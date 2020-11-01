import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "../firebase";

import { BrowserRouter as Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 500px;
  background: lightgrey;
  color: black;
`;

export const LoggedInPrompt = () => {
  const [counter, setCounter] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setCounter(1);
  }

  const LanguageButton = withRouter(({ history }) => (
    <button
      type="button"
      onClick={() => {
        history.push("/language");
      }}
    >
      Yes, let's quiz!
    </button>
  ));

  const NoThanksButton = withRouter(({ history }) => (
    <button
      type="button"
      onClick={() => {
        history.push("/exit");
      }}
    >
      No thanks
    </button>
  ));

  // First pop-up container
  return (
    <Container>
      <p>Hi there!</p>
      <p>Do you want to answer some questions?</p>
      <div>
        <NoThanksButton />
        <LanguageButton />
      </div>
    </Container>
  );
};

export default LoggedInPrompt;
