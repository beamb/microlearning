import React from "react";
import bravo from "./images/kingdom-1.png";

export const Congratulations = ({ score, numberOfQuestions }) => {
  return (
    <div>
      <h2>Congratulations!</h2>
      <h2>
        You finished the quiz with {score}/{numberOfQuestions}{" "}
        {/* correct answers. */}
      </h2>
      <img alt="Drawing of king or queen holding two thumbs up" src={bravo} />
    </div>
  );
};

export default Congratulations;
