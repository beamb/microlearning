import React, { useState } from "react";
import { InterruptionSettings } from "../components/InterruptionSettings";
import { QuizSettings } from "../components/QuizSettings";
import Help from "./Help";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { firebaseAppAuth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useStyles, a11yProps, TabPanel } from "../components/TabPanel";

const Container = styled.div`
  text-align: left;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 700px;
  background: white;
  color: black;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export const Settings = () => {
  const classes = useStyles();

  const initialState = {
    websites: [
      {
        name: "Netflix",
        URL: "https://www.netflix.com/",
        state: true,
        interval: 15,
        isDisabled: false,
      },
      {
        name: "Youtube",
        URL: "https://www.youtube.com/",
        state: true,
        interval: 15,
        isDisabled: false,
      },
      {
        name: "Facebook",
        URL: "https://www.facebook.com/",
        state: false,
        interval: 15,
        isDisabled: false,
      },
    ],
  };

  const [value, setValue] = useState(0);
  const [interruption, setInterruption] = useState(5);
  const [listOfWebsites, setListOfWebsites] = useState(initialState);

  const buttonName = "Save & Back";
  const history = useHistory();

  const SaveBackButton = () => (
    <Button
      type="button"
      onClick={() => {
        history.goBack();
        console.log(interruption);
        console.log(listOfWebsites.websites);
      }}
    >
      {buttonName}
    </Button>
  );

  const handleNumberChange = (number) => {
    setInterruption(number);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignOut = () => firebaseAppAuth.signOut();

  const handleWebsitesChange = (websites) => {
    setListOfWebsites(websites);
  };

  return (
    <Container>
      <SaveBackButton />
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleTabChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Settings" {...a11yProps(0)} />
          <Tab label="Help ?" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Button type="button" onClick={handleSignOut}>
            Sign out
          </Button>
          <br />
          <QuizSettings setInterruption={handleNumberChange} />
          <br />
          <InterruptionSettings updateWebsites={handleWebsitesChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Help />
        </TabPanel>
      </div>
    </Container>
  );
};

export default Settings;
