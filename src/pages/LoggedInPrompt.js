import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "../firebase";

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
  const [user] = useAuthState(firebaseAppAuth);

  const LanguageButton = () => (
    <Link to="/language">
      <Button primary type="button">
        Yes, let's quiz!
      </Button>
    </Link>
  );

  const NoThanksButton = () => (
    <Button
      type="button"
      onClick={() => {
        window.close();
      }}
    >
      No thanks
    </Button>
  );

  // First pop-up container
  return (
    <Container>
      <p>Hi {user.displayName}!</p>
      <p>Do you want to answer some questions?</p>
      <div>
        <NoThanksButton />
        <LanguageButton />
      </div>
    </Container>
  );
};

export default LoggedInPrompt;
