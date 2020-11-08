import React, { useState } from "react";
import IntervalSlider from "./IntervalSlider";
import WebsiteField from "./WebsiteField";
import SelectAllCheckbox from "./SelectAllCheckbox";

export const InterruptionSettings = () => {
  const [interval, setInterval] = useState(15);

  const handleEventChange = (event) => {
    setInterval(event);
  };

  const [selectAllState, setSelectAllState] = useState(true);

  const initialState = {
    websites: [
      { name: "Netflix", URL: "https://www.netflix.com/", state: true },
      { name: "Youtube", URL: "https://www.youtube.com/", state: true },
      { name: "Facebook", URL: "https://www.facebook.com/", state: false },
    ],
  };

  const [sharedState, setSharedState] = useState(initialState);

  const handleCheckboxChange = () => {
    setSelectAllState(!selectAllState);
    updateAllWebsites(!selectAllState);
  };

  const updateAllWebsites = (newState) => {
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => (wc.state = newState));
    setSharedState(websitesCopy);
  };

  const updateWebsite = (name) => {
    let websitesCopy = { ...sharedState };
    websitesCopy.websites.forEach((wc) => {
      if (wc.name === name) {
        wc.state = !wc.state;
      }
    });
    setSharedState(websitesCopy);
  };

  return (
    <div>
      <h3>How often can I interrupt your procrastination?</h3>
      <IntervalSlider value={interval} updateInterval={handleEventChange} />
      <br />
      <SelectAllCheckbox
        state={selectAllState}
        checkState={handleCheckboxChange}
      />
      <h5>Where do you procrastinate?</h5>

      {sharedState.websites.map((website) => (
        <WebsiteField
          website={website.name}
          value={interval}
          checkState={website.state}
          changeCheckState={updateWebsite}
        />
      ))}
    </div>
  );
};

export default InterruptionSettings;
