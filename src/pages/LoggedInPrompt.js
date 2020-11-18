import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "../firebase";
//styling
import { StartQuizButton, ProcrastinateButton } from "../styling/Buttons";
import { PromptContainer } from "../styling/Containers";

export const LoggedInPrompt = () => {
  const [user] = useAuthState(firebaseAppAuth);

  const LanguageButton = () => (
    <Link to="/language">
      <StartQuizButton primary type="button">
        Yes, let's quiz!
      </StartQuizButton>
    </Link>
  );

  const NoThanksButton = () => (
    <ProcrastinateButton
      type="button"
      onClick={() => {
        window.close();
      }}
    >
      No thanks
    </ProcrastinateButton>
  );

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
