import React, { useState } from "react";
import { InterruptionSettings } from "../components/InterruptionSettings";
import { QuizSettings } from "../components/QuizSettings";
import Help from "./Help";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";
import { useStyles, a11yProps, TabPanel } from "../components/TabPanel";
import { SettingsContainer } from "../styling/Containers";
import { BackArrow } from "../styling/Icons";
import { SBButton } from "../styling/Buttons";

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

export const Settings = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const history = useHistory();

  const SaveBackButton = () => (
    <SBButton
      type="button"
      onClick={() => {
        props.update();
        history.goBack();
      }}
    >
      <BackArrow size="30" />
      Save &amp; Back
    </SBButton>
  );

  const handleNumberChange = (number) => {
    props.updateDuration(number);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWebsitesChange = (websites) => {
    props.updateWebsites(websites);
  };

  return (
    <SettingsContainer>
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
            interruption={props.duration}
            setInterruption={handleNumberChange}
          />
          <br />
          <InterruptionSettings
            websitesObject={props.websiteList}
            updateWebsites={handleWebsitesChange}
          />
          <br />
          <small>
            <em>
              Remember to hit{" "}
              <span style={{ color: "#21B6A8" }}>"Save & back"</span> to store
              your changes.
            </em>
          </small>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Help />
        </TabPanel>
      </div>
    </SettingsContainer>
  );
};

export default Settings;
