import React from "react";
import styled from "styled-components";
import { Settings } from "@styled-icons/feather/Settings";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { useLocation, useHistory, Link } from "react-router-dom";
import { firebaseAppAuth } from "../firebase";
import Button from "@material-ui/core/Button";

// Style
const NavContainer = styled.div`
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: white;
  color: black;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const SettingsNavContainer = styled.div`
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: white;
  color: black;
  text-align: right;
  display: flex;
  justify-content: flex-end;
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

  const SignOutButton = () => (
    <Button
      disableElevation
      variant="contained"
      color="secondary"
      onClick={() => firebaseAppAuth.signOut()}
    >
      Sign out
    </Button>
  );

  if (location.pathname === "/settings") {
    return (
      <SettingsNavContainer>
        <SignOutButton />
        <ExitButton />
      </SettingsNavContainer>
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
