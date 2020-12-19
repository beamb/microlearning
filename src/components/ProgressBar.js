import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CancelIcon from "@material-ui/icons/Cancel";

const ProgressBar = ({ numberOfQuestions, skipped, activeStep }) => {
  const steps = Array.from(Array(numberOfQuestions).keys());

  const isStepWrong = (step) => {
    return skipped.has(step);
  };

  // I need to change the error svg

  const theme = createMuiTheme({
    overrides: {
      MuiStepIcon: {
        root: {
          color: "#FFFFFF",
          border: "2px solid #545454",
          borderRadius: "50%",
          "&$completed": {
            color: "#a5d6a7",
          },
          "&$active": {
            color: "#FFFFFF",
          },
          "&$error": {
            color: "#ef5350",
            // error: "CancelIcon",
            backgroundColor: "#ef5350",
          },
        },
      },
      MuiStepConnector: {
        root: {
          color: "#545454",
        },
        vertical: {
          padding: 0,
        },
        line: {
          borderColor: "#545454",
        },
        lineVertical: {
          borderLeftWidth: 2,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepWrong(index)) {
            stepProps.completed = false;
            labelProps.error = true;
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </ThemeProvider>
  );
};

export default ProgressBar;
