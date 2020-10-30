import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "../firebase";

import ExitButton from "../components/Buttons/ExitButton";
import StartQuizButton from "../components/Buttons/StartQuizButton";
import styled from "styled-components";
import Popup from "reactjs-popup";

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

  // First pop-up container
  return (
    <Container>
      <p>Hi there!</p>
      <p>Do you want to answer some questions?</p>
      <div>
        <ExitButton />
        <StartQuizButton />
      </div>
    </Container>
  );
};

export default LoggedInPrompt;
