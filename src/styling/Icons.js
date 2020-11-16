import styled from "styled-components";
import { Settings } from "@styled-icons/feather/Settings";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { Java } from "@styled-icons/fa-brands/Java";
import { Javascript, Python } from "@styled-icons/simple-icons/";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export const SettingsWheel = styled(Settings)`
  color: grey;
`;

export const CloseCross = styled(Close)`
  color: grey;
`;

export const JavaIcon = styled(Java)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
`;

export const PythonIcon = styled(Python)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
`;

export const JSIcon = styled(Javascript)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
`;

export const ProgressBar = styled(Stepper)`
  color: rgba(33, 182, 168, 1);
`;

export const ProgressStep = styled(Step)`
  color: rgba(33, 182, 168, 1);
`;

export const Label = styled(StepLabel)`
  color: rgba(33, 182, 168, 1);
`;
