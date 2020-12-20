import React, { useState } from "react";
import { InterruptionSettings } from "../components/InterruptionSettings";
import { QuizSettings } from "../components/QuizSettings";
import Help from "../components/Help";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";
import { useStyles, a11yProps, TabPanel } from "../components/TabPanel";
import { SettingsContainer } from "../styling/Containers";
import { BackArrow } from "../styling/Icons";
import { SBButton } from "../styling/Buttons";
import Button from "@material-ui/core/Button";

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

export const Settings = ({
  numberOfQuestions,
  userWebPages,
  setNumberOfQuestions,
  setUserWebPages,
  updateUserSettings,
}) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const history = useHistory();

  const SaveBackButton = () => (
    <SBButton
      type="button"
      onClick={() => {
        updateUserSettings();
        history.goBack();
      }}
    >
      <BackArrow size="30" />
      Save &amp; Back
    </SBButton>
  );

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
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
            numberOfQuestions={numberOfQuestions}
            setNumberOfQuestions={setNumberOfQuestions}
          />
          <br />
          <InterruptionSettings
            userWebPages={userWebPages}
            setUserWebPages={setUserWebPages}
          />
          <br />
          <Button
            variant="outlined"
            color="primary"
            style={{ marginLeft: "27em" }}
            onClick={() => {
              updateUserSettings();
              history.goBack();
            }}
          >
            Save &amp; Back
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Help />
        </TabPanel>
      </div>
    </SettingsContainer>
  );
};

export default Settings;
