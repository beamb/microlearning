import React from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation, withRouter } from "react-router-dom";

export const Navigation = () => {
  const buttonName = "Save & Back";

  const location = useLocation();

  const SaveBackButton = withRouter(({ history }) => (
    <button type="button" onClick={() => history.goBack()}>
      {buttonName}
    </button>
  ));

  const SettingsButton = withRouter(({ history }) => (
    <button type="button" onClick={() => history.push("/settings")}>
      Settings
    </button>
  ));

  const ExitButton = () => (
    <button type="button" onClick={() => window.close()}>
      x
    </button>
  );

  const HelpButton = withRouter(({ history }) => (
    <button type="button" onClick={() => history.push("/help")}>
      ?
    </button>
  ));

  const BackButton = withRouter(({ history }) => (
    <button type="button" onClick={() => history.goBack()}>
      back
    </button>
  ));

  if (location.pathname === "/settings") {
    return (
      <Nav className="flex-row">
        <SaveBackButton />
        <HelpButton />
        <ExitButton />
        <BackButton />
      </Nav>
    );
  } else {
    return (
      <Nav className="ml-auto">
        <SettingsButton />
        <HelpButton />
        <ExitButton />
        <BackButton />
      </Nav>
    );
  }
};

export default Navigation;
