import React, { useState } from "react";
import { Link } from "react-router-dom";
import { javaQuestions } from "./javaquestions";
import { pythonQuestions } from "./pythonquestions";
import { javascriptQuestions } from "./javascriptquestions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// Style
import { QuizContainer, QuestionContainer } from "../styling/Containers";
import { ProgressBar, ProgressStep, Label } from "../styling/Icons";

const styles = {
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};

const StyledButton = withStyles({
  root: {
    display: "flex",
    background: "none",
    borderRadius: 4,
    color: "black",
    height: 64,
    width: 500,
    padding: "0 30px",
    borderColor: "#d4d4d4",
    margin: "0.3em",
    "&:hover": {
      borderColor: "#21B6A8",
      background: "none",
    },
  },
  selected: {
    "&&": {
      borderColor: "#21B6A8",
      borderWidth: "medium",
      background: "none",
      color: "black",
      "&:hover": {
        background: "none",
        borderColor: "#21B6A8",
      },
    },
  },
  disabled: {
    "&&": {
      background: "white",
      color: "black",
      "align-content": "flex-start",
    },
  },
})(Button);
// only temporary question array
const Quiz = (props) => {
  //const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [shouldShowCorrectAnswer, setShouldShowCorrectAnswer] = useState(false);
  const [nextButtonDisplay, setNextButtonDisplay] = useState(true);
  const [randomNo, setRandomNo] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  // number of questions a user want to be asked, can be found in user settings database
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [questionsAsked, setQuestionsAsked] = useState([0]);
  const [disable, setDisable] = useState(false);

  // Stepper
  const [activeStep, setActiveStep] = React.useState(0);
  const numbers = Array.from(Array(numberOfQuestions).keys());

  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const changeNumber = () => {
    var number = randomNumber();
    if (questionsAsked.includes(number)) {
      var newNumber = randomNumber();
      setRandomNo(newNumber);
      setQuestionsAsked([...questionsAsked, newNumber]);
    } else {
      setRandomNo(number);
      setQuestionsAsked([...questionsAsked, number]);
    }
    console.log(questionsAsked);
  };

  /*  const checkForNumber = (number) => {
    if(questionsAsked.includes(number)) {
      var newNumber = randomNumber()
        checkForNumber(newNumber);
      } else {
        return number;
      } 
  } */

  const handleAnswerOptionClick = (answerOption) => {
    setShouldShowCorrectAnswer(true);
    if (answerOption.is_correct) {
      setScore(score + 1);
    }
    setDisable(true);
  };
  //The if statement should be dependent on the user settings and how many questions the user want to be asked
  //The nextQuestion variable should add together how many questions has been asked

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
        onClick={() => {
          console.log("the link was clicked to quiz again");
        }}
      >
        Quiz
      </Button>
    </Link>
  );

  function handleProcrastinateClick() {
    console.log("the link was clicked to close");
    window.close();
  }

  function handleNextButtonClick() {
    setShouldShowCorrectAnswer(false);
    setDisable(false);
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
            <Button
              size="large"
              variant="contained"
              color="secondary"
              type="button"
              style={{
                color: "white",
                borderRadius: 999,
                margin: "2em",
              }}
              onClick={handleProcrastinateClick}
            >
              Procrastinate
            </Button>
            <QuizAgainButton />
          </div>
        </div>
      ) : (
        <>
          <QuestionContainer>
            {/* Question section */}   
            <div style={styles.row}>
              {/* Answer section */}
              {props.selectedLanguage === "java" ? (
                <div style={styles.column}>
                  <h2>{javaQuestions[randomNo].question}</h2>
                  {javaQuestions[randomNo].options.map((answerOption) => {
                    let buttonColor = "white";
                    if (shouldShowCorrectAnswer) {
                      buttonColor = answerOption.is_correct
                        ? "rgba(165, 214, 167, 1)"
                        : "rgba(239, 83, 80, 0.5)";
                    }
                    return (
                      <StyledButton
                        variant="outlined"
                        style={{ backgroundColor: buttonColor }}
                        onClick={() => handleAnswerOptionClick(answerOption)}
                        disabled={disable}
                      >
                        {answerOption.text}
                      </StyledButton>
                    );
                  })}
                </div>
              <div>
              {disable ? (
                <StyledButton variant="outlined" disabled={true}>
                  <p>
                    <strong>Explanation:</strong>{" "}
                    {javaQuestions[randomNo].description}
                  </p>{" "}
                </StyledButton>
              ) : (
                <p></p>
              )}
            </div>
              ) : props.selectedLanguage === "javascript" ? (
                <div style={styles.column}>
                  <h2>{javascriptQuestions[randomNo].question}</h2>
                  {javascriptQuestions[randomNo].options.map((answerOption) => {
                    let buttonColor = "white";
                    if (shouldShowCorrectAnswer) {
                      buttonColor = answerOption.is_correct
                        ? "rgba(165, 214, 167, 1)"
                        : "rgba(239, 83, 80, 0.5)";
                    }
                    return (
                      <StyledButton
                        variant="outlined"
                        style={{ backgroundColor: buttonColor }}
                        onClick={() => handleAnswerOptionClick(answerOption)}
                        disabled={disable}
                      >
                        {answerOption.text}
                      </StyledButton>
                    );
                  })}
                </div>
              <div>
              {disable ? (
                <StyledButton variant="outlined" disabled={true}>
                  <p>
                    <strong>Explanation:</strong>{" "}
                    {javaQuestions[randomNo].description}
                  </p>{" "}
                </StyledButton>
              ) : (
                <p></p>
              )}
            </div>
              ) : (
                <div style={styles.column}>
                  <h2>{pythonQuestions[randomNo].question}</h2>
                  {pythonQuestions[randomNo].options.map((answerOption) => {
                    let buttonColor = "white";
                    if (shouldShowCorrectAnswer) {
                      buttonColor = answerOption.is_correct
                        ? "rgba(165, 214, 167, 1)"
                        : "rgba(239, 83, 80, 0.5)";
                    }
                    return (
                      <StyledButton
                        variant="outlined"
                        style={{ backgroundColor: buttonColor }}
                        onClick={() => handleAnswerOptionClick(answerOption)}
                        disabled={disable}
                      >
                        {answerOption.text}
                      </StyledButton>
                    );
                  })}
                </div>
              <div>
              {disable ? (
                <StyledButton variant="outlined" disabled={true}>
                  <p>
                    <strong>Explanation:</strong>{" "}
                    {javaQuestions[randomNo].description}
                  </p>{" "}
                </StyledButton>
              ) : (
                <p></p>
              )}
            </div>
              )}
              {/* Progress bar section */}
              <ProgressBar activeStep={activeStep} orientation="vertical">
                {numbers.map((number) => (
                  <ProgressStep key={number}>
                    <Label></Label>
                  </ProgressStep>
                ))}
              </ProgressBar>
            </div>
            <div style={{ float: "right" }}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                disabled={!disable}
                onClick={handleNextButtonClick}
              >
                Next
              </Button>
            </div>
          </QuestionContainer>
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
