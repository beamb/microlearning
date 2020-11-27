import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { DeleteButton } from "../styling/Icons";

export const WebsiteField = ({
  websiteName,
  websiteInterval,
  websiteState,
  updateWebsite,
  handleInputInterval,
  toggleCheckboxes,
  validateInput,
  disableField,
  websiteIsDisabled,
  deleteWebsite,
}) => {
  const [label, setLabel] = useState("Interruptions enabled");

  const switchLabel = () => {
    setLabel(
      label === "Interruptions enabled"
        ? "Interruptions disabled"
        : "Interruptions enabled"
    );
  };

  const handleCheckboxChange = () => {
    updateWebsite(websiteName);
  };

  const handleInputChange = (event) => {
    disableOtherCheckboxes();
    handleInputInterval(event.target.value);
  };

  const disableOtherCheckboxes = () => {
    toggleCheckboxes(websiteName);
  };

  const disable = () => {
    disableField(websiteName);
  };

  const handleBlur = () => {
    validateInput(websiteName);
  };

  const handleDelete = () => {
    deleteWebsite(websiteName);
  };

  const handleSwitchChange = () => {
    switchLabel();
    disable();
  };

  return (
    <div style={{ marginLeft: "0.75em" }}>
      <FormControl component="fieldset">
        <FormGroup
          aria-label="position"
          row
          style={{ display: "flex", alignItems: "center" }}
        >
          <FormControlLabel
            value={websiteName}
            control={
              <Checkbox
                color="primary"
                checked={websiteState}
                onChange={handleCheckboxChange}
                disabled={websiteIsDisabled}
              />
            }
            label={websiteName}
            labelPlacement="end"
          />
          <FormControlLabel
            control={
              <Switch
                checked={!websiteIsDisabled}
                onChange={handleSwitchChange}
                name="webSwitch"
                color="primary"
              />
            }
            label={label}
          />

          <DeleteButton
            size="30"
            style={{ margin: "0.25em", marginRight: "1em" }}
            type="button"
            onClick={handleDelete}
          >
            Delete
          </DeleteButton>
          <TextField
            id="standard-number"
            type="number"
            value={websiteInterval}
            onChange={handleInputChange}
            onBlur={handleBlur}
            helperText="minutes"
            InputProps={{ inputProps: { min: 5, max: 60 } }}
            disabled={websiteIsDisabled}
            style={{ margin: "0.25em" }}
          />
        </FormGroup>
      </FormControl>
      <br />
    </div>
  );
};

export default WebsiteField;
