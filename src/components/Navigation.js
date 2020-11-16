import React from "react";
import { useLocation, withRouter } from "react-router-dom";
import { firebaseAppAuth } from "../firebase";

// styling
import { QuizButton } from "../styling/Buttons";
import { NavContainer } from "../styling/Containers";
import { SettingsWheel, CloseCross } from "../styling/Icons";

export const Navigation = () => {
  const location = useLocation();

  const handleSignOut = () => firebaseAppAuth.signOut();

  const SaveBackButton = withRouter(({ history }) => (
    <QuizButton type="button" onClick={() => history.goBack()}>
      Save &amp; Back
    </QuizButton>
  ));

  const SettingsButton = withRouter(({ history }) => (
    <SettingsWheel
      size="30"
      type="button"
      onClick={() => history.push("/settings")}
    >
      Settings
    </SettingsWheel>
  ));

  const ExitButton = () => (
    <CloseCross size="30" type="button" onClick={() => window.close()}>
      x
    </CloseCross>
  );

  const HelpButton = withRouter(({ history }) => (
    <QuizButton type="button" onClick={() => history.push("/help")}>
      ?
    </QuizButton>
  ));

  const BackButton = withRouter(({ history }) => (
    <QuizButton type="button" onClick={() => history.goBack()}>
      back
    </QuizButton>
  ));

  const SignOutButton = () => (
    <QuizButton type="button" onClick={handleSignOut}>
      Sign out
    </QuizButton>
  );

  if (location.pathname === "/settings") {
    return (
      <NavContainer>
        <SaveBackButton />
        <HelpButton />
        <ExitButton />
        <BackButton />
        <SignOutButton />
      </NavContainer>
    );
  } else {
    return (
      <NavContainer>
        <SettingsButton />
        <HelpButton />
        <ExitButton />
        <BackButton />
        <SignOutButton />
      </NavContainer>
    );
  }
};

export default Navigation;
