import React from "react";
import { useLocation, Link } from "react-router-dom";
import { firebaseAppAuth } from "../firebase";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
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

  const QuizSettingsButton = () => (
    <Link to="/settings">
      <Tooltip title="Your current progress will be lost!" arrow>
        <SettingsWheel size="30" type="button">
          Settings
        </SettingsWheel>
      </Tooltip>
    </Link>
  );

  const QuizExitButton = () => (
    <Tooltip title="Your current progress will be lost!" arrow>
      <CloseCross size="30" type="button" onClick={() => window.close()}>
        x
      </CloseCross>
    </Tooltip>
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

  const ChangeLanguageButton = () => (
    <Link to="/language" style={{ textDecoration: "none" }}>
      <Tooltip title="Your current progress will be lost!" arrow>
        <Button variant="outlined" style={{ padding: "2px 15px" }}>
          Change language
        </Button>
      </Tooltip>
    </Link>
  );

  if (location.pathname === "/settings") {
    return (
      <SettingsNavContainer>
        <SignOutButton />
        <ExitButton />
      </SettingsNavContainer>
    );
  } else if (location.pathname === "/quiz") {
    return (
      <NavContainer>
        <QuizSettingsButton />
        <ChangeLanguageButton />
        <QuizExitButton />
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
