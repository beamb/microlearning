import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "../firebase";
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
//styling
import { PromptContainer } from "../styling/Containers";

export const LoggedInPrompt = () => {
  const [user] = useAuthState(firebaseAppAuth);

  const LanguageButton = () => (
    <Link to="/language" style={{ textDecoration: "none" }}>
      <Button
        startIcon={<PlayCircleOutlineIcon />}
        size="large"
        variant="contained"
        color="primary"
        type="button"
        style={{
          color: "white",
          borderRadius: 999,
          margin: "2em",
        }}
      >
        Yes, let's quiz!
      </Button>
    </Link>
  );

  const NoThanksButton = () => (
    <Button
      size="large"
      variant="contained"
      color="secondary"
      type="button"
      style={{ margin: "2em" }}
      onClick={() => {
        window.close();
      }}
    >
      No thanks
    </Button>
  );

  // First pop-up container
  return (
    <PromptContainer>
      <h2>Hi {user.displayName}!</h2>
      <h2>Do you want to answer some questions?</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NoThanksButton />
        <LanguageButton />
      </div>
    </PromptContainer>
  );
};

export default LoggedInPrompt;
