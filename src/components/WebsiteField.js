import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export const WebsiteField = (props) => {
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

  const Interval = () => {
    return props.checkState ? (
      <h4>
        <span>{props.value} minutes</span>
      </h4>
    ) : (
      <h4>
        <span>fixed minutes</span>
      </h4>
    );
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
          <Interval />
        </FormGroup>
      </FormControl>
      <br />
    </div>
  );
};

export default WebsiteField;
