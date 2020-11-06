import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export const WebsiteField = (props) => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value={props.website}
            control={<Checkbox color="primary" />}
            label={props.website}
            labelPlacement="end"
          />
          <h4>
            <span>{props.value} minutes</span>
          </h4>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default WebsiteField;
