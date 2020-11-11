import React from "react";
import styled from "styled-components";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { AddCircle } from "@styled-icons/ionicons-outline";

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

export const WebsiteForm = (props) => {
  return props.clicked ? (
    <ValidatorForm
      onSubmit={props.submit}
      onError={(errors) => console.log(errors)}
    >
      <div>
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
      </div>
    </ValidatorForm>
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
