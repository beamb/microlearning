import styled from "styled-components";
import { Settings } from "@styled-icons/feather/Settings";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { Java } from "@styled-icons/fa-brands/Java";
import { Javascript, Python } from "@styled-icons/simple-icons/";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Trash } from "@styled-icons/heroicons-outline";
import { ArrowBackOutline } from "@styled-icons/evaicons-outline";
import { AddCircle } from "@styled-icons/ionicons-outline";

export const SettingsWheel = styled(Settings)`
  color: grey;
  cursor: pointer;
`;

export const CloseCross = styled(Close)`
  color: grey;
  cursor: pointer;
`;

export const DeleteButton = styled(Trash)`
  color: red;
  cursor: pointer;
`;

export const JavaIcon = styled(Java)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
  cursor: pointer;
`;

export const PythonIcon = styled(Python)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
  cursor: pointer;
`;

export const JSIcon = styled(Javascript)`
  margin: 0.5em 1em;
  color: rgba(33, 182, 168, 1);
  cursor: pointer;
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

export const BackArrow = styled(ArrowBackOutline)`
  color: black;
  cursor: pointer;
`;

export const AddButton = styled(AddCircle)`
  color: black;
  cursor: pointer;
  margin: 0.5em;
`;
