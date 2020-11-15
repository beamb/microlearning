import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      Description: "How do you create a variable with the numeric value 13?",
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
        "Which method can be used to return a string in upper case letters?",
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
      Description: "Which operator can be used to compare two values?",
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
      Description: "What langugage is this extension written in?",
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

  const QuizAgainButton = () => (
    <Link to="/language">
      <StartQuizButton
        primary
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
            <ProcrastinateButton onClick={handleProcrastinateClick}>
              Procrastinate
            </ProcrastinateButton>
            <QuizAgainButton />
          </div>
        </div>
      ) : (
        <>
          {/* Question section */}
          <div>
            {/* Question description */}
            <p>{selectedLanguage}</p>
            <div>{questions[currentQuestion].Description}</div>
          </div>
          {/* Answer section */}
          <div>
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
            <NextButton onClick={handleNextButtonClick}>Next</NextButton>
          </div>
        </>
      )}
    </QuizContainer>
  );
}

export default Quiz;
