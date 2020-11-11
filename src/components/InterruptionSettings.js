import React, { useState, useEffect, useRef } from "react";
import IntervalSlider from "./IntervalSlider";
import WebsiteField from "./WebsiteField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import WebsiteForm from "./WebsiteForm";

export const InterruptionSettings = (props) => {
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

  const [interval, setInterval] = useState(15);
  const [sharedState, setSharedState] = useState(initialState);
  const [allDisabled, setAllDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [urlInput, setURLInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

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
    setInterval(newInterval);
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => {
      if (wc.state) {
        wc.interval = newInterval;
      }
    });
    setSharedState(websitesCopy);
  };

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => {
      if (!wc.isDisabled) {
        wc.state = checked;
      }
    });
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

  const disableField = (name) => {
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => {
      if (wc.name === name) {
        if (wc.isDisabled) {
          wc.state = true;
        } else {
          wc.state = false;
        }
        wc.isDisabled = !wc.isDisabled;
      }
    });
    setSharedState(websitesCopy);
    disableSlider();
  };

  const disableSlider = () => {
    if (
      sharedState.websites.every((w) => w.isDisabled) ||
      sharedState.websites.length === 0
    ) {
      setAllDisabled(true);
    } else {
      setAllDisabled(false);
    }
  };

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevLoading = usePrevious(isLoading);

  useEffect(() => {
    if (!prevLoading && isLoading) {
      disableSlider();
      setIsLoading(false);
    }
  }, [isLoading]);

  const deleteWebsite = (name) => {
    let websitesCopy = { ...sharedState };
    let newWebsites = websitesCopy.websites.filter((wc) => wc.name !== name);
    websitesCopy.websites = newWebsites;
    setSharedState(websitesCopy);
    setIsLoading(true);
  };

  const addWebsite = () => {
    if (
      sharedState.websites.some(
        (ws) => ws.name === nameInput || ws.URL === urlInput
      )
    ) {
      alert("A website with the same name/URL is already stored.");
    } else {
      let newWebsite = {
        name: nameInput,
        URL: urlInput,
        state: true,
        interval: 15,
        isDisabled: false,
      };
      let websitesCopy = { ...sharedState };
      websitesCopy.websites.push(newWebsite);
      setSharedState(websitesCopy);
    }
    setNameInput("");
    setURLInput("");
  };

  /* Once we start using the database, this should be called directly in Navigation.js 
  together with the name/URL check. Not only in InterruptionSettings.js */
  const addWebsiteFromBrowser = () => {
    let newWebsite = {
      name: props.title,
      URL: props.url,
      state: true,
      interval: 15,
      isDisabled: false,
    };
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.push(newWebsite);
    setSharedState(websitesCopy);
  };

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleURLInput = (event) => {
    setURLInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWebsite();
    toggleClick();
  };

  const toggleClick = () => {
    setIsClicked(!isClicked);
    addWebsiteFromBrowser();
  };

  return (
    <div>
      <h4>How often can I interrupt your procrastination?</h4>
      <IntervalSlider
        value={interval}
        updateInterval={handleAllIntervals}
        disable={allDisabled}
      />
      <br />
      <h5>Where do you procrastinate?</h5>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="select all"
          control={
            <Checkbox
              color="primary"
              checked={sharedState.websites.every(
                (w) => w.state || w.isDisabled
              )}
              onChange={handleSelectAllChange}
              disabled={allDisabled}
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
          disable={disableField}
          status={website.isDisabled}
          delete={deleteWebsite}
        />
      ))}
      <WebsiteForm
        submit={handleSubmit}
        url={urlInput}
        changeURL={handleURLInput}
        name={nameInput}
        changeName={handleNameInput}
        clicked={isClicked}
        changeClick={toggleClick}
      />
    </div>
  );
};

export default InterruptionSettings;
