import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styled, { css } from "styled-components";
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

  const disable = () => {
    props.disable(props.website);
  };

  const handleBlur = () => {
    props.validateInput(props.website);
  };

  const handleDelete = () => {
    props.delete(props.website);
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
          <Button
            type="button"
            onClick={() => {
              switchLabel();
              disable();
            }}
          >
            {label}
          </Button>
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
