import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Trash } from "@styled-icons/heroicons-outline";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const DeleteButton = styled(Trash)`
  color: red;
  cursor: pointer;
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

  const handleInputChange = (event) => {
    disableOtherCheckboxes();
    props.updateInterval(event.target.value);
  };

  const disableOtherCheckboxes = () => {
    props.disableCheckboxes(props.website);
  };

  const disable = () => {
    props.disable(props.website);
  };

  const handleBlur = () => {
    props.validateInput(props.website);
  };

  const handleDelete = () => {
    props.delete(props.website);
  };

  const handleSwitchChange = () => {
    switchLabel();
    disable();
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
                disabled={props.status}
              />
            }
            label={props.website}
            labelPlacement="end"
          />
          <FormControlLabel
            control={
              <Switch
                checked={!props.status}
                onChange={handleSwitchChange}
                name="webSwitch"
                color="primary"
              />
            }
            label={label}
          />

          <DeleteButton size="30" type="button" onClick={handleDelete}>
            Delete
          </DeleteButton>
          <TextField
            id="standard-number"
            type="number"
            value={props.value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            helperText="minutes"
            InputProps={{ inputProps: { min: 5, max: 60 } }}
            disabled={props.status}
          />
        </FormGroup>
      </FormControl>
      <br />
    </div>
  );
};

export default WebsiteField;
