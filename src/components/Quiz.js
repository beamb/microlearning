import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { javaQuestions } from "./javaquestions";
import { pythonQuestions } from "./pythonquestions";
import { javascriptQuestions } from "./javascriptquestions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import bravo from "../styling/kingdom-1.png";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
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
    justifyContent: "space-evenly",
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
    padding: "5 30",
    borderColor: "#d4d4d4",
    margin: "0.3em",
    "&:hover": {
      borderColor: "#21B6A8",
      background: "none",
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
const Quiz = ({ selectedLanguage, numberOfQuestions }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };
  //const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [nextButtonDisplay, setNextButtonDisplay] = useState(true);
  const [randomNo, setRandomNo] = useState(randomNumber);
  const [questionCount, setQuestionCount] = useState(1);
  const [questionsAsked, setQuestionsAsked] = useState([0]);
  const [disable, setDisable] = useState(false);

  // Stepper
  const [activeStep, setActiveStep] = useState(0);
  const numbers = Array.from(Array(numberOfQuestions).keys());

  const white = "white";
  // Answers
  const [buttonColor, setButtonColor] = useState({
    0: white,
    1: white,
  });
  const [correct, setCorrect] = useState(0);
  const red = "rgba(239, 83, 80, 0.5)";
  const green = "rgba(165, 214, 167, 1)";

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

  const tagCorrect = (index) => {
    setCorrect(index);
  };

  useEffect(() => {
    checkAnswers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionCount]);

  const checkAnswers = () => {
    if (selectedLanguage === "java") {
      javaQuestions[randomNo].options.forEach((op, index) => {
        if (op.is_correct) {
          tagCorrect(index);
        }
      });
    } else if (selectedLanguage === "javascript") {
      javascriptQuestions[randomNo].options.forEach((op, index) => {
        if (op.is_correct) {
          tagCorrect(index);
        }
      });
    } else if (selectedLanguage === "python") {
      pythonQuestions[randomNo].options.forEach((op, index) => {
        if (op.is_correct) {
          tagCorrect(index);
        }
      });
    }
  };

  const handleAnswerOptionClick = (index, answerOption) => {
    if (answerOption.is_correct) {
      setScore(score + 1);
      const newState = { ...buttonColor, [index]: green };
      setButtonColor(newState);
    } else {
      const newState = { ...buttonColor, [correct]: green, [index]: red };
      setButtonColor(newState);
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
        startIcon={<PlayCircleOutlineIcon />}
        onClick={() => {
          console.log("the link was clicked to quiz again");
        }}
      >
        Quiz
      </Button>
    </Link>
  );

  const handleProcrastinateClick = () => {
    console.log("the link was clicked to close");
    window.close();
  };

  const handleNextButtonClick = () => {
    setButtonColor({ 0: white, 1: white });
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
  };

  return (
    <QuizContainer>
      {showScore ? (
        // Finish section
        <div>
          <h2>Congratulations!</h2>
          <h2>
            You finished the quiz with {score}/{numberOfQuestions} correct
            answers.
          </h2>
          <img
            alt="Drawing of king or queen holding two thumbs up"
            src={bravo}
          />
          <div>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              type="button"
              style={{
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
              {selectedLanguage === "java" ? (
                <div style={styles.column}>
                  <h2>{javaQuestions[randomNo].question}</h2>
                  {javaQuestions[randomNo].options.map(
                    (answerOption, index) => {
                      return (
                        <StyledButton
                          key={index}
                          variant="outlined"
                          style={{ backgroundColor: buttonColor[index] }}
                          onClick={() =>
                            handleAnswerOptionClick(index, answerOption)
                          }
                          disabled={disable}
                        >
                          {answerOption.text}
                        </StyledButton>
                      );
                    }
                  )}
                  {disable ? (
                    <div>
                      <StyledButton
                        variant="outlined"
                        disabled={true}
                        style={{ height: "fit-content" }}
                      >
                        <p>
                          <strong>Explanation:</strong>{" "}
                          {javaQuestions[randomNo].description}
                        </p>{" "}
                      </StyledButton>
                    </div>
                  ) : (
                    <p></p>
                  )}
                </div>
              ) : selectedLanguage === "javascript" ? (
                <div style={styles.column}>
                  <h2>{javascriptQuestions[randomNo].question}</h2>
                  {javascriptQuestions[randomNo].options.map(
                    (answerOption, index) => {
                      return (
                        <StyledButton
                          key={index}
                          variant="outlined"
                          style={{ backgroundColor: buttonColor[index] }}
                          onClick={() =>
                            handleAnswerOptionClick(index, answerOption)
                          }
                          disabled={disable}
                        >
                          {answerOption.text}
                        </StyledButton>
                      );
                    }
                  )}
                  {disable ? (
                    <div>
                      <StyledButton
                        variant="outlined"
                        disabled={true}
                        style={{ height: "fit-content" }}
                      >
                        <p>
                          <strong>Explanation:</strong>{" "}
                          {javascriptQuestions[randomNo].description}
                        </p>{" "}
                      </StyledButton>
                    </div>
                  ) : (
                    <p></p>
                  )}
                </div>
              ) : (
                <div style={styles.column}>
                  <h2>{pythonQuestions[randomNo].question}</h2>
                  {pythonQuestions[randomNo].options.map(
                    (answerOption, index) => {
                      return (
                        <StyledButton
                          key={index}
                          variant="outlined"
                          style={{ backgroundColor: buttonColor[index] }}
                          onClick={() =>
                            handleAnswerOptionClick(index, answerOption)
                          }
                          disabled={disable}
                        >
                          {answerOption.text}
                        </StyledButton>
                      );
                    }
                  )}
                  {disable ? (
                    <div>
                      <StyledButton
                        variant="outlined"
                        disabled={true}
                        style={{ height: "fit-content" }}
                      >
                        <p>
                          <strong>Explanation:</strong>{" "}
                          {pythonQuestions[randomNo].description}
                        </p>{" "}
                      </StyledButton>
                    </div>
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
