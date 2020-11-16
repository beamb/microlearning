import React, { useState } from "react";

import Language from "./Language";
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import {javaQuestions} from "./javaquestions"
import {pythonQuestions} from "./pythonquestions"
import {javascriptQuestions} from "./javascriptquestions"
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


// We need a way to access the langugage from the state in the Language component.

// only temporary question array
function Quiz(props) {

  const [langugage, setLanguage] = useState("");
  //const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [buttonColor, setButtonColor] = useState("white");
  const [nextButtonDisplay, setNextButtonDisplay] = useState(true);
  const [randomNo, setRandomNo] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  // number of questions a user want to be asked, can be found in user settings database
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
 

  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  }

  const changeNumber = () => {
    var number = randomNumber();
    setRandomNo(number);
  }

  const handleAnswerOptionClick = (answerOption) => {
    setButtonColor(
      answerOption.is_correct
        ? "rgba(165, 214, 167, 1)"
        : "rgba(239, 83, 80, 0.5)"
    );
    if (answerOption.is_correct) {
      setScore(score + 1);
    }
  };

  //The if statement should be dependent on the user settings and how many questions the user want to be asked
  //The nextQuestion variable should add together how many questions has been asked
  const handleNextClick = () => {
    if (questionCount < 5) {
      changeNumber();
      setQuestionCount(questionCount + 1);
      console.log(questionCount);
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
            You finished the quiz with {score}/4 correct
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
              {javaQuestions[randomNo].question}
            </div>
          </div>
          <div className="answer-section">
            {javaQuestions[randomNo].options.map((answerOption) => (
              <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => handleAnswerOptionClick(answerOption)}
              >
                {answerOption.text}
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
