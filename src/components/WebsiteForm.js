import React, { useState } from "react";
import styled from "styled-components";
import { AddCircle } from "@styled-icons/ionicons-outline";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const AddButton = styled(AddCircle)`
  color: black;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const WebsiteForm = (props) => {
  const classes = useStyles();
  const [webName, setWebName] = useState("");

  const handleSelectChange = (event) => {
    let name = event.target.value;
    setWebName(name);
    props.addSiteFromName(name);
  };

  return props.clicked ? (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Pick a website</InputLabel>

        <Select native value={webName} onChange={handleSelectChange}>
          <option aria-label="None" value="" />
          <option value={"Disney+"}>Disney+</option>
          <option value={"Facebook"}>Facebook</option>
          <option value={"HBO Nordic"}>HBO Nordic</option>
          <option value={"Instagram"}>Instagram</option>
          <option value={"LinkedIn"}>LinkedIn</option>
          <option value={"Netflix"}>Netflix</option>
          <option value={"Twitter"}>Twitter</option>
          <option value={"Youtube"}>Youtube</option>
        </Select>
      </FormControl>
      <ValidatorForm
        onSubmit={props.submit}
        //onError={(errors) => console.log(errors)}
      >
        <p>OR add a website below</p>
        <TextValidator
          required={true}
          variant="outlined"
          label="URL"
          onChange={props.changeURL}
          name="url"
          helperText="https://www.example.com"
          value={props.url}
          validators={[
            "matchRegexp:^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|dk|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$",
          ]}
          errorMessages={["This URL is not valid"]}
        />
        <TextValidator
          required={true}
          variant="outlined"
          label="Name"
          onChange={props.changeName}
          name="name"
          value={props.name}
          validators={["isString"]}
          errorMessages={["The website name is not valid"]}
        />
        <Button type="submit">Add</Button>
      </ValidatorForm>
    </div>
  ) : (
    <div>
      <AddButton size="30" type="button" onClick={props.changeClick}>
        Add
      </AddButton>
      <p>Add more websites</p>
    </div>
  );
};

export default WebsiteForm;
