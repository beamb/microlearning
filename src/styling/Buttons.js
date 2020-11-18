import styled from "styled-components";

// every buttons
export const Button = styled.button`
  background: transparent;
  color: grey;
`;

// buttons in the Quiz
export const QuizButton = styled.button`
  background: rgba(33, 182, 168, 1);
  border: none;
  color: rgba(45, 55, 72, 1);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// start quiz or quiz again buttons
export const StartQuizButton = styled(QuizButton)`
  background: rgba(33, 182, 168, 1);
  color: rgba(255, 255, 255);
  border-radius: 25px;
`;

// no thanks or procrastinate  buttons
export const ProcrastinateButton = styled(QuizButton)`
  background: rgba(226, 232, 240, 1);
`;

// the cross button
export const ExitButton = styled.button`
  background: rgba(226, 232, 240, 1);
  color: rgba(45, 55, 72, 1);
`;

// next button
export const NextButton = styled(QuizButton)`
  background: rgba(33, 182, 168, 1);
  color: rgba(255, 255, 255);
`;

// save & back button
export const SBButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  font-size: 1.5em;
  font-weight: 700;
  cursor: pointer;
  font-family: "Lato", sans-serif;
`;
