import React from "react";

import { useLocation, Link } from "react-router-dom";
import { firebaseAppAuth } from "../firebase";
import Button from "@material-ui/core/Button";
// styling
import { NavContainer, SettingsNavContainer } from "../styling/Containers";
import { SettingsWheel, CloseCross } from "../styling/Icons";

export const Navigation = () => {
  const location = useLocation();

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
