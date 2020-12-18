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
//correctQuestions is passed form Quiz, it is an array containing the qid for the correct questoins
export const FinalPage = ({ score, numberOfQuestions, setScore, correctQuestions, setCorrectQuestions}) => {
  const initialState = {
    questions: [{
      qid: "",
      leanred: 0,
    },]
  };
  
  const questions = Array.from(Array(correctQuestions).keys());

  const [user] = useAuthState(firebaseAppAuth);
  const [userQuestions, setUserQuestions] = useState(initialState);
  
  const userCorrectQuestions = {
    correctQuestions: [ {
      //testing if the values are passed to the database
      qid: questions[0],
      learned: 1,
    
    }],
  };

  const setUpCorrectQuestions = () => {
    database.collection("users").doc(user.uid).set({ userCorrectQuestions });
  };

  useEffect(() => {
    checkData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkData = async () => {
    await database
      .collection("users")
      .doc(user.uid)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          //seems like userCorrectQuestions is undefined???
          setUserQuestions(doc.data().userCorrectQuestions.qid);
        } else {
          // doc.data() will be undefined in this case

          setUpCorrectQuestions();
        }
      })
      .catch(function (error) {
        console.error("Error getting document: ", error);
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
          console.log(questions);
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
