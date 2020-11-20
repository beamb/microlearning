import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const StyledToggleButton = withStyles({
  root: {
    background: "none",
    borderRadius: 4,
    color: "black",
    height: 42,
    width: 150,
    padding: "0 30px",
    borderColor: "#d4d4d4",
    "&:hover": {
      borderColor: "#21B6A8",
      background: "none",
    },
  },
  selected: {
    "&&": {
      borderColor: "#21B6A8",
      borderWidth: "medium",
      background: "none",
      color: "black",
      "&:hover": {
        background: "none",
        borderColor: "#21B6A8",
      },
    },
  },
})(ToggleButton);

export const QuizSettings = (props) => {
  const handleNumberChange = (event, number) => {
    console.log(number);
    props.setInterruption(number);
  };

  return (
    <div>
      <h4>How many questions can I ask you when I interrupt you?</h4>
      <ToggleButtonGroup
        value={props.interruption}
        exclusive
        onChange={handleNumberChange}
        aria-label="number of questions"
      >
        <StyledToggleButton size="large" value={5} aria-label="5 questions">
          5
        </StyledToggleButton>
        <StyledToggleButton size="large" value={10} aria-label="10 questions">
          10
        </StyledToggleButton>
        <StyledToggleButton size="large" value={15} aria-label="15 questions">
          15
        </StyledToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default QuizSettings;
