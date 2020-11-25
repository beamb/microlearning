import React from "react";
import Button from "@material-ui/core/Button";
import bravo from "../styling/kingdom-1.png";

export const Congratulations = (props) => {
  return (
    <div>
      <h2>Congratulations!</h2>
      <h2>
        You finished the quiz with {props.score}/{props.numberOfQuestions}{" "}
        correct answers.
      </h2>
      <img alt="Drawing of king or queen holding two thumbs up" src={bravo} />
      <div>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          type="button"
          style={{
            borderRadius: 999,
            margin: "2em",
          }}
          onClick={props.handleProcrastinateClick()}
        >
          Procrastinate
        </Button>
        <Button
          onClick={() => {
            props.QuizAgainButton();
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Congratulations;
