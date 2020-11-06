import React, { useState } from "react";
import { database } from "../firebase";
import { FireSQL } from 'firesql';
import firebase from 'firebase/app';
import 'firesql/rx'; 

import Language from "./Language";
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

// Style

const Container = styled.div`
  text-align: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 500px;
  background: white;
  color: black;
`;

const Button = styled.button`
  background: rgba(226, 232, 240, 1);
  border: none;
  border-radius: 3px;
  color: rgba(45, 55, 72, 1);
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: rgba(33, 182, 168, 1);
      color: white;
    `}
`;

const java = "java";
const python = "python";

const dbQuestions = database.collection('questions').doc('60IscHtSe4tSGbek18Ag');
const fireSQL = new FireSQL(dbQuestions);

// We need a way to access the langugage from the state in the Language component.

// only temporary question array
function Quiz(props) {
  var qdescription = fireSQL.query('SELECT description FROM questions');
  //var query = dbquestions.where("description", "==", "Which of the following function of Array object reverses the order of the elements of an array?");
  const questions = [
    {
      Description: qdescription.toString(),
      Language: "java",
      Level: 1,
      QuestionId: 0,
      Options: [
        { Text: "float x = 13;", isCorrect: false },
        { Text: "num x = 13;", isCorrect: false },
        { Text: "int x = 13;", isCorrect: true },
        { Text: "x = 13;", isCorrect: false },
      ],
    },
    {
      Description:
        "Java: Which method can be used to return a string in upper case letters?",
      Language: "java",
      Level: 1,
      QuestionId: 1,
      Options: [
        { Text: "touppercase()", isCorrect: false },
        { Text: "toUpperCase()", isCorrect: true },
        { Text: "tuc()", isCorrect: false },
        { Text: "upperCase()", isCorrect: false },
      ],
    },
    {
      Description: "Java: Which operator can be used to compare two values?",
      Language: "java",
      Level: 1,
      QuestionId: 2,
      Options: [
        { Text: "==", isCorrect: true },
        { Text: "=", isCorrect: false },
        { Text: "<>", isCorrect: false },
        { Text: "><", isCorrect: false },
      ],
    },
    {
      Description: "Java: What langugage is this extension written in?",
      Language: "java",
      Level: 1,
      QuestionId: 3,
      Options: [
        { Text: "Java", isCorrect: false },
        { Text: "Python", isCorrect: false },
        { Text: "SQL", isCorrect: false },
        { Text: "JSX", isCorrect: true },
      ],
    },
  ];

  const [langugage, setLanguage] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [buttonColor, setButtonColor] = useState("white");
  const [nextButtonDisplay, setNextButtonDisplay] = useState(true);

  const handleAnswerOptionClick = (answerOption) => {
    setButtonColor(
      answerOption.isCorrect
        ? "rgba(165, 214, 167, 1)"
        : "rgba(239, 83, 80, 0.5)"
    );
    if (answerOption.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setNextButtonDisplay(nextButtonDisplay ? false : true);
      setShowScore(true);
    }
  };

  const QuizAgainButton = withRouter(({ history }) => (
    <Button
      primary
      type="button"
      onClick={() => {
        history.push("/language");
      }}
    >
      Quiz
    </Button>
  ));

  const ExitButton = () => (
    <button type="button" onClick={() => window.close()}>
      Procrastinate
    </button>
  );

  return (
    <Container>
      {showScore ? (
        <div className="finish-display">
          <p>Congratulations!</p>
          <p>
            You finished the quiz with {score}/{questions.length} correct
            answers.
          </p>
          <div>
            <ExitButton />
            <QuizAgainButton />
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-description">
              {questions[currentQuestion].Description}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].Options.map((answerOption) => (
              <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => handleAnswerOptionClick(answerOption)}
              >
                {answerOption.Text}
              </button>
            ))}
          </div>
          <div>
            <Button
              primary
              className="NextStep"
              disabled={false}
              onClick={() => handleNextClick()}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Quiz;
