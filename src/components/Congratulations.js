import React from "react";
import Button from "@material-ui/core/Button";
import bravo from "../styling/kingdom-1.png";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

// Style
import { QuizContainer } from "../styling/Containers";

export const Congratulations = (props) => {
  const handleProcrastinateClick = () => {
    console.log("the link was clicked to close");
    window.close();
  };

  const QuizAgainButton = () => (
    <Link to="/language" style={{ textDecoration: "none" }}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        type="button"
        style={{
          color: "white",
          borderRadius: 999,
          margin: "2em",
        }}
        startIcon={<PlayCircleOutlineIcon />}
        onClick={() => {
          console.log("the link was clicked to quiz again");
        }}
      >
        Quiz
      </Button>
    </Link>
  );

  return (
    <QuizContainer>
      <h2>Congratulations!</h2>
      <h2>
        You finished the quiz with {props.score}/{props.numberOfQuestions}{" "}
        {/* correct answers. */}
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
          onClick={handleProcrastinateClick}
        >
          Procrastinate
        </Button>
        <QuizAgainButton />
      </div>
    </QuizContainer>
  );
};

export default Congratulations;
