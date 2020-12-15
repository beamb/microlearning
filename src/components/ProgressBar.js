import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const ProgressBar = ({ numberOfQuestions, skipped, activeStep }) => {
  const steps = Array.from(Array(numberOfQuestions).keys());

  const isStepWrong = (step) => {
    return skipped.has(step);
  };

  return (
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
  );
};

export default ProgressBar;
