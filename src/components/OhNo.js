import React from "react";
import sad from "./images/sad.png";

export const OhNo = ({ score, numberOfQuestions }) => {
  return (
    <div>
      <h2>Oh no!</h2>
      <h2>
        You finished the quiz with {score}/{numberOfQuestions}{" "}
      </h2>
      <img alt="Drawing of a sad king or queen" src={sad} />
    </div>
  );
};

export default OhNo;
