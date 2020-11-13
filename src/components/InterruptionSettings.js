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
  const [urlInput, setURLInput] = useState("https://");
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
    props.updateWebsites(websitesCopy);
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
    props.updateWebsites(websitesCopy);
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
    props.updateWebsites(websitesCopy);
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
    props.updateWebsites(websitesCopy);
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
    props.updateWebsites(websitesCopy);
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
    props.updateWebsites(websitesCopy);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const deleteWebsite = (name) => {
    let websitesCopy = { ...sharedState };
    let newWebsites = websitesCopy.websites.filter((wc) => wc.name !== name);
    websitesCopy.websites = newWebsites;
    setSharedState(websitesCopy);
    props.updateWebsites(websitesCopy);
    setIsLoading(true);
  };

  const addWebsite = () => {
    if (
      sharedState.websites.some(
        (ws) => ws.name === nameInput || ws.URL === urlInput
      )
    ) {
      alert("This name/URL has already been stored");
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
      props.updateWebsites(websitesCopy);
    }
    setNameInput("");
    setURLInput("https://");
  };

  const options = {
    sites: [
      {
        name: "Disney+",
        URL: "https://www.disneyplus.com/",
      },
      {
        name: "Facebook",
        URL: "https://www.facebook.com/",
      },
      {
        name: "HBO Nordic",
        URL: "https://dk.hbonordic.com/",
      },
      {
        name: "Instagram",
        URL: "https://www.instagram.com/",
      },
      {
        name: "LinkedIn",
        URL: "https://www.linkedin.com/",
      },
      {
        name: "Netflix",
        URL: "https://www.netflix.com/",
      },
      {
        name: "Twitter",
        URL: "https://twitter.com/",
      },
      {
        name: "Youtube",
        URL: "https://www.youtube.com/",
      },
    ],
  };

  const addWebsiteFromName = (name) => {
    options.sites.forEach((o) => {
      if (o.name === name) {
        if (
          sharedState.websites.some(
            (ws) => ws.name === o.name || ws.URL === o.URL
          )
        ) {
          alert("This name/URL has already been stored");
        } else {
          let newWebsite = {
            name: o.name,
            URL: o.URL,
            state: true,
            interval: 15,
            isDisabled: false,
          };
          let websitesCopy = { ...sharedState };
          websitesCopy.websites.push(newWebsite);
          setSharedState(websitesCopy);
          props.updateWebsites(websitesCopy);
        }
      }
    });
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
        addNewWebsite={addWebsite}
        addSiteFromName={addWebsiteFromName}
      />
    </div>
  );
};

export default InterruptionSettings;
