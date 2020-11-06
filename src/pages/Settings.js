import React, { useState } from "react";
import { InterruptionSettings } from "../components/InterruptionSettings";
import { QuizSettings } from "../components/QuizSettings";
import Help from "./Help";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { firebaseAppAuth } from "../firebase";

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

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export const Settings = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignOut = () => firebaseAppAuth.signOut();

  return (
    <Container>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
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
          <QuizSettings />
          <br />
          <InterruptionSettings/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Help />
        </TabPanel>
      </div>
    </Container>
  );
};

export default Settings;
