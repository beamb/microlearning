import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "75px",
    },
  },
}));

export const WebsiteField = (props) => {
  const classes = useStyles();

  const [label, setLabel] = useState("Disable interruptions");

  const switchLabel = () => {
    setLabel(
      label === "Disable interruptions"
        ? "Enable interruptions"
        : "Disable interruptions"
    );
  };

  const handleCheckboxChange = () => {
    props.changeCheckState(props.website);
  };

  const handleInputChange = (event) => {
    disableOtherCheckboxes();
    props.updateInterval(event.target.value);
  };

  const disableOtherCheckboxes = () => {
    props.disableCheckboxes(props.website);
  };

  const handleBlur = () => {
    props.validateInput(props.website);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value={props.website}
            control={
              <Checkbox
                color="primary"
                checked={props.checkState}
                onChange={handleCheckboxChange}
              />
            }
            label={props.website}
            labelPlacement="end"
          />
          <Button type="button" onClick={switchLabel}>
            {label}
          </Button>
          <Button type="button">Delete</Button>
          <TextField
            id="standard-number"
            type="number"
            value={props.value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            helperText="minutes"
            InputProps={{ inputProps: { min: 5, max: 60 } }}
          />
        </FormGroup>
      </FormControl>
      <br />
    </div>
  );
};

export default WebsiteField;
