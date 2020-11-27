import React from "react";
import Button from "@material-ui/core/Button";
import sad from "../styling/sad.png";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

// Style
import { QuizContainer } from "../styling/Containers";

export const OhNo = () => {
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
      <h2>Oh no!</h2>
      <h2>You didn't get any answers correct, but keep going.</h2>
      <img alt="Drawing of a sad king or queen" src={sad} />
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

export default OhNo;
