import React, { useState } from "react";
import IntervalSlider from "./IntervalSlider";
import WebsiteField from "./WebsiteField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const InterruptionSettings = () => {
  const initialState = {
    websites: [
      {
        name: "Netflix",
        URL: "https://www.netflix.com/",
        state: true,
        interval: 15,
      },
      {
        name: "Youtube",
        URL: "https://www.youtube.com/",
        state: true,
        interval: 15,
      },
      {
        name: "Facebook",
        URL: "https://www.facebook.com/",
        state: false,
        interval: 15,
      },
    ],
  };

  const [interval, setInterval] = useState(15);
  const [sharedState, setSharedState] = useState(initialState);

  const changingInterval = () => {
    let intervals = [];
    sharedState.websites.forEach((ws) => {
      if (ws.state) {
        intervals.push(ws.interval);
      }
    });
    if (intervals.length === 0) {
      intervals.push(5);
    }
    let minimum = Math.min.apply(Math, intervals);
    setInterval(minimum);
  };

  const handleInputInterval = (newInterval) => {
    handleAllIntervals(newInterval);
    changingInterval();
  };

  const handleAllIntervals = (newInterval) => {
    if (sharedState.websites.every((w) => w.state)) {
      setInterval(newInterval);
      let websitesCopy = { ...sharedState };
      websitesCopy.websites.forEach((wc) => (wc.interval = newInterval));
      setSharedState(websitesCopy);
    } else {
      setInterval(newInterval);
      let websitesCopy = { ...sharedState };
      websitesCopy.websites.forEach((wc) => {
        if (wc.state) {
          wc.interval = newInterval;
        }
      });
      setSharedState(websitesCopy);
    }
  };

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => (wc.state = checked));
    setSharedState(websitesCopy);
    changingInterval();
  };

  const updateWebsite = (name) => {
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => {
      if (wc.name === name) {
        wc.state = !wc.state;
      }
    });
    setSharedState(websitesCopy);
    changingInterval();
  };

  const toggleCheckboxes = (name) => {
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => {
      if (wc.name !== name) {
        wc.state = false;
      } else {
        wc.state = true;
      }
    });
    setSharedState(websitesCopy);
  };

  const validateInput = (name) => {
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => {
      if (wc.name === name) {
        if (wc.interval < 5) {
          wc.interval = 5;
        } else if (wc.interval > 60) {
          wc.interval = 60;
        }
      }
    });
    setSharedState(websitesCopy);
  };

  return (
    <div>
      <h3>How often can I interrupt your procrastination?</h3>
      <IntervalSlider value={interval} updateInterval={handleAllIntervals} />
      <br />
      <h5>Where do you procrastinate?</h5>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="select all"
          control={
            <Checkbox
              color="primary"
              checked={sharedState.websites.every((w) => w.state)}
              onChange={handleSelectAllChange}
            />
          }
          label="select all"
          labelPlacement="start"
        />
      </FormGroup>

      {sharedState.websites.map((website) => (
        <WebsiteField
          website={website.name}
          value={website.interval}
          checkState={website.state}
          changeCheckState={updateWebsite}
          updateInterval={handleInputInterval}
          disableCheckboxes={toggleCheckboxes}
          validateInput={validateInput}
        />
      ))}
    </div>
  );
};

export default InterruptionSettings;
