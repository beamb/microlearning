import React from "react";
import styled, { css } from "styled-components";
import { Settings } from "@styled-icons/feather/Settings";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { useLocation, withRouter } from "react-router-dom";

// Style
const NavContainer = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: white;
  color: black;
  text-align: center;
`;

const SettingsWeel = styled(Settings)`
  color: grey;
`;

const CloseCross = styled(Close)`
  color: grey;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export const Navigation = () => {
  const buttonName = "Save & Back";

  const location = useLocation();

  const SaveBackButton = withRouter(({ history }) => (
    <Button type="button" onClick={() => history.goBack()}>
      {buttonName}
    </Button>
  ));

  const SettingsButton = withRouter(({ history }) => (
    <SettingsWeel size="30" type="button" onClick={() => history.push("/settings")}>
      Settings
    </SettingsWeel>
  ));

  const ExitButton = () => (
    <CloseCross size="30" type="button" onClick={() => window.close()}>
      x
    </CloseCross>
  );

  const BackButton = withRouter(({ history }) => (
    <Button type="button" onClick={() => history.goBack()}>
      back
    </Button>
  ));

  if (location.pathname === "/settings") {
    return (
      <NavContainer>
        <SaveBackButton />
        <BackButton />
        <ExitButton />
      </NavContainer>
    );
  } else {
    return (
      <NavContainer>
        <SettingsButton />
        <BackButton />
        <ExitButton />
      </NavContainer>
    );
  }
};

export default Navigation;
