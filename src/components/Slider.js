import React, { useState } from "react";
import ReactBootstrapSlider from "react-bootstrap-slider";
import './Slider.css';

const Slider = ({ initialInterval, minInterval, maxInterval }) => {
    const [timerInterval, setTimerInterval] = useState(initialInterval);

    const handleChange = (event) => {
      setTimerInterval(event.target.value);
    };

  const WebsiteField = (props) => (
    <h4>
      {props.website}
    </h4>
  );

  return (
    <>
      <ReactBootstrapSlider
        min={minInterval}
        max={maxInterval}
        value={timerInterval}
        change={handleChange}
        selection="none"
        orientation="horizontal"
        handle="custom"
        ticks={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]}
        ticks_labels={["5m", "10m", "15m", "20m", "25m", "30m", "35m", "40m", "45m", "50m", "55m", "60m"]}
      />
      <br />
      <h5>Where do you procrastinate?</h5>
      <WebsiteField website="Netflix" />
      <p>
        <strong>{timerInterval} minutes</strong>
      </p>
      <br />
      <WebsiteField website="Youtube" />
      <p>
        <strong>{timerInterval} minutes</strong>
      </p>
      <br />
      <WebsiteField website="Facebook" />
      <p>
        <strong>{timerInterval} minutes</strong>
      </p>
    </>
  );
};

export {Slider};
