import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Congratulations from "./Congratulations";
import OhNo from "./OhNo";

// Style
import { QuizContainer } from "../styling/Containers";

export const FinalPage = ({ score, numberOfQuestions, setScore }) => {
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
          setScore(0);
        }}
      >
        Quiz Again
      </Button>
    </Link>
  );

  const ProcrastinateButton = () => (
    <Link to="/language" style={{ textDecoration: "none" }}>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        type="button"
        style={{
          borderRadius: 999,
          margin: "2em",
        }}
        onClick={() => {
          window.close();
        }}
      >
        Procrastinate
      </Button>
    </Link>
  );

  if (score / numberOfQuestions >= 0.2) {
    return (
      <QuizContainer>
        <Congratulations numberOfQuestions={numberOfQuestions} score={score} />
        <div>
          <ProcrastinateButton />
          <QuizAgainButton />
        </div>
      </QuizContainer>
    );
  } else {
    return (
      <QuizContainer>
        <OhNo numberOfQuestions={numberOfQuestions} score={score} />
        <div>
          <ProcrastinateButton />
          <QuizAgainButton />
        </div>
      </QuizContainer>
    );
  }
};

export default FinalPage;
