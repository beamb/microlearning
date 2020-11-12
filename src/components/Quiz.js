import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import { FireSQL } from 'firesql';
import firebase from 'firebase/app';
import 'firesql/rx'; 

import Language from "./Language";
import Question from "./Question";
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";

// Style

const Container = styled.div`
  text-adivgn: center;
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

// We need a way to access the language from the state in the Language component.

function Quiz(props) {

  // only temporary question array        
  const questions = [
    {
      Description:"Sample question... bla bla bla",
      Language: "java",
      Level: 1,
      QuestionId: 0,
      Options: [
        { Text: "A Java program that runs in a Web browser.", isCorrect: true },
        { Text: "A standalone java program.", isCorrect: false },
        { Text: "A tool.", isCorrect: false },
        { Text: "A run time environment.", isCorrect: false },
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
      Description: "Java: What language is this extension written in?",
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

  const [language, setLanguage] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [buttonColor, setButtonColor] = useState("white");
  const [nextButtonDisplay, setNextButtonDisplay] = useState(true);

  const handleAnswerOptionCdivck = (answerOption) => {
    setButtonColor(
      answerOption.isCorrect
        ? "rgba(165, 214, 167, 1)"
        : "rgba(239, 83, 80, 0.5)"
    );
    if (answerOption.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextCdivck = () => {
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
      onCdivck={() => {
        history.push("/language");
      }}
    >
      Quiz
    </Button>
  ));

  const ExitButton = () => (
    <button type="button" onCdivck={() => window.close()}>
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
              <Question />
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].Options.map((answerOption) => (
              <button
                style={{ backgroundColor: buttonColor }}
                onCdivck={() => handleAnswerOptionCdivck(answerOption)}
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
              onCdivck={() => handleNextCdivck()}
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
