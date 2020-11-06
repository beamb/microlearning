import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export const QuizSettings = () => {
  const [interruption, setInterruption] = useState("5");

  console.log("number of questions: " + interruption);

  // sets the interruption in state to n questions
  const handleNumberClick = (number) => {
    // e.preventDefault();
    console.log(number + " questions has been clicked.");
    setInterruption(number);
  };

  const NumberButton = (props) => (
    <Button type="button" onClick={() => handleNumberClick(props.number)}>
      {props.number}
    </Button>
  );

  return (
    <div>
      <h3>How many questions can I ask you when I interrupt you?</h3>
      <NumberButton number="5" />
      <NumberButton number="10" />
      <NumberButton number="15" />
    </div>
  );
};

export default QuizSettings;
