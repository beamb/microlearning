import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export const SelectAllCheckbox = (props) => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="select all"
            control={
              <Checkbox
                color="primary"
                checked={props.state}
                onChange={props.checkState}
              />
            }
            label="select all"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default SelectAllCheckbox;
