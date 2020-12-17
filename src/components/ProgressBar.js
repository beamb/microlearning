import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const ProgressBar = ({ numberOfQuestions, skipped, activeStep }) => {
  const steps = Array.from(Array(numberOfQuestions).keys());

  const isStepWrong = (step) => {
    return skipped.has(step);
  };

  const theme = createMuiTheme({
    overrides: {
      MuiStepIcon: {
        root: {
          "&$completed": {
            color: "#a5d6a7",
          },
          "&$active": {
            color: "#21B6A8",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((index) => {
          const stepProps = {};
          if (isStepWrong(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </ThemeProvider>
  );
};

export default ProgressBar;
