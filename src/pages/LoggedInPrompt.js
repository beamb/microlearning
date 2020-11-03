import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "../firebase";

import { BrowserRouter as Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 500px;
  background: white;
  color: black;
`;

const Button = styled.button`
  background: rgba(226, 232, 240, 1);
  border: none;
  border-radius: 3px;
  color: rgba(45, 55, 72, 1);
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: rgba(33, 182, 168, 1);
      color: white;
    `}
`;

export const LoggedInPrompt = () => {
  const [counter, setCounter] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setCounter(1);
  }

  const LanguageButton = withRouter(({ history }) => (
    <Button
      primary
      type="button"
      onClick={() => {
        history.push("/language");
      }}
    >
      Yes, let's quiz!
    </Button>
  ));

  const NoThanksButton = withRouter(({ history }) => (
    <Button
      type="button"
      onClick={() => {
        history.push("/exit");
      }}
    >
      No thanks
    </Button>
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
