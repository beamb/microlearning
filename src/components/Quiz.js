import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import LanguageDataContainer from "./LanguageDataContainer";

//styling
import { QuizContainer } from "../styling/Containers";
import {
  StartQuizButton,
  ProcrastinateButton,
  NextButton,
} from "../styling/Buttons";

// We need a way to access the langugage from the state in the Language component.

// only temporary question array
function Quiz(props) {
  const questions = [
    {
      Description:
        "Java: How do you create a variable with the numeric value 13?",
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

  const { selectedLanguage } = props;
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

  const StartQuizButton1 = withRouter(({ history }) => (
    <StartQuizButton
      type="button"
      onClick={() => {
        history.push("/language");
      }}
    >
      Quiz
    </StartQuizButton>
  ));

  function handleProcrastinateClick() {
    window.close();
  }

  function handleNextButtonClick() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
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
            You finished the quiz with {score}/{questions.length} correct
            answers.
          </p>
          <div>
            <ProcrastinateButton onCLick={handleProcrastinateClick}>
              Procrastinate
            </ProcrastinateButton>
            <StartQuizButton1>Quiz</StartQuizButton1>
          </div>
        </div>
      ) : (
        <>
          {/* Question section */}
          <div>
            {/* Question description */}
            <div>{questions[currentQuestion].Description}</div>
          </div>
          {/* Answer section */}
          <div>
            {questions[currentQuestion].Options.map((answerOption) => (
              <button
                style={{ backgroundColor: buttonColor }}
                onChange={() => handleAnswerOptionClick(answerOption)}
              >
                {answerOption.Text}
              </button>
            ))}
          </div>
          <div>
            <NextButton onClick={handleNextButtonClick}>Next</NextButton>
          </div>
        </>
      )}
    </QuizContainer>
  );
}

export default Quiz;
