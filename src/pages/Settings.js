import React, { useState } from "react";
import { Slider } from "../components/Slider";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export const Settings = () => {
  const [interruption, setInterruption] = useState("5");

  console.log("number of questions: " + interruption);

  const NumberButton = (props) => (
    <Button type="button"
      onClick={() => {
         console.log(props.number + " questions has been clicked.");
          // sets the interruption in state to n questions
         setInterruption(props.number);
      }}
    >
     {props.number} 
    </Button>
  );

  

  return (
    <div>
      <h3>How many questions can I ask you when I interrupt you?</h3>
      <NumberButton number="5" />
      <NumberButton number="10" />
      <NumberButton number="15" />
      <br />
      <h3>How often can I interrupt your procrastination?</h3>
      <Slider initialInterval={15} minInterval={5} maxInterval={60} />
    </div>
  );
};

export default Settings;
