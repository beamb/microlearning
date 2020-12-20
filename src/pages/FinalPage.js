import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Congratulations from "../components/Congratulations";
import OhNo from "../components/OhNo";
import Confetti from "react-confetti";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth, database } from "../firebase";

// Style
import { QuizContainer } from "../styling/Containers";
export const FinalPage = ({
  score,
  numberOfQuestions,
  setScore,
  correctQuestions,
  setCorrectQuestions,
}) => {

  const [user] = useAuthState(firebaseAppAuth);


database.collection("users").doc(user.uid).update({ correctQuestions });

  const updateCorrectQuestions = (questions) => {
    database
      .collection("users")
      .doc(user.uid)
      .update({
        "correctQuestions": questions,
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
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
          updateCorrectQuestions(correctQuestions);
          console.log(correctQuestions);
          console.log(score);
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
        <Confetti width={720} height={500} recycle={false} />
        <Congratulations numberOfQuestions={numberOfQuestions} score={score}  />
        <div>
          <ProcrastinateButton />
          <QuizAgainButton />
        </div>
      </QuizContainer>
    );
  } else {
    return (
      <QuizContainer>
        <OhNo numberOfQuestions={numberOfQuestions} score={score}/>
        <div>
          <ProcrastinateButton />
          <QuizAgainButton />
        </div>
      </QuizContainer>
    );
  }
};

export default FinalPage;
