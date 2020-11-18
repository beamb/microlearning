import React from "react";
import styled from "styled-components";
import { Settings } from "@styled-icons/feather/Settings";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { useLocation, useHistory, Link } from "react-router-dom";
import { firebaseAppAuth } from "../firebase";

// Style
const NavContainer = styled.div`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: white;
  color: black;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const SettingsWheel = styled(Settings)`
  color: grey;
  cursor: pointer;
  margin: 0.5rem 1rem;
`;

const CloseCross = styled(Close)`
  color: grey;
  cursor: pointer;
  margin: 0.5rem 1rem;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  border: 2px solid grey;
`;

export const Navigation = () => {
  const location = useLocation();
  const history = useHistory();

  const SettingsButton = () => (
    <Link to="/settings">
      <SettingsWheel size="30" type="button">
        Settings
      </SettingsWheel>
    </Link>
  );

  const ExitButton = () => (
    <CloseCross size="30" type="button" onClick={() => window.close()}>
      x
    </CloseCross>
  );

  const BackButton = () => (
    <Button type="button" onClick={() => history.goBack()}>
      Back
    </Button>
  );

  const SignOutButton = () => (
    <Button type="button" onClick={() => firebaseAppAuth.signOut()}>
      Sign out
    </Button>
  );

  if (location.pathname === "/settings") {
    return (
      <NavContainer>
        <SignOutButton />
        <ExitButton />
      </NavContainer>
    );
  } else {
    return (
      <NavContainer>
        <SettingsButton />
        <ExitButton />
      </NavContainer>
    );
  }
};

export default Navigation;
