import React from "react";
import sad from "../images/kingdom-list-is-empty.svg";

export const OhNo = ({ score, numberOfQuestions }) => {
  return (
    <div>
      <h2>Oh no!</h2>
      <h2>
        You finished the quiz with {score}/{numberOfQuestions}{" "}
      </h2>
      <img
        alt="Drawing of a crying parchment paper"
        width="176"
        height="175"
        src={sad}
      />
    </div>
  );
};

export default OhNo;
