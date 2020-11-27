import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { AddContainer } from "../styling/Containers";
import { AddButton } from "../styling/Icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 415,
  },
}));

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};

export const WebsiteForm = ({
  handleSubmit,
  urlInput,
  handleURLInput,
  nameInput,
  handleNameInput,
  isClicked,
  toggleClick,
  addWebsiteFromName,
}) => {
  const classes = useStyles();
  const [webName, setWebName] = useState("");

  const handleSelectChange = (event) => {
    let name = event.target.value;
    setWebName(name);
    addWebsiteFromName(name);
    setWebName("");
  };

  return isClicked ? (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Pick a website
        </InputLabel>

        <Select
          native
          value={webName}
          onChange={handleSelectChange}
          label="Pick a website"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
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
        onSubmit={handleSubmit}
        onError={(errors) => console.error("Error submitting input: ", errors)}
      >
        <p>OR add a website below</p>
        <div style={styles.row}>
          <TextValidator
            required={true}
            variant="outlined"
            label="URL"
            onChange={handleURLInput}
            name="url"
            helperText=""
            value={urlInput}
            validators={[
              "matchRegexp:^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|dk|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$",
            ]}
            errorMessages={["This URL is not valid"]}
            style={{ margin: "0.5em" }}
          />

          <TextValidator
            required={true}
            variant="outlined"
            label="Name"
            onChange={handleNameInput}
            name="name"
            helperText=""
            value={nameInput}
            validators={["isString"]}
            errorMessages={["The website name is not valid"]}
            style={{ margin: "0.5em" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              height: "3em",
              float: "right",
              margin: "0.5em",
              color: "white",
            }}
          >
            Add
          </Button>
        </div>
        <br />
      </ValidatorForm>
    </div>
  ) : (
    <div>
      <AddContainer>
        <AddButton size="30" type="button" onClick={toggleClick}>
          Add
        </AddButton>
        <p>Add more websites</p>
      </AddContainer>
    </div>
  );
};

export default WebsiteForm;
