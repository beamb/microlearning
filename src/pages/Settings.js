import React, { useState, useEffect } from "react";
import { InterruptionSettings } from "../components/InterruptionSettings";
import { QuizSettings } from "../components/QuizSettings";
import Help from "./Help";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";
import { useStyles, a11yProps, TabPanel } from "../components/TabPanel";
import { ArrowBackOutline } from "@styled-icons/evaicons-outline";
import { firebaseAppAuth, database } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Container = styled.div`
  text-align: left;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 700px;
  background: white;
  color: black;
`;

const BackArrow = styled(ArrowBackOutline)`
  color: black;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: black;
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;
  font-family: "Lato", sans-serif;
`;

const styles = {
  tab: {
    padding: "0.25em 1em",
    fontSize: "x-large",
    height: "3em",
  },
  tabItemContainer: {
    background: "none",
  },
};

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
  const [settings, setSettings] = useState([]);
  const [userName] = useAuthState(firebaseAppAuth);

  const buttonName = "Save & Back";
  const history = useHistory();

  const initialSettings = {
    name: userName.displayName,
    questionNumber: interruption,
    webPages: listOfWebsites,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await database.collection("users").get();
    setSettings(data.docs.map((snapshot) => snapshot.data()));
  };

  const updateSettings = () => {
    const data = database
      .collection("users")
      .doc(userName.uid)
      .set({ ...data, initialSettings });
  };

  const checkData = () => {};

  const SaveBackButton = () => (
    <Button
      type="button"
      onClick={() => {
        history.goBack();
        console.log(interruption);
        console.log(listOfWebsites);
        console.log(listOfWebsites.websites);
      }}
    >
      <BackArrow size="30" />
      {buttonName}
    </Button>
  );

  const handleNumberChange = (number) => {
    setInterruption(number);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWebsitesChange = (websites) => {
    setListOfWebsites(websites);
  };

  return (
    <Container>
      <SaveBackButton />
      <div className={classes.root}>
        <Tabs
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleTabChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          textColor="primary"
        >
          <Tab style={styles.tab} label="Settings" {...a11yProps(0)} />
          <Tab style={styles.tab} label="Help ?" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <QuizSettings
            interruption={interruption}
            setInterruption={handleNumberChange}
          />
          <br />
          <InterruptionSettings
            websitesObject={listOfWebsites}
            updateWebsites={handleWebsitesChange}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Help />
        </TabPanel>
      </div>
    </Container>
  );
};

export default Settings;
