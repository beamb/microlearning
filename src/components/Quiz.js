import React, { useState } from "react";
import { Link } from "react-router-dom";
import { javaQuestions } from "./javaquestions";
import { pythonQuestions } from "./pythonquestions";
import { javascriptQuestions } from "./javascriptquestions";
// Style
import { QuizContainer, QuestionContainer } from "../styling/Containers";
import {
  StartQuizButton,
  ProcrastinateButton,
  NextButton,
} from "../styling/Buttons";
import { ProgressBar, ProgressStep, Label } from "../styling/Icons";

// only temporary question array
function Quiz(props) {
  const { selectedLanguage } = props;
  //const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [buttonColor, setButtonColor] = useState("white");
  const [nextButtonDisplay, setNextButtonDisplay] = useState(true);
  const [randomNo, setRandomNo] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  // number of questions a user want to be asked, can be found in user settings database
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  // Stepper
  const [activeStep, setActiveStep] = React.useState(0);
  const numbers = [1, 2, 3, 4];

  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const changeNumber = () => {
    var number = randomNumber();
    setRandomNo(number);
  };

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

  const QuizAgainButton = () => (
    <Link to="/language">
      <StartQuizButton
        type="button"
        onClick={() => {
          console.log("the link was clicked to quiz again");
        }}
      >
        Quiz
      </StartQuizButton>
    </Link>
  );

  function handleProcrastinateClick() {
    console.log("the link was clicked to close");
    window.close();
  }

  function handleNextButtonClick() {
    if (questionCount < numberOfQuestions) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      changeNumber();
      setQuestionCount(questionCount + 1);
      console.log(questionCount);
    } else {
      setNextButtonDisplay(nextButtonDisplay ? false : true);
      setShowScore(true);
    }
  }

  return (
    <QuizContainer>
      {showScore ? (
        // Finish section
        <div>
          <p>Congratulations!</p>
          <p>
            You finished the quiz with {score}/{numberOfQuestions} correct
            answers.
          </p>
          <div>
            <ProcrastinateButton onClick={handleProcrastinateClick}>
              Procrastinate
            </ProcrastinateButton>
            <QuizAgainButton />
          </div>
        </div>
      ) : (
        <>
          <QuestionContainer>
            {/* Question section */}
            <div>
              {/* Question description */}
              <p>{javaQuestions[randomNo].question}</p>
            </div>
            {/* Answer section */}
            <div>
              {javaQuestions[randomNo].options.map((answerOption) => (
                <button
                  style={{ backgroundColor: buttonColor }}
                  onClick={() => handleAnswerOptionClick(answerOption)}
                >
                  {answerOption.text}
                </button>
              ))}
            </div>

            {/* Progress bar section */}
            <ProgressBar activeStep={activeStep} orientation="vertical">
              {numbers.map((number) => (
                <ProgressStep key={number}>
                  <Label></Label>
                </ProgressStep>
              ))}
            </ProgressBar>
            <div>
              <NextButton onClick={handleNextButtonClick}>Next</NextButton>
            </div>
          </QuestionContainer>
        </>
      )}
    </QuizContainer>
  );
}

export default Quiz;
