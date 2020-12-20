import React, { useState, useEffect } from "react";
import { javaQuestions } from "../quiz-questions/javaquestions";
import { pythonQuestions } from "../quiz-questions/pythonquestions";
import { javascriptQuestions } from "../quiz-questions/javascriptquestions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

// Style
import { QuizContainer, QuestionContainer } from "../styling/Containers";

const styles = {
  column: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

const Stepperstyles = {
  column: {
    display: "flex",
    flexDirection: "column",
    width: 150,
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
    padding: "5 30",
    borderColor: "#d4d4d4",
    margin: "0.3em",
    "&:hover": {
      borderColor: "#21B6A8",
      borderWidth: "medium",
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

const Quiz = ({ selectedLanguage, numberOfQuestions, score, setScore }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };

  const [nextButtonDisplay, setNextButtonDisplay] = useState(true);
  const [randomNo, setRandomNo] = useState(randomNumber);
  const [questionCount, setQuestionCount] = useState(1);
  const [questionsAsked, setQuestionsAsked] = useState([0]);
  const [disable, setDisable] = useState(false);
  const [answer, setAnswer] = useState("");
  const [skipped] = useState(new Set());
  const [activeStep, setActiveStep] = useState(0);

  const questions = {
    python: pythonQuestions,
    javascript: javascriptQuestions,
    java: javaQuestions,
  };

  const history = useHistory();

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

  useEffect(() => {
    checkAnswers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionCount]);

  const checkAnswers = () => {
    questions[selectedLanguage][randomNo].options.forEach((op, index) => {
      if (op.is_correct) {
        setCorrect(index);
      }
    });
  };

  const handleAnswerOptionClick = (index, answerOption) => {
    if (answerOption.is_correct) {
      setAnswer("Congratulations! Your answer was correct.");
      setScore(score + 1);
      const newState = { ...buttonColor, [index]: green };
      setButtonColor(newState);
    } else {
      setAnswer("Oh no! Your answer was wrong.");
      const newState = { ...buttonColor, [correct]: green, [index]: red };
      setButtonColor(newState);
      skipped.add(activeStep);
    }
    setDisable(true);
  };

  //The if statement should be dependent on the user settings and how many questions the user want to be asked
  //The nextQuestion variable should add together how many questions has been asked

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
      history.push("/final_page");
    }
  };

  return (
    <QuizContainer>
      <QuestionContainer>
        {/* Question section */}
        <div style={styles.row}>
          {/* Answer section */}
          <div style={styles.column}>
            <h2>
              {questions[selectedLanguage][randomNo].question}
              {styles.width}
            </h2>
            {questions[selectedLanguage][randomNo].options.map(
              (answerOption, index) => {
                return (
                  <StyledButton
                    key={index}
                    variant="outlined"
                    style={{ backgroundColor: buttonColor[index] }}
                    onClick={() => handleAnswerOptionClick(index, answerOption)}
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
                    <strong>{answer}</strong>
                    <br />
                    <strong>Explanation:</strong>{" "}
                    {questions[selectedLanguage][randomNo].description}
                  </p>{" "}
                </StyledButton>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div style={Stepperstyles.column}>
            {/* Progress bar section */}
            <ProgressBar
              numberOfQuestions={numberOfQuestions}
              skipped={skipped}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              answer={answer}
            />
            <Button
              variant="contained"
              size="medium"
              color="primary"
              disabled={!disable}
              onClick={handleNextButtonClick}
            >
              {questionCount < numberOfQuestions ? "Next" : "Finish"}
            </Button>
          </div>
        </div>

        {/* Next question button */}
        <div></div>
      </QuestionContainer>
    </QuizContainer>
  );
};

export default Quiz;
