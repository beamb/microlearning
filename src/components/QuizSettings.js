import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { purple } from "@material-ui/core/colors";

const NumberButton = withStyles(() => ({
  root: {
    borderColor: "#d4d4d4",
    "&:hover": {
      borderColor: "#21B6A8",
    },
  },
}))(Button);

const SelectedButton = withStyles(() => ({
  root: {
    borderColor: "#21B6A8",
    "&:hover": {
      borderColor: "#21B6A8",
    },
  },
}))(Button);

export const QuizSettings = (props) => {
  const handleNumberChange = (number) => {
    props.setInterruption(number);
  };

  return (
    <div>
      <h4>How many questions can I ask you when I interrupt you?</h4>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        {props.interruption === 5 ? (
          <SelectedButton style={{ width: "10em", color: "black" }}>
            5
          </SelectedButton>
        ) : (
          <NumberButton
            style={{ width: "10em", color: "black" }}
            onClick={() => handleNumberChange(5)}
          >
            5
          </NumberButton>
        )}
        {props.interruption === 10 ? (
          <SelectedButton style={{ width: "10em", color: "black" }}>
            10
          </SelectedButton>
        ) : (
          <NumberButton
            style={{ width: "10em", color: "black" }}
            onClick={() => handleNumberChange(10)}
          >
            10
          </NumberButton>
        )}
        {props.interruption === 15 ? (
          <SelectedButton style={{ width: "10em", color: "black" }}>
            15
          </SelectedButton>
        ) : (
          <NumberButton
            style={{ width: "10em", color: "black" }}
            onClick={() => handleNumberChange(15)}
          >
            15
          </NumberButton>
        )}
      </ButtonGroup>
    </div>
  );
};

export default QuizSettings;
