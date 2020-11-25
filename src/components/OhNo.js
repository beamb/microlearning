import React from "react";
import Button from "@material-ui/core/Button";
import sad from "../styling/sad.png";

export const OhNo = (props) => {
  return (
    <div>
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

export default OhNo;
