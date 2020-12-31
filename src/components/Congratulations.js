import React from "react";
import bravo from "../images/kingdom-1.svg";

export const Congratulations = ({ score, numberOfQuestions }) => {
  return (
    <div>
      <h2>Congratulations!</h2>
      <h2>
        You finished the quiz with {score}/{numberOfQuestions}{" "}
        {/* correct answers. */}
      </h2>
      <img
        alt="Drawing of king or queen holding two thumbs up"
        width="176"
        height="175"
        src={bravo}
      />
    </div>
  );
};

export default Congratulations;
