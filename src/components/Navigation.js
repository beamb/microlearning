/* global chrome */
import React, { useState } from "react";
import styled from "styled-components";
import { Settings } from "@styled-icons/feather/Settings";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { useLocation, useHistory, Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Navigation = (props) => {
  const buttonName = "Save & Back";
  const location = useLocation();
  const history = useHistory();

  const [it, setIt] = useState("");
  const [openSuccessMessage, setOpenSuccessMessage] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccessMessage(false);
  };

  const getCurrentTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let title = tabs[0].title;
      let url = tabs[0].url;
      setIt(title);
      props.setTitle(title);
      props.setURL(url);
    });
  };

  const AddButton = () => (
    <Button
      type="button"
      onClick={() => {
        getCurrentTab();
        setOpenSuccessMessage(true);
      }}
    >
      Add current URL to my list
    </Button>
  );

  const SaveBackButton = () => (
    <Button type="button" onClick={() => history.goBack()}>
      {buttonName}
    </Button>
  );

  const SettingsButton = () => (
    <Link to="/settings">
      <SettingsWeel size="30" type="button">
        Settings
      </SettingsWeel>
    </Link>
  );

  const ExitButton = () => (
    <CloseCross size="30" type="button" onClick={() => window.close()}>
      x
    </CloseCross>
  );

  const BackButton = () => (
    <Button type="button" onClick={() => history.goBack()}>
      back
    </Button>
  );

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
        <AddButton />
        <Snackbar
          open={openSuccessMessage}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            {it} has been added!
          </Alert>
        </Snackbar>
        <BackButton />
        <ExitButton />
      </NavContainer>
    );
  }
};

export default Navigation;
