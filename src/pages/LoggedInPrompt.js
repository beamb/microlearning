import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "../firebase";

//styling
import { StartQuizButton, ProcrastinateButton } from "../styling/Buttons";
import { PromptContainer } from "../styling/Containers";

export const LoggedInPrompt = () => {
  const [counter, setCounter] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    setCounter(1);
  }

  const [user] = useAuthState(firebaseAppAuth);

  const LanguageButton = withRouter(({ history }) => (
    <StartQuizButton
      primary
      type="button"
      onClick={() => {
        history.push("/language");
      }}
    >
      Yes, let's quiz!
    </StartQuizButton>
  ));

  const NoThanksButton = withRouter(({ history }) => (
    <ProcrastinateButton
      type="button"
      onClick={() => {
        history.push("/exit");
      }}
    >
      No thanks
    </ProcrastinateButton>
  ));

  // First pop-up container
  return (
    <PromptContainer>
      <p>Hi {user.displayName}!</p>
      <p>Do you want to answer some questions?</p>
      <div>
        <NoThanksButton />
        <LanguageButton />
      </div>
    </PromptContainer>
  );
};

export default LoggedInPrompt;
