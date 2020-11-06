import React, { useState } from "react";
import IntervalSlider from "./IntervalSlider";
import WebsiteField from "./WebsiteField";

export const InterruptionSettings = () => {
  const [interval, setInterval] = useState(15);

  const handleEventChange = (event) => {
    setInterval(event);
  };

  return (
    <div>
      <h3>How often can I interrupt your procrastination?</h3>
      <IntervalSlider value={interval} updateInterval={handleEventChange} />
      <br />
      <h5>Where do you procrastinate?</h5>
      <WebsiteField website="Netflix" value={interval} />
      <br />
      <WebsiteField website="Youtube" value={interval} />
      <br />
      <WebsiteField website="Facebook" value={interval} />
    </div>
  );
};

export default InterruptionSettings;
